# Echelon Insights

Single-page React site built with Vite and Tailwind CSS.

## Development

```sh
npm install
npm run dev
npm run lint
npm run build
```

The production build statically renders the home page and generates crawler
files in `dist/`.

## Analytics

Google Analytics 4 is optional. Set `VITE_GA_MEASUREMENT_ID` in `.env.local`
to enable page views and primary contact events. Without an ID, no analytics
script or events are sent. The site currently has no cookie consent banner.

## Search and crawler metadata

Set `VITE_SITE_URL` to the deployed site's origin before building. It currently
defaults to `https://example.com` until the production domain is known. The
build generates `robots.txt`, `sitemap.xml`, and `llms.txt` in `dist/`.
The allowed AI crawler list is maintained in `scripts/crawlers.mjs`.
