import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createElement } from "react";
import { renderToString } from "react-dom/server";
import { createServer } from "vite";
import { createRobotsTxt } from "./crawlers.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputDir = path.join(root, "dist");
const server = await createServer({
  configFile: path.join(root, "vite.config.js"),
  root,
  mode: "production",
  server: { middlewareMode: true },
  appType: "custom",
  logLevel: "error",
});

try {
  const [{ default: App }, { SITE_URL }, { company, build, hero, measure, nav, principles }] =
    await Promise.all([
      server.ssrLoadModule("/src/App.jsx"),
      server.ssrLoadModule("/src/site.js"),
      server.ssrLoadModule("/src/content.js"),
    ]);

  const htmlPath = path.join(outputDir, "index.html");
  let html = await readFile(htmlPath, "utf8");
  const renderedApp = renderToString(createElement(App));
  const rootMarker = '<div id="root"></div>';
  if (!html.includes(rootMarker)) {
    throw new Error(`Could not find the app root in ${htmlPath}`);
  }
  html = html.replace(rootMarker, `<div id="root">${renderedApp}</div>`);
  html = html.replaceAll("https://example.com", SITE_URL);
  await writeFile(htmlPath, html);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${SITE_URL}/</loc></url>\n</urlset>\n`;
  const llms = [
    `# ${company.name}`,
    "",
    `${company.name} is a data-driven group. We build the things we believe the world is short on, guided by evidence, outcomes, and a long view.`,
    "",
    "## What we do",
    "",
    hero.headline,
    ...build.items.map((item) => `- ${item}`),
    "",
    "## How we work",
    "",
    ...principles.items.map((item) => `- **${item.title}** ${item.body}`),
    "",
    "## Our long view",
    "",
    measure.paragraphs.join(" "),
    "",
    "## Contact",
    "",
    `- Email: ${company.email}`,
    "",
    "## Key sections",
    "",
    `- Home: ${SITE_URL}/`,
    ...nav.map((item) => `- ${item.label}: ${SITE_URL}/${item.href}`),
    "",
  ].join("\n");

  await Promise.all([
    writeFile(path.join(outputDir, "robots.txt"), createRobotsTxt(SITE_URL)),
    writeFile(path.join(outputDir, "sitemap.xml"), sitemap),
    writeFile(path.join(outputDir, "llms.txt"), llms),
  ]);
} finally {
  await server.close();
}
