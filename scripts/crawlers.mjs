export const allowedAiCrawlers = [
  "GPTBot",
  "ClaudeBot",
  "Google-Extended",
  "PerplexityBot",
  "CCBot",
];

export function createRobotsTxt(siteUrl) {
  return [
    "User-agent: *",
    "Allow: /",
    "",
    ...allowedAiCrawlers.flatMap((crawler) => [
      `User-agent: ${crawler}`,
      "Allow: /",
      "",
    ]),
    `Sitemap: ${siteUrl}/sitemap.xml`,
    "",
  ].join("\n");
}
