import { defineConfig, loadEnv, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

// Adds search engine ownership verification tags to index.html when the
// matching environment variable is set (e.g. in Vercel's project settings),
// so Google Search Console / Bing Webmaster Tools can verify the site via the
// "HTML tag" method. Only the token itself goes in the variable, i.e. the
// value of content="..." from the tag the tool shows you.
function siteVerification(env: Record<string, string>): Plugin {
  const tags = [
    ['google-site-verification', env.GOOGLE_SITE_VERIFICATION],
    ['msvalidate.01', env.BING_SITE_VERIFICATION],
  ].filter((tag): tag is [string, string] => Boolean(tag[1]?.trim()));

  return {
    name: 'site-verification',
    transformIndexHtml() {
      return tags.map(([name, content]) => ({
        tag: 'meta',
        attrs: { name, content: content.trim() },
        injectTo: 'head' as const,
      }));
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react(), siteVerification(loadEnv(mode, process.cwd(), ''))],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
}));
