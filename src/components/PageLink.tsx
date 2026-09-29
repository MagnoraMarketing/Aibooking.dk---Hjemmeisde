import type { AnchorHTMLAttributes, MouseEvent } from 'react';
import type { NavigatePage } from '../types/navigation';
import { PAGE_PATHS, useLocalizedHref } from '../utils/pagePaths';

interface PageLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  page: NavigatePage;
}

// A real <a href> (so crawlers and "open in new tab" work) that still routes
// in-app on a plain click. `onClick` should call onNavigate as before.
export default function PageLink({ page, onClick, children, className = '', ...rest }: PageLinkProps) {
  // Links are inline by default; keep the inline-block box the replaced
  // <button>s had unless the caller already chose a display.
  const display = /(^|\s)(block|inline-block|flex|inline-flex|grid|hidden)(\s|$)/.test(className) ? '' : 'inline-block ';
  const href = useLocalizedHref()(PAGE_PATHS[page]);

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    onClick?.(e);
  };

  return (
    <a href={href} onClick={handleClick} className={`${display}${className}`} {...rest}>
      {children}
    </a>
  );
}
