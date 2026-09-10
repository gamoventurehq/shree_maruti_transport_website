import Image from 'next/image';
import Link from 'next/link';
import {
  editionPages,
  editionLinks,
  type EditionPageKey,
} from '@/content/edition-pages';
import { serviceGuides } from '@/content/service-guides';
import { clientLogos, fleetPartners } from '@/content/assets';
import { coverageCities } from '@/content/coverage-cities';
import { indiaOutline } from '@/content/india-map';
import { EnquiryForm } from '@/components/transport/enquiry-form';
import { QuoteFinder } from './interactions';

export function PaperFooter() {
  return (
    <footer className="paper-footer">
      <div className="paper-footer-title">
        <h2>
          Good transport starts
          <br />
          with a conversation.
        </h2>
        <Link href="/contact" className="paper-button">
          Plan your next movement ↗
        </Link>
      </div>
      <div className="paper-footer-grid">
        <div>
          <Link className="paper-brand" href="/">
            Shree Maruti<span>TRANSPORT SERVICES</span>
          </Link>
          <p>
            Chemical and liquid transportation.
            <br />
            On Indian roads since 2001.
          </p>
        </div>
        <nav aria-label="Footer navigation">
          {editionLinks.map(([href, label]) => (
            <Link href={href} key={href}>
              {label}
            </Link>
          ))}
        </nav>
        <div>
          <h3>Our base</h3>
          <p>
            Bhiwandi, Maharashtra
            <br />
            Serving businesses across India.
          </p>
          <a href="https://maps.app.goo.gl/3vC8XKiXLMS5d9A86">
            Find our office ↗
          </a>
        </div>
      </div>
      <p className="copyright">
        © {new Date().getFullYear()} Shree Maruti Transport Services
      </p>
    </footer>
  );
}
export function PaperClients() {
  return (
    <section
      // A focusable scroll region lets keyboard users pause the logo movement.
      // oxlint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex={0}
      className="paper-clients"
    >
      <div>
        {[false, true].map((duplicate) => (
          <div
            className="paper-client-group"
            key={String(duplicate)}
            aria-hidden={duplicate || undefined}
          >
            {clientLogos.map((client) => (
              <span key={client.src}>
                <Image
                  src={client.src}
                  alt={duplicate ? '' : client.name}
                  width={client.width}
                  height={client.height}
                  sizes="140px"
                />
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
export function PaperServices() {
  return (
    <div className="paper-service-list">
      {serviceGuides.map((guide) => (
        <details key={guide.slug}>
          <summary>
            <span>{guide.title.replace(' across India', '')}</span>
            <span className="details-symbol" aria-hidden="true">
              +
            </span>
          </summary>
          <div>
            <p>
              {guide.summary} {guide.introduction}
            </p>
            <Link href={`/services/${guide.slug}`} className="paper-text-link">
              Read the service guide ↗
            </Link>
          </div>
        </details>
      ))}
    </div>
  );
}
export function PaperMap() {
  return (
    <div className="paper-map-layout">
      <div className="paper-map">
        <svg viewBox="0 0 520 490" aria-label="India map with prominent cities">
          <path
            d={indiaOutline}
            fill="#e4e9e5"
            stroke="#afbbb4"
            strokeWidth="1"
          />
          {coverageCities.map((city) => (
            <g key={city.name}>
              <circle
                cx={(city.lon - 66) * 16}
                cy={(37 - city.lat) * 16}
                r="3"
                fill="#bb632c"
              />
              {[
                'Delhi',
                'Mumbai',
                'Kolkata',
                'Hyderabad',
                'Chennai',
                'Guwahati',
              ].includes(city.name) && (
                <text x={(city.lon - 66) * 16 + 7} y={(37 - city.lat) * 16 - 6}>
                  {city.name}
                </text>
              )}
            </g>
          ))}
        </svg>
      </div>
      <div>
        <h2>
          A national reach.
          <br />A specific plan.
        </h2>
        <p>
          Pan-India transport starts with your actual origin and destination.
          City names give the conversation a direction; site addresses, loading
          windows and receiving requirements make the route usable.
        </p>
        <dl>
          {[
            ['West', 'Ahmedabad, Mumbai, Pune, Surat'],
            ['North', 'Delhi, Jaipur, Chandigarh, Lucknow'],
            ['Central', 'Nagpur, Indore, Raipur'],
            ['South', 'Hyderabad, Bengaluru, Chennai, Kochi'],
            ['East', 'Kolkata, Bhubaneswar, Guwahati'],
          ].map(([region, cities]) => (
            <div key={region}>
              <dt>{region}</dt>
              <dd>{cities}</dd>
            </div>
          ))}
        </dl>
        <p className="paper-note">
          Geographic coverage guide. Route availability is confirmed for each
          consignment; markers are not branch locations.
        </p>
        <Link className="paper-text-link" href="/contact">
          Discuss your route ↗
        </Link>
      </div>
    </div>
  );
}
export function PaperHome() {
  return (
    <>
      <section className="paper-hero">
        <Image
          src="/fleet/tata-highway-hero.png"
          alt="Blue-and-white Tata tanker on an Indian highway"
          fill
          sizes="96vw"
          loading="eager"
        />
        <div className="paper-hero-wash" />
        <div className="paper-hero-copy">
          <h1>
            Careful with your cargo.
            <br />
            Clear about the journey.
          </h1>
          <p>
            Chemical and liquid tanker transport across India.
            <br />
            Shree Maruti Transport Services, since 2001.
          </p>
          <div>
            <Link className="paper-button" href="/contact">
              Plan a movement ↗
            </Link>
            <Link className="paper-button paper-button-light" href="/services">
              Explore services ↗
            </Link>
          </div>
        </div>
        <div className="paper-hero-foot">
          <span>Based in Bhiwandi. Connected across India.</span>
          <Link href="/fleet">Meet our tanker fleet ↗</Link>
        </div>
      </section>
      <div className="paper-facts">
        <div>
          <strong>50+</strong>
          <span>Owned tankers</span>
        </div>
        <div>
          <strong>Since 2001</strong>
          <span>Indian road transportation</span>
        </div>
        <div>
          <strong>16–35 MT</strong>
          <span>Payload capacity range</span>
        </div>
        <div>
          <strong>Pan-India</strong>
          <span>Transport operations</span>
        </div>
      </div>
      <section className="paper-section paper-introduction" data-reveal>
        <div>
          <h2>
            Your transport partner
            <br />
            for liquid cargo.
          </h2>
          <p className="paper-lead">
            A consignment is part of a wider production plan. It needs the right
            tanker, the right information and a clear handover at the
            destination.
          </p>
          <p>
            Shree Maruti Transport Services brings an owned fleet of 50+ tankers
            to chemical, solvent, industrial and food-grade liquid transport.
            From our Bhiwandi base, we work with businesses across India to
            discuss individual movements and recurring dispatch requirements.
          </p>
          <p>
            The useful details are practical: what the product is, how much
            needs to move, where it will be loaded and what the receiving team
            requires. Our service guides explain those questions before you make
            an enquiry.
          </p>
          <div className="paper-mission-pair">
            <article>
              <h3>Our mission</h3>
              <p>
                To move liquid cargo responsibly through prepared people, clear
                coordination and transport plans built around each customer’s
                needs.
              </p>
            </article>
            <article>
              <h3>Our vision</h3>
              <p>
                To be a trusted transport partner for Indian industry, known for
                responsible service and lasting business relationships.
              </p>
            </article>
          </div>
        </div>
        <QuoteFinder />
      </section>
      <section className="paper-section paper-services-section" data-reveal>
        <div className="paper-section-heading">
          <h2>
            Services with room
            <br />
            for the details.
          </h2>
          <p>
            Choose the service closest to your requirement. Each guide covers
            the cargo brief, tanker considerations and the information needed at
            both ends of the journey.
          </p>
        </div>
        <PaperServices />
      </section>
      <section className="paper-section" data-reveal>
        <div className="paper-section-heading centered">
          <h2>
            The practical foundations
            <br />
            of every movement.
          </h2>
          <p>
            People, tankers and coordination connect your transport brief to the
            receiving site.
          </p>
        </div>
        <div className="paper-feature-grid">
          <article>
            <div className="paper-feature-image">
              <Image
                src="/safety/staff-ppe-diagram.png"
                alt="Staff safety equipment guide"
                fill
                sizes="30vw"
              />
            </div>
            <h3>Care for people</h3>
            <p>
              Equipment and precautions are selected for the work, the cargo and
              the site. Clear instructions help everyone understand the task.
            </p>
            <Link href="/safety">Our safety approach ↗</Link>
          </article>
          <article>
            <div className="paper-feature-image">
              <Image
                src="/fleet/tata-highway-hero.png"
                alt="Tata liquid tanker"
                fill
                sizes="30vw"
              />
            </div>
            <h3>A tanker for the requirement</h3>
            <p>
              Payload options and material grades give the selection discussion
              a starting point. Product suitability completes it.
            </p>
            <Link href="/fleet">Fleet specifications ↗</Link>
          </article>
          <article>
            <div className="paper-feature-image">
              <Image
                src="/fleet/fleet-tracking.png"
                alt="Fleet coordination illustration"
                fill
                sizes="30vw"
              />
            </div>
            <h3>Connected operations</h3>
            <p>
              Fleet-management tie-ups and site coordination support the
              movement from loading arrangements to delivery records.
            </p>
            <Link href="/network">Our operating reach ↗</Link>
          </article>
        </div>
      </section>
      <section className="paper-section" data-reveal>
        <PaperMap />
      </section>
      <section className="paper-section paper-why" data-reveal>
        <h2>
          What makes a useful
          <br />
          transport brief?
        </h2>
        <div>
          {[
            [
              'The product',
              'Identify the liquid, quantity, handling requirements and any restrictions on previous cargo. A complete specification helps the discussion focus on suitability.',
            ],
            [
              'The two sites',
              'Provide collection and delivery addresses, access instructions, loading connections and a contact at each facility.',
            ],
            [
              'The schedule',
              'Share the preferred dispatch date and receiving window. For repeat movements, add the expected frequency and volume per load.',
            ],
          ].map(([title, body]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="paper-section paper-partners" data-reveal>
        <h2>Part of our clients’ supply chains.</h2>
        <p>
          Businesses across chemicals, pharmaceuticals, manufacturing and
          industrial supply.
        </p>
        <PaperClients />
        <Link className="paper-text-link" href="/clients">
          See the client directory ↗
        </Link>
      </section>
      <section className="paper-section paper-faq" data-reveal>
        <h2>
          A few questions
          <br />
          before you begin.
        </h2>
        <div>
          {[
            [
              'Do you handle food-grade liquids?',
              'Yes. Share the product specification, hygiene requirements and any restrictions on prior cargo so tanker suitability and preparation can be discussed.',
            ],
            [
              'Which payload capacities are available?',
              'The fleet range includes 16, 21, 25, 30 and 35 MT. The available tanker configuration is confirmed against the consignment.',
            ],
            [
              'Can we discuss recurring movements?',
              'Yes. Include the expected volume per dispatch, frequency, origin and destinations, and the intended receiving windows.',
            ],
          ].map(([question, answer]) => (
            <details key={question}>
              <summary>
                {question}
                <span>+</span>
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
export function PaperPage({
  page,
  initialCargo,
  initialDelivery,
}: {
  page: EditionPageKey;
  initialCargo?: string;
  initialDelivery?: string;
}) {
  const data = editionPages[page];
  return (
    <>
      <section className="paper-page-hero">
        <Link href="/">Home</Link>
        <h1>{data.title}</h1>
        <p>{data.intro}</p>
      </section>
      {page === 'network' && (
        <section className="paper-section" data-reveal>
          <PaperMap />
        </section>
      )}
      {page === 'services' && (
        <section className="paper-section" data-reveal>
          <PaperServices />
        </section>
      )}
      {page === 'fleet' && (
        <section className="paper-section" data-reveal>
          <Image
            className="paper-wide-photo"
            src="/fleet/tata-highway-hero.png"
            width={1672}
            height={941}
            alt="Blue-and-white Tata tanker on a highway"
            sizes="90vw"
          />
          <div className="paper-specifications">
            <h2>Fleet specifications</h2>
            <dl>
              {[
                ['Owned fleet', '50+ tankers'],
                ['Payloads', '16 / 21 / 25 / 30 / 35 MT'],
                ['Tank grades', 'SS 304 / SS 316 / SS 316L'],
                ['Cargo focus', 'Chemical, industrial and food-grade liquids'],
                ['Operations', 'Pan-India, based in Bhiwandi'],
              ].map(([title, value]) => (
                <div key={title}>
                  <dt>{title}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}
      {page === 'safety' && (
        <section className="paper-section paper-safety-layout" data-reveal>
          <Image
            src="/safety/staff-ppe-diagram.png"
            alt="Staff personal protective equipment guide"
            width={1122}
            height={1402}
            sizes="(max-width:800px)90vw,40vw"
          />
          <div>
            <h2>
              Prepared people.
              <br />
              Appropriate protection.
            </h2>
            <p>
              Safety helmet. Protective eyewear. Hearing protection. Gloves.
              Reflective workwear. Safety boots.
            </p>
            <p>
              The equipment in the guide illustrates protection for people
              involved in the movement. The specific task, material and site
              requirements determine the appropriate selection.
            </p>
            <h3>Before the work begins</h3>
            <p>
              Review the product information and site instructions, coordinate
              with the loading or receiving contact and establish the documents
              required for the handover.
            </p>
          </div>
        </section>
      )}
      {page === 'clients' && (
        <section className="paper-section">
          <div className="paper-client-directory">
            {clientLogos.map((client) => (
              <div key={client.src}>
                <Image
                  src={client.src}
                  width={client.width}
                  height={client.height}
                  alt={client.name}
                  sizes="160px"
                />
              </div>
            ))}
          </div>
        </section>
      )}
      {page === 'contact' && (
        <section className="paper-section paper-contact-layout">
          <div>
            <h2>Prepare your enquiry.</h2>
            <p>
              Product, quantity, route and preferred date. The details you
              provide help describe the movement.
            </p>
            <a
              href="https://maps.app.goo.gl/3vC8XKiXLMS5d9A86"
              className="paper-text-link"
            >
              Bhiwandi, Maharashtra · Office directions ↗
            </a>
          </div>
          <EnquiryForm
            initialCargo={initialCargo}
            initialDelivery={initialDelivery}
          />
        </section>
      )}
      <section className="paper-section paper-articles">
        {data.sections.map(([title, first, second]) => (
          <article key={title} data-reveal>
            <h2>{title}</h2>
            <div>
              <p className="paper-lead">{first}</p>
              <p>{second}</p>
            </div>
          </article>
        ))}
      </section>
      {page === 'fleet' && (
        <section className="paper-section">
          <h2>Fleet-management tie-ups</h2>
          <div className="paper-fleet-partners">
            {fleetPartners.map((partner) => (
              <div key={partner.src}>
                <Image
                  src={partner.src}
                  width={partner.width}
                  height={partner.height}
                  alt={partner.name}
                  sizes="250px"
                />
                <h3>{partner.name}</h3>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
export function PaperService({ slug }: { slug: string }) {
  const guide = serviceGuides.find((item) => item.slug === slug)!;
  return (
    <>
      <section className="paper-page-hero">
        <Link href="/services">All transport services</Link>
        <h1>{guide.title}</h1>
        <p>{guide.summary}</p>
      </section>
      <section className="paper-section paper-service-article">
        <aside>
          <h2>In this guide</h2>
          <a href="#overview">Service overview</a>
          <a href="#considerations">Planning considerations</a>
          <a href="#transport-brief">Transport brief</a>
          <Link href="/contact">Prepare an enquiry ↗</Link>
        </aside>
        <div>
          <section id="overview" data-reveal>
            <h2>{guide.focus}</h2>
            <p className="paper-lead">{guide.introduction}</p>
            <p>{guide.explanation}</p>
          </section>
          <section id="considerations" data-reveal>
            <h2>The details to consider.</h2>
            {guide.considerations.map(([title, body]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </section>
          <section
            id="transport-brief"
            className="paper-transport-brief"
            data-reveal
          >
            <h2>{guide.scenario.title}</h2>
            <p className="paper-route">{guide.scenario.route}</p>
            <p>{guide.scenario.cargo}</p>
            <h3>The requirement</h3>
            <p>{guide.scenario.brief}</p>
            <h3>The approach</h3>
            <p>{guide.scenario.approach}</p>
            <h3>The handover</h3>
            <p>{guide.scenario.handover}</p>
          </section>
          <section data-reveal>
            <h2>{guide.question}</h2>
            <p>{guide.answer}</p>
          </section>
        </div>
      </section>
    </>
  );
}
