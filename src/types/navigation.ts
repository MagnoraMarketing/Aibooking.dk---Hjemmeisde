// Every page the manual router in App.tsx can navigate to via `onNavigate`.
// Shared so page components, Navigation and Footer can't drift apart — each
// used to repeat this union inline, and a page added to one but not the others
// broke `npm run typecheck`.
//
// Blog post and category pages are reached through plain hrefs rather than
// `onNavigate`, so they are deliberately absent here.
export type NavigatePage =
  | 'home'
  | 'widget'
  | 'inbound-outbound'
  | 'integrations'
  | 'industries'
  | 'demo'
  | 'healthcare'
  | 'craftsman'
  | 'office'
  | 'ecommerce'
  | 'features'
  | 'contact'
  | 'about'
  | 'terms'
  | 'privacy'
  | 'blog'
  | 'trial';
