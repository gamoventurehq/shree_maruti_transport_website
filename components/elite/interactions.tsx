'use client';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { editionLinks } from '@/content/edition-pages';
import { serviceGuides } from '@/content/service-guides';
import { coverageCities } from '@/content/coverage-cities';
import { indiaOutline } from '@/content/india-map';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function MotionCanvas({ children }: { children: React.ReactNode }) {
  const scope = useRef<HTMLDivElement>(null);
  const path = usePathname();
  useGSAP(
    () => {
      const media = gsap.matchMedia();
      media.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.fromTo(
          '[data-enter]',
          { y: 38, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: 'power3.out' },
        );
        gsap.utils
          .toArray<HTMLElement>('.elite-hero-image')
          .forEach((scene) => {
            gsap.fromTo(
              scene.querySelectorAll('[data-parallax-image]'),
              { yPercent: -7, scale: 1.15 },
              {
                yPercent: 7,
                scale: 1.15,
                ease: 'none',
                scrollTrigger: {
                  trigger: scene,
                  start: 'top bottom',
                  end: 'bottom top',
                  scrub: 0.8,
                },
              },
            );
            gsap.fromTo(
              scene.querySelector('.parallax-title'),
              { yPercent: 35 },
              {
                yPercent: -55,
                ease: 'none',
                scrollTrigger: {
                  trigger: scene,
                  start: 'top bottom',
                  end: 'bottom top',
                  scrub: 0.5,
                },
              },
            );
          });
        gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
          gsap.fromTo(
            el,
            { y: 45, opacity: 0.15 },
            {
              y: 0,
              opacity: 1,
              duration: 0.9,
              ease: 'power3.out',
              scrollTrigger: { trigger: el, start: 'top 92%', once: true },
            },
          );
        });
        gsap.utils.toArray<HTMLElement>('[data-cinema]').forEach((el) => {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: el,
                start: 'top 95%',
                end: 'bottom 5%',
                scrub: 0.7,
              },
            })
            .fromTo(
              el,
              { scale: 0.8, opacity: 0.6 },
              { scale: 1, opacity: 1, duration: 1 },
            )
            .to(el, { opacity: 0.2, duration: 0.45 });
        });
      });
      media.add(
        '(min-width: 1000px) and (prefers-reduced-motion: no-preference)',
        () => {
          gsap.utils
            .toArray<HTMLElement>('[data-stack]')
            .forEach((el, index, list) => {
              if (index === list.length - 1) return;
              gsap.to(el, {
                scale: 0.94,
                filter: 'brightness(.65)',
                transformOrigin: 'center top',
                scrollTrigger: {
                  trigger: el,
                  start: 'top 125px',
                  end: '+=400',
                  pin: true,
                  pinSpacing: false,
                  scrub: true,
                },
              });
            });
        },
      );
      return () => media.revert();
    },
    { scope, dependencies: [path], revertOnUpdate: true },
  );
  return (
    <div ref={scope} className="motion-canvas">
      {children}
    </div>
  );
}

export function EliteNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', close);
    return () => document.removeEventListener('keydown', close);
  }, []);
  return (
    <header className="elite-nav">
      <Link
        href="/"
        className="elite-wordmark"
        aria-label="Shree Maruti Transport Services home"
      >
        <span className="brand-symbol">SM</span>
        <span>
          SHREE MARUTI<small>TRANSPORT SERVICES</small>
        </span>
      </Link>
      <nav aria-label="Main navigation">
        {editionLinks.slice(0, -1).map(([href, text]) => (
          <Link
            aria-current={pathname === href ? 'page' : undefined}
            href={href}
            key={href}
          >
            {text}
          </Link>
        ))}
      </nav>
      <Link className="nav-contact" href="/contact">
        Let’s move <span>↗</span>
      </Link>
      <button
        className="elite-menu-button"
        aria-expanded={open}
        aria-controls="edition-menu"
        onClick={() => setOpen(!open)}
      >
        {open ? 'Close' : 'Menu'}
      </button>
      <div id="edition-menu" className="elite-mobile-menu" hidden={!open}>
        {editionLinks.map(([href, text]) => (
          <Link href={href} key={href} onClick={() => setOpen(false)}>
            {text}
            <span>↗</span>
          </Link>
        ))}
      </div>
    </header>
  );
}

