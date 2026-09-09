'use client';

import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export function Navigation() {
  const [open, setOpen] = useState(false);
  const links = [
    ['Company', '#about'],
    ['Our fleet', '#fleet'],
    ['Our reach', '#coverage'],
  ];
  return (
    <header className="site-header" id="home">
      <a
        className="wordmark"
        href="#home"
        aria-label="Shree Maruti Transport home"
      >
        <span className="brand-symbol" aria-hidden="true">
          m<span>.</span>
        </span>
        <span>
          SHREE MARUTI<small>TRANSPORT</small>
        </span>
      </a>
      <nav aria-label="Main navigation">
        {links.map(([label, href]) => (
          <a key={href} href={href}>
            {label}
          </a>
        ))}
      </nav>
      <a className="nav-contact" href="#contact">
        Let’s talk transport <ArrowUpRight size={17} />
      </a>
      <button
        className="menu-toggle"
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label={open ? 'Close navigation' : 'Open navigation'}
      >
        {open ? <X /> : <Menu />}
      </button>
      {open && (
        <nav
          className="mobile-navigation"
          id="mobile-navigation"
          aria-label="Mobile navigation"
        >
          {[...links, ['Let’s talk transport', '#contact']].map(
            ([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                onKeyDown={(event) => {
                  if (event.key === 'Escape') {
                    setOpen(false);
                    document
                      .querySelector<HTMLButtonElement>('.menu-toggle')
                      ?.focus();
                  }
                }}
              >
                {label}
                <ArrowUpRight size={20} />
              </a>
            ),
          )}
        </nav>
      )}
    </header>
  );
}
