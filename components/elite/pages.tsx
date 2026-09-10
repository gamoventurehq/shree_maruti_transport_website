import Link from 'next/link';
import Image from 'next/image';
import {
  editionPages,
  type EditionPageKey,
  editionLinks,
} from '@/content/edition-pages';
import { serviceGuides } from '@/content/service-guides';
import { clientLogos } from '@/content/assets';
import { EnquiryForm } from '@/components/transport/enquiry-form';
import {
  ServiceAccordion,
  RouteExplorer,
  RiskExplorer,
  PerspectiveCarousel,
} from './interactions';

export function EliteFooter() {
  return (
    <footer className="elite-footer">
      <div className="footer-cta">
        <p>Your product. Your route. Our next conversation.</p>
        <Link href="/contact">
          Let’s move
          <br />
          industry forward.<span>↗</span>
        </Link>
      </div>
      <div className="footer-bottom">
        <strong>
          SHREE MARUTI
          <br />
          <small>TRANSPORT SERVICES</small>
        </strong>
        <nav aria-label="Footer navigation">
          {editionLinks.map(([href, label]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </nav>
        <div>
          Bhiwandi, Maharashtra
          <br />
          <a
            href="https://maps.app.goo.gl/3vC8XKiXLMS5d9A86"
            target="_blank"
            rel="noreferrer"
          >
            Find our base ↗
          </a>
        </div>
      </div>
      <p className="legal">
        © {new Date().getFullYear()} Shree Maruti Transport Services
      </p>
    </footer>
  );
}
export function ClientMarquee() {
  return (
    <section
      // A focusable scroll region lets keyboard users pause the logo movement.
      // oxlint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex={0}
      className="elite-client-marquee"
      aria-label="Our clients"
    >
      <div>
        {[false, true].map((duplicate) => (
          <div
            className="elite-client-group"
            key={String(duplicate)}
            aria-hidden={duplicate || undefined}
          >
            {clientLogos.map((client) => (
              <span key={client.src}>
                <Image
                  src={client.src}
                  width={client.width}
                  height={client.height}
                  alt={duplicate ? '' : client.name}
                  sizes="150px"
                />
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
export function EliteHome() {
  return (
    <>
      <section className="elite-hero">
        <div className="hero-title-row" data-enter>
          <h1 className="max-w-6xl">
            A country
            <br />
            <em>in motion.</em>
          </h1>
          <div className="hero-side-note">
            <p>
              Chemical & liquid tanker transport.
              <br />
              Built around the cargo.
              <br />
              Connected across India.
            </p>
            <div className="hero-edition-actions">
              <Link className="elite-button" href="/services">
                Explore our services ↗
              </Link>
              <Link className="elite-link" href="/network">
                Follow the routes ↗
              </Link>
            </div>
          </div>
        </div>
        <figure className="elite-hero-image" data-enter>
          <Image
            data-parallax-image
            src="/fleet/tata-highway-hero.png"
            alt="Blue-and-white Tata liquid tanker on an Indian highway"
            fill
            sizes="90vw"
            loading="eager"
          />
          <span className="parallax-title" aria-hidden="true">
            ON THE MOVE.
          </span>
          <Image
            data-parallax-image
            className="parallax-foreground"
            src="/fleet/tata-highway-hero.png"
            alt=""
            fill
            sizes="90vw"
            aria-hidden="true"
          />
          <figcaption>Shree Maruti Transport Services</figcaption>
        </figure>
        <span className="hero-baseline">
          Chemical · Industrial · Food-grade liquids
        </span>
      </section>
      <section className="section-space company-statement" data-reveal>
        <h2>
          Big distances.
          <br />
          <span>Close attention.</span>
        </h2>
        <p>
          Every tanker carries a place in someone’s production plan. We connect
          the product, the people and the route—so the movement starts with the
          details that matter.
        </p>
        <div className="elite-bento grid-flow-dense">
          <article>
            <strong>50+</strong>
            <p>Owned tankers. One transport operation.</p>
            <Link href="/fleet">Explore the fleet ↗</Link>
          </article>
          <article>
            <strong>2001</strong>
            <p>Our journey began on Indian roads.</p>
            <Link href="/about">Meet Shree Maruti ↗</Link>
          </article>
          <article>
            <strong>
              16–35<small> MT</small>
            </strong>
            <p>Payload options shaped around the load.</p>
            <Link href="/fleet">See specifications ↗</Link>
          </article>
        </div>
      </section>
      <section className="section-space">
        <div className="section-intro" data-reveal>
          <h2>
            Different liquids.
            <br />
            <span>Specific requirements.</span>
          </h2>
          <p>
            Get closer to the product, the tanker and the journey. Explore the
            service that fits your cargo.
          </p>
        </div>
        <ServiceAccordion />
      </section>
      <section className="section-space network-chapter">
        <div className="section-intro" data-reveal>
          <h2>
            Many routes.
            <br />
            <span>One connected view.</span>
          </h2>
          <Link href="/network" className="elite-link">
            Explore the network ↗
          </Link>
        </div>
        <RouteExplorer />
      </section>
      <section className="section-space safety-chapter">
        <div className="section-intro" data-reveal>
          <h2>
            Responsibility.
            <br />
            <span>Made visible.</span>
          </h2>
          <p>
            People. Cargo. Vehicle. Journey. Explore the considerations behind a
            planned movement.
          </p>
        </div>
        <RiskExplorer />
        <Link className="elite-link risk-more" href="/safety">
          Inside our safety approach ↗
        </Link>
      </section>
      <section className="section-space fleet-scroll">
        <h2 data-reveal>
          The movement
          <br />
          <span>behind the material.</span>
        </h2>
        <figure data-cinema>
          <Image
            src="/fleet/tata-highway-hero.png"
            alt="Stainless-steel tanker in a highway scene"
            width={1672}
            height={941}
            sizes="90vw"
          />
        </figure>
        <div className="stack-sequence">
          {[
            [
              'The product comes first.',
              'Chemical, industrial and food-grade liquids each bring different requirements. The cargo brief defines the conversation.',
            ],
            [
              'A tanker chosen with care.',
              'Payload, tank material, preparation and site access are considered together before a movement is agreed.',
            ],
            [
              'Connected through the journey.',
              'Fleet-management tie-ups and site coordination bring the vehicle, the loading point and the receiver into the plan.',
            ],
          ].map(([title, body]) => (
            <article data-stack key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>
      <PerspectiveCarousel />
      <section className="clients-chapter">
        <h2 data-reveal>Part of their supply chain.</h2>
        <ClientMarquee />
      </section>
    </>
  );
}
export function ElitePage({ page }: { page: EditionPageKey }) {
  const data = editionPages[page];
  return (
    <>
      <section className="elite-page-hero">
        <Link href="/" className="elite-link" data-enter>
          Shree Maruti ↗
        </Link>
        <h1 className="max-w-6xl" data-enter>
          {data.title}
        </h1>
        <p data-enter>{data.intro}</p>
      </section>
      {page === 'network' && (
        <section className="section-space">
          <RouteExplorer />
        </section>
      )}
      {page === 'safety' && (
        <section className="section-space">
          <RiskExplorer />
        </section>
      )}
      {page === 'services' && (
        <section className="section-space">
          <ServiceAccordion />
        </section>
      )}
      {page === 'clients' && <ClientMarquee />}
      {page === 'fleet' && (
        <section className="section-space">
          <figure className="wide-fleet" data-cinema>
            <Image
              src="/fleet/tata-highway-hero.png"
              alt="Blue-and-white Tata tanker"
              width={1672}
              height={941}
              sizes="90vw"
            />
          </figure>
          <div className="fleet-spec-strip">
            <div>
              <strong>50+</strong>
              <span>Owned tankers</span>
            </div>
            <div>
              <strong>16 / 21 / 25 / 30 / 35</strong>
              <span>Payload capacities · MT</span>
            </div>
            <div>
              <strong>304 / 316 / 316L</strong>
              <span>Stainless-steel grades</span>
            </div>
          </div>
        </section>
      )}
      {page === 'contact' && (
        <section className="section-space contact-layout">
          <div>
            <h2>
              Start with
              <br />
              the details.
            </h2>
            <p>
              Bhiwandi, Maharashtra
              <br />
              Pan-India operations
            </p>
            <a
              className="elite-link"
              href="https://maps.app.goo.gl/3vC8XKiXLMS5d9A86"
            >
              Find our office ↗
            </a>
          </div>
          <EnquiryForm />
        </section>
      )}
      <section className="section-space editorial-stack">
        {data.sections.map(([title, first, second]) => (
          <article key={title} data-stack>
            <h2>{title}</h2>
            <div>
              <p>{first}</p>
              <p>{second}</p>
              <Link
                className="elite-link"
                href={page === 'contact' ? '/services' : '/contact'}
              >
                {page === 'contact'
                  ? 'Explore our services'
                  : 'Discuss your requirement'}{' '}
                ↗
              </Link>
            </div>
          </article>
        ))}
      </section>
      {(page === 'services' || page === 'about') && <PerspectiveCarousel />}
      {page === 'safety' && (
        <section className="section-space safety-classifications" data-reveal>
          <h2>
            Recognise the category.
            <br />
            <span>Review the product.</span>
          </h2>
          <p>
            Hazard classifications help identify the nature of a material. This
            overview is not an acceptance list; cargo suitability is confirmed
            for each movement.
          </p>
          <div>
            {[
              'Explosives',
              'Gases',
              'Flammable liquids',
              'Flammable solids',
              'Oxidisers & peroxides',
              'Toxic & infectious substances',
              'Radioactive materials',
              'Corrosives',
              'Miscellaneous hazards',
            ].map((name, i) => (
              <article key={name}>
                <span>{i + 1}</span>
                <h3>{name}</h3>
              </article>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
export function EliteService({ slug }: { slug: string }) {
  const guide = serviceGuides.find((item) => item.slug === slug)!;
  return (
    <>
      <section className="elite-page-hero">
        <Link className="elite-link" href="/services" data-enter>
          All tanker services ↗
        </Link>
        <h1 data-enter>{guide.title}</h1>
        <p data-enter>{guide.summary}</p>
      </section>
      <section className="section-space guide-opening" data-reveal>
        <h2>{guide.focus}</h2>
        <div>
          <p>{guide.introduction}</p>
          <p>{guide.explanation}</p>
        </div>
      </section>
      <section className="section-space editorial-stack">
        {guide.considerations.map(([title, body]) => (
          <article data-stack key={title}>
            <h2>{title}</h2>
            <p>{body}</p>
          </article>
        ))}
      </section>
      <section className="section-space route-brief" data-reveal>
        <h2>{guide.scenario.route}</h2>
        <p>{guide.scenario.cargo}</p>
        <div>
          <p>{guide.scenario.brief}</p>
          <p>{guide.scenario.approach}</p>
          <p>{guide.scenario.handover}</p>
        </div>
      </section>
      <section className="section-space guide-opening" data-reveal>
        <h2>{guide.question}</h2>
        <p>{guide.answer}</p>
      </section>
    </>
  );
}
