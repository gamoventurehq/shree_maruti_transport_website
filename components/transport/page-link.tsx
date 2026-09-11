'use client';

import NextLink from 'next/link';
import type { ComponentProps } from 'react';

export default function PageLink({
  href,
  scroll,
  onNavigate,
  ...props
}: ComponentProps<typeof NextLink>) {
  const hasHash = typeof href === 'string' ? href.includes('#') : !!href.hash;
  return (
    <NextLink
      {...props}
      href={href}
      scroll={hasHash ? scroll : false}
      onNavigate={(event) => {
        let prevented = false;
        onNavigate?.({
          preventDefault: () => {
            prevented = true;
            event.preventDefault();
          },
        });
        if (!prevented && !hasHash) {
          window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        }
      }}
    />
  );
}