export function ServiceAccordion() {
  const [active, setActive] = useState(0);
  return (
    <div className="service-accordion" data-reveal>
      {serviceGuides.map((guide, i) => (
        <article className={active === i ? 'expanded' : ''} key={guide.slug}>
          <button
            aria-expanded={active === i}
            aria-controls={`service-panel-${i}`}
            onMouseEnter={() => setActive(i)}
            onClick={() => setActive(i)}
          >
            <span>{guide.title.replace(' across India', '')}</span>
            <span aria-hidden="true">{active === i ? '−' : '+'}</span>
          </button>
          <div id={`service-panel-${i}`} hidden={active !== i}>
            <p>{guide.summary}</p>
            <Link href={`/services/${guide.slug}`} className="elite-link">
              Explore the service ↗
            </Link>
          </div>
          <span className="accordion-word" aria-hidden="true">
            {['CHEMICAL', 'FOOD GRADE', 'SCHEDULED'][i]}
          </span>
        </article>
      ))}
    </div>
  );
}

const perspectives = [
  {
    title: 'For the procurement team.',
    body: 'A clear vehicle requirement. A defined loading window. The documents your receiving team needs. Start with the information that helps turn a transport enquiry into a workable plan.',
    link: '/services',
    cta: 'Find your service',
  },
  {
    title: 'For the quality team.',
    body: 'Product specifications, preparation requirements and restrictions on previous cargo belong in the brief from the beginning. Suitability is established for the consignment.',
    link: '/safety',
    cta: 'Explore cargo care',
  },
  {
    title: 'For the plant team.',
    body: 'Site access, loading connections and a known receiving contact connect the movement to your operations. A route becomes useful when the details at both ends are clear.',
    link: '/network',
    cta: 'Explore the network',
  },
];
export function PerspectiveCarousel() {
  const [index, setIndex] = useState(0);
  const item = perspectives[index];
  return (
    <section className="perspective section-space" data-reveal>
      <div className="perspective-image">
        <Image
          src="/fleet/tata-highway-hero.png"
          alt="Blue-and-white Tata tanker"
          fill
          sizes="35vw"
        />
      </div>
      <div className="perspective-copy" aria-live="polite">
        <h2>{item.title}</h2>
        <p>{item.body}</p>
        <Link className="elite-link" href={item.link}>
          {item.cta} ↗
        </Link>
        <div className="carousel-controls">
          <button
            aria-label="Previous perspective"
            onClick={() => setIndex((index + 2) % 3)}
          >
            ←
          </button>
          <span>{index + 1} / 3</span>
          <button
            aria-label="Next perspective"
            onClick={() => setIndex((index + 1) % 3)}
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}

export function RouteExplorer() {
  const [selected, setSelected] = useState<string>('Delhi');
  const city =
    coverageCities.find((item) => item.name === selected) ?? coverageCities[4];
  const project = (lon: number, lat: number) => [
    (lon - 66) * 16,
    (37 - lat) * 16,
  ];
  const hub = project(73.106, 19.252);
  return (
    <div className="route-explorer" data-reveal>
      <div className="route-map">
        <div className="map-orbit orbit-one" />
        <div className="map-orbit orbit-two" />
        <svg
          viewBox="0 0 520 490"
          aria-label="India route explorer from Bhiwandi"
        >
          <defs>
            <pattern
              id="elite-dots"
              width="6"
              height="6"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r=".75" fill="#a7c2bc" />
            </pattern>
          </defs>
          <path
            d={indiaOutline}
            fill="#132c32"
            stroke="#547778"
            strokeWidth="1"
          />
          <path d={indiaOutline} fill="url(#elite-dots)" />
          {coverageCities.map((point) => {
            const [x, y] = project(point.lon, point.lat);
            return (
              <g key={point.name}>
                <path
                  className={`route-arc ${point.name === selected ? 'is-selected' : ''}`}
                  d={`M${hub[0]},${hub[1]} Q${(hub[0] + x) / 2 - 35},${Math.min(y, hub[1]) - 55} ${x},${y}`}
                />
                <circle
                  cx={x}
                  cy={y}
                  r={point.name === selected ? 5 : 2.8}
                  fill={point.name === selected ? '#dcfa83' : '#78b6b2'}
                />
              </g>
            );
          })}
          <circle cx={hub[0]} cy={hub[1]} r="6" fill="#dcfa83" />
          <text x={hub[0] - 15} y={hub[1] + 20} textAnchor="end">
            Bhiwandi
          </text>
          <text
            x={project(city.lon, city.lat)[0] + 10}
            y={project(city.lon, city.lat)[1] - 10}
          >
            {city.name}
          </text>
        </svg>
        <span className="map-caption">
          Geographic corridors · Availability by enquiry
        </span>
      </div>
      <div className="route-console">
        <h3>
          Bhiwandi <span>→</span>
          <br />
          {city.name}
        </h3>
        <p>
          Explore a tanker movement between our operating base and {city.name}.
          Product suitability, site access and dispatch timing shape the route
          brief.
        </p>
        <div className="city-selector" aria-label="Choose a destination">
          {coverageCities.map((point) => (
            <button
              key={point.name}
              aria-pressed={selected === point.name}
              onClick={() => setSelected(point.name)}
            >
              {point.name}
            </button>
          ))}
        </div>
        <Link className="elite-button" href="/contact">
          Discuss this corridor ↗
        </Link>
      </div>
    </div>
  );
}

const risks = [
  {
    name: 'People',
    title: 'Protection begins with the task.',
    detail:
      'Protective eyewear, gloves, reflective workwear, safety footwear and head protection belong to a task-specific equipment brief. The work and the site determine what is appropriate.',
    checks: [
      'Task and site instructions',
      'Equipment appropriate to the material',
      'Coordination at collection and receipt',
    ],
  },
  {
    name: 'Cargo',
    title: 'Know what is inside the tank.',
    detail:
      'Product identification, material compatibility and preparation requirements are considered together. The quantity alone does not establish which tanker is suitable.',
    checks: [
      'Product specification',
      'Tank material and fittings',
      'Prior-cargo and preparation requirements',
    ],
  },
  {
    name: 'Vehicle',
    title: 'Readiness before movement.',
    detail:
      'The transport brief connects the requested tanker to the loading and receiving arrangements. Vehicle details, access restrictions and required records belong in that review.',
    checks: [
      'Requested payload and configuration',
      'Loading and receiving connections',
      'Documents required for handover',
    ],
  },
  {
    name: 'Journey',
    title: 'Connect the whole route.',
    detail:
      'A movement needs contacts and instructions at both ends. Dispatch windows, site access and communication arrangements help the team coordinate the journey.',
    checks: [
      'Origin and destination contacts',
      'Appointment and access requirements',
      'Agreed communication points',
    ],
  },
];
export function RiskExplorer() {
  const [active, setActive] = useState(0);
  const risk = risks[active];
  return (
    <div className="risk-explorer" data-reveal>
      <div className="risk-visual">
        <Image
          src="/safety/staff-ppe-diagram.png"
          alt="Staff protective equipment diagram"
          width={1122}
          height={1402}
          sizes="(max-width: 800px) 90vw, 40vw"
        />
        <span className="risk-cross cross-one" />
        <span className="risk-cross cross-two" />
      </div>
      <div className="risk-content">
        <div className="risk-tabs" aria-label="Explore safety considerations">
          {risks.map((item, i) => (
            <button
              key={item.name}
              aria-pressed={active === i}
              onMouseEnter={() => setActive(i)}
              onClick={() => setActive(i)}
            >
              {item.name}
            </button>
          ))}
        </div>
        <div aria-live="polite">
          <h3>{risk.title}</h3>
          <p>{risk.detail}</p>
          <ul>
            {risk.checks.map((item) => (
              <li key={item}>
                <span aria-hidden="true">↗</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <p className="risk-note">
          Planning overview. Product-specific instructions and site requirements
          govern each movement.
        </p>
      </div>
    </div>
  );
}
