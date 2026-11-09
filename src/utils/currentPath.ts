// The URL being rendered. In the browser this is window.location.pathname;
// during build-time prerendering (src/entry-server.tsx) there is no window, so
// the prerender sets the path explicitly before rendering each page.
let serverPathname: string | null = null;

export function setServerPathname(pathname: string | null) {
  serverPathname = pathname;
}

export function currentPathname(): string {
  if (serverPathname !== null) return serverPathname;
  return typeof window !== 'undefined' ? window.location.pathname : '/';
}

// Whether the page being rendered is the 404 page. App sets it on every
// render, before its children render, so links built during render can tell.
let notFound = false;

export function setRenderingNotFound(value: boolean) {
  notFound = value;
}

export function isRenderingNotFound(): boolean {
  return notFound;
}
