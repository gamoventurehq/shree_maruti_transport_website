'use client';

import { useEffect, useRef, useState } from 'react';
import Link from '@/components/transport/page-link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Brand, pageLinks } from './site';

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener('keydown', close);
    return () => document.removeEventListener('keydown', close);
  }, [open]);
  return (
    <header className="site-header">
      <div className="header-inner">
        <Brand />
        <nav className="desktop-navigation" aria-label="Main navigation">
          {pageLinks.slice(1, -1).map((link) => (
            <Link
              key={link.href}
              className={
                pathname === link.href || pathname.startsWith(`${link.href}/`)
                  ? 'active'
                  : ''
              }
              aria-current={pathname === link.href ? 'page' : undefined}
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          className="header-contact"
          href="/contact"
          aria-current={pathname === '/contact' ? 'page' : undefined}
        >
          Get in touch
          <ArrowUpRight size={17} />
        </Link>
        <button
          ref={toggleRef}
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <nav
        id="mobile-navigation"
        className="mobile-navigation"
        hidden={!open}
        aria-label="Mobile navigation"
      >
        {pageLinks.map((link) => (
          <Link
            key={link.href}
            aria-current={pathname === link.href ? 'page' : undefined}
            href={link.href}
            onClick={() => setOpen(false)}
          >
            {link.label}
            <ArrowUpRight size={19} />
          </Link>
        ))}
      </nav>
    </header>
  );
}
