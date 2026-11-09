const BRAND = 'Aibooking.dk';
/** Titles longer than this get cut off in Google's results (~600px). */
const MAX_TITLE_LENGTH = 60;
const BRAND_SUFFIX = /\s*[|–—-]\s*Ai ?Booking\.dk\s*$/i;

/**
 * Normalizes a page title for <title> and og:title: spells the brand the
 * same way everywhere ("Aibooking.dk") and drops the " | Aibooking.dk"
 * suffix when keeping it would push the title past the length Google shows,
 * so the keyword part is never the bit that gets truncated.
 */
export function formatSeoTitle(title: string): string {
  const clean = title.replace(/AIBooking\.dk/g, BRAND).trim();
  const match = clean.match(BRAND_SUFFIX);
  if (!match || clean.length <= MAX_TITLE_LENGTH) return clean;
  const base = clean.slice(0, match.index).trim();
  // Never strip the brand down to nothing (e.g. a title that is only the brand).
  return base.length > 0 ? base : clean;
}
