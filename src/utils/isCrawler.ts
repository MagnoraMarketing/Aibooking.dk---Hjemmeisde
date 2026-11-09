/**
 * True for search engine crawlers, SEO/link-preview bots and headless
 * renderers. Googlebot renders pages with an en-US browser language, so
 * without this check the first-visit language redirect in App.tsx would turn
 * every Danish URL into its /en/ version (and English canonical) in Google's
 * rendered view, making the Danish pages look like duplicates. Crawlers must
 * always get the page for the URL they asked for. Browser-only: call it from
 * effects, never at render time.
 */
const CRAWLER_PATTERN =
  /bot|crawl|spider|slurp|mediapartners|google-inspectiontool|google-extended|storebot|headlesschrome|lighthouse|chrome-lighthouse|facebookexternalhit|embedly|preview|validator|ia_archiver|yandex|baidu|duckduck|petalbot|semrush|ahrefs|bingpreview/i;

export function isCrawler(): boolean {
  if (typeof navigator === 'undefined') return true;
  return navigator.webdriver === true || CRAWLER_PATTERN.test(navigator.userAgent || '');
}
