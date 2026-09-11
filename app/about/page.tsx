import { OperationsPreview } from '@/components/transport/operations-preview';
import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import Link from '@/components/transport/page-link';
import {
  ContactBand,
  FleetVisual,
  PageIntro,
} from '@/components/transport/site';
import { business } from '@/content/business';

export const metadata: Metadata = {
  title: 'About us',
  description:
    'Meet Shree Maruti Transport Services: established in 2011, with 50+ owned tankers and chemical and liquid transport operations across India.',
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="ABOUT SHREE MARUTI"
        title="Our journey. Your trust."
        description="A transport business built around the people, products, and industries that depend on the road."
      />
      <section className="section">
        <div className="container about-story">
          <div className="founding-year">
            <span>ON THE ROAD SINCE</span>
            <strong>2011</strong>
            <p>Shree Maruti Transport Services</p>
          </div>
          <div>
            <p className="eyebrow">WHO WE ARE</p>
            <h2>
              Moving goods.
              <br />
              Understanding responsibility.
            </h2>
            <p className="lead">
              Shree Maruti Transport Services was established in 2011. From our
              base in {business.location}, we operate across India.
            </p>
            <p>
              Our work centres on road transportation for chemicals, solvents,
              and industrial liquids. An owned fleet of 50+ tankers supports
              those movements, with a focus on the product, the people handling
              it, and the destination.
            </p>
            <p>
              We work with businesses across the chemical, pharmaceutical, and
              manufacturing sectors. Each requirement begins with understanding
              the cargo and planning the journey around it.
            </p>
          </div>
        </div>
      </section>
      <div className="about-panorama">
        <FleetVisual panel="lineup" />
        <span>CLIENT-SUPPLIED FLEET ILLUSTRATION</span>
      </div>
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">WHAT GUIDES US</p>
              <h2>
                The details matter.
                <br />
                So does the way we work.
              </h2>
            </div>
          </div>
          <div className="principle-grid">
            {[
              [
                '01',
                'Know the cargo',
                'Chemical and liquid transportation starts with understanding the product and its handling requirements.',
              ],
              [
                '02',
                'Prepare the journey',
                'The right vehicle, the route, and loading arrangements all belong in the plan before a tanker leaves.',
              ],
              [
                '03',
                'Stay connected',
                'Driver coordination and fleet-management technology support visibility through the movement.',
              ],
            ].map(([n, title, copy]) => (
              <article key={n}>
                <span>{n}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section
        className="section vision-mission"
        aria-labelledby="vision-mission-title"
      >
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">OUR DIRECTION</p>
              <h2 id="vision-mission-title">What we work towards.</h2>
            </div>
          </div>
          <div className="vision-mission-grid">
            <article className="vision-board">
              <span className="board-label">LOOKING AHEAD</span>
              <h3>Our vision</h3>
              <p>
                To be a trusted transport partner for Indian industry, known for
                responsible chemical and liquid transportation and lasting
                business relationships.
              </p>
              <span className="board-word" aria-hidden="true">
                VISION
              </span>
            </article>
            <article className="mission-board">
              <span className="board-label">THE WORK, EVERY DAY</span>
              <h3>Our mission</h3>
              <p>
                To move chemicals and liquid cargo responsibly through prepared
                people, well-maintained vehicles, clear coordination, and
                transport plans built around each customer’s needs.
              </p>
              <span className="board-word" aria-hidden="true">
                MISSION
              </span>
            </article>
          </div>
        </div>
      </section>
      <section className="about-proof dark-section">
        <div className="container">
          <p className="eyebrow">SHREE MARUTI TODAY</p>
          <div className="about-proof-grid">
            <div>
              <strong>50+</strong>
              <span>OWNED TANKERS</span>
            </div>
            <div>
              <strong>PAN-INDIA</strong>
              <span>OPERATIONS</span>
            </div>
            <div>
              <strong>NICER GLOBE</strong>
              <span>CERTIFIED</span>
            </div>
          </div>
          <Link href="/safety" className="text-link">
            Safety and technology at Shree Maruti
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
      <section className="section">
        <div className="container editorial-grid">
          <div>
            <p className="eyebrow">A SPECIALIST TRANSPORT BUSINESS</p>
            <h2>
              Built around
              <br />
              liquid cargo.
            </h2>
          </div>
          <div className="editorial-copy">
            <p className="lead">
              From our Bhiwandi base, Shree Maruti brings together an owned
              tanker fleet, cargo planning, and site coordination for movements
              across India.
            </p>
            <p>
              Our fleet includes 22 to 35 MT payload options and SS 304, SS 316,
              and SS 316L material grades. We handle chemical, solvent,
              food-grade and pharmaceutical liquid requirements, with tanker
              selection guided by the product and the journey.
            </p>
            <p>
              For an individual consignment, that starts with the loading point
              and destination. For recurring dispatches, it also includes
              expected volumes, delivery windows, and coordination between the
              teams preparing and receiving the cargo.
            </p>
            <Link href="/fleet#specifications" className="text-link">
              Explore the tanker specifications <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
      <OperationsPreview />
      <ContactBand />
    </>
  );
}
