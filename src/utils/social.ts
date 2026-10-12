// Aibooking.dk on social media (also listed as sameAs on the Organization in index.html).
export const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=61585594251491';

const SITE_URL = 'https://www.aibooking.dk';

// Facebook's share dialog for a page on this site. Takes the path rather than
// reading window.location, because pages are also rendered at build time.
export function facebookShareUrl(path: string) {
  return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(SITE_URL + path)}`;
}
