'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { editionLinks } from '@/content/edition-pages';
export function EditorialNav() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', close);
    return () => document.removeEventListener('keydown', close);
  }, []);
  return (
    <header className="paper-nav">
      <Link href="/" className="paper-brand">
        Shree Maruti<span>TRANSPORT SERVICES</span>
      </Link>
      <nav aria-label="Main navigation">
        {editionLinks.map(([href, label]) => (
          <Link
            href={href}
            key={href}
            aria-current={path === href ? 'page' : undefined}
          >
            {label === 'Safety & risk' ? 'Safety' : label}
          </Link>
        ))}
      </nav>
      <button
        className="paper-menu"
        aria-expanded={open}
        aria-controls="paper-mobile"
        onClick={() => setOpen(!open)}
      >
        {open ? 'Close' : 'Menu'}
      </button>
      <nav id="paper-mobile" hidden={!open} aria-label="Mobile navigation">
        {editionLinks.map(([href, label]) => (
          <Link key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
export function GentleReveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const path = usePathname();
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.animate(
              [
                { opacity: 0.4, transform: 'translateY(14px)' },
                { opacity: 1, transform: 'translateY(0)' },
              ],
              { duration: 650, easing: 'cubic-bezier(.16,1,.3,1)' },
            );
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.08 },
    );
    ref.current
      ?.querySelectorAll('[data-reveal]')
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [path]);
  return <div ref={ref}>{children}</div>;
}
export function QuoteFinder() {
  const [cargo, setCargo] = useState('Chemical liquid');
  const [route, setRoute] = useState('Western India');
  return (
    <div className="quote-finder">
      <h3>What are you planning?</h3>
      <p>
        Start with the service and the region. Add the site details in your
        enquiry.
      </p>
      <label>
        Cargo type
        <select
          value={cargo}
          onChange={(event) => setCargo(event.target.value)}
        >
          <option>Chemical liquid</option>
          <option>Food-grade liquid</option>
          <option>Industrial solvent</option>
          <option>Recurring tanker movement</option>
        </select>
      </label>
      <label>
        Destination region
        <select
          value={route}
          onChange={(event) => setRoute(event.target.value)}
        >
          <option>Western India</option>
          <option>Northern India</option>
          <option>Central India</option>
          <option>Southern India</option>
          <option>Eastern India</option>
        </select>
      </label>
      <Link
        className="paper-button"
        href={`/contact?cargo=${encodeURIComponent(cargo)}&region=${encodeURIComponent(route)}`}
      >
        Prepare an enquiry <span>↗</span>
      </Link>
    </div>
  );
}
