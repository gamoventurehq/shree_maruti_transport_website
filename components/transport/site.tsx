import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, MapPin } from 'lucide-react';
import { brandLogo, clientLogos, fleetMontage } from '@/content/assets';
import { business } from '@/content/business';

export const pageLinks = [
  { label: 'Home', href: '/' },
  { label: 'About us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Our fleet', href: '/fleet' },
  { label: 'Safety & regulations', href: '/safety' },
  { label: 'Our clients', href: '/clients' },
  { label: 'Contact', href: '/contact' },
];

export function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <Link
      href="/"
      className={`brand ${footer ? 'brand-footer' : ''}`}
      aria-label={`${business.name} home`}
    >
      <span className="brand-mark">
        <Image
          src={brandLogo.src}
          width={brandLogo.width}
          height={brandLogo.height}
          alt="SMTS"
          sizes="160px"
        />
      </span>
      <span className="brand-name">
        SHREE MARUTI<span>TRANSPORT SERVICES</span>
      </span>
    </Link>
  );
}

export type FleetPanel =
  | 'single'
  | 'lineup'
  | 'road'
  | 'rear'
  | 'side'
  | 'white';
export function FleetVisual({
  panel = 'single',
  className = '',
  priority = false,
}: {
  panel?: FleetPanel;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={`fleet-visual panel-${panel} ${className}`}>
      <div className="fleet-crop">
        <Image
          src={fleetMontage.src}
          alt={
            panel === 'single' || panel === 'road' || panel === 'side'
              ? 'Client-supplied illustration of a stainless-steel chemical tanker'
              : 'Client-supplied illustration of a row of tankers'
          }
          width={fleetMontage.width}
          height={fleetMontage.height}
          sizes="(max-width: 768px) 200vw, 160vw"
          loading={priority ? 'eager' : 'lazy'}
        />
      </div>
    </div>
  );
}

export function PageIntro({
  title,
  eyebrow,
  description,
  children,
}: {
  title: string;
  eyebrow: string;
  description: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="page-intro dark-section">
      <div className="container">
        <div className="breadcrumb">
          <Link href="/">Home</Link>
          <ArrowRight size={13} />
          <span>{eyebrow}</span>
        </div>
        <div className="page-intro-content">
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h1>{title}</h1>
          </div>
          <p>{description}</p>
        </div>
        {children}
      </div>
    </section>
  );
}

export function TextLink({
  href,
  children,
  className = '',
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link className={`text-link ${className}`} href={href}>
      {children}
      <ArrowUpRight size={18} />
    </Link>
  );
}

export function ContactBand() {
  return (
    <section className="contact-band" id="contact">
      <div className="container">
        <div>
          <p className="eyebrow">YOUR NEXT MOVEMENT</p>
          <h2>Let’s get the details right.</h2>
        </div>
        <Link className="button button-primary" href="/contact">
          Discuss your requirement
          <ArrowUpRight size={19} />
        </Link>
      </div>
    </section>
  );
}

export function ClientGrid({ limit }: { limit?: number }) {
  const clients = limit ? clientLogos.slice(0, limit) : clientLogos;
  return (
    <div className={`client-grid ${limit ? 'client-grid-preview' : ''}`}>
      {clients.map((client) => (
        <div className="client-tile" key={client.src}>
          <Image
            src={client.src}
            alt={client.name}
            width={client.width}
            height={client.height}
            sizes="(max-width: 640px) 40vw, 240px"
          />
          <span>{client.name}</span>
        </div>
      ))}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="site-footer dark-section">
      <div className="container">
        <div className="footer-main">
          <div>
            <Brand footer />
            <p>
              Chemical and liquid transportation.
              <br />
              On Indian roads since {business.founded}.
            </p>
          </div>
          <div>
            <h2>Explore</h2>
            <div className="footer-links">
              {pageLinks.slice(0, 4).map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2>Connect</h2>
            <div className="footer-links">
              {pageLinks.slice(4).map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="footer-location">
            <MapPin size={20} />
            <h2>{business.location}</h2>
            <p>Serving businesses across India.</p>
            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Find our office
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {business.name}.
          </span>
          <span>EST. 2001 / PAN-INDIA OPERATIONS</span>
          {business.creatorCredit && (
            <a
              href="https://gamoventure.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Website by Gamoventure
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
