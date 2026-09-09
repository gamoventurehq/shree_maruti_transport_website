import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import {
  ContactBand,
  FleetVisual,
  PageIntro,
} from '@/components/transport/site';
import { business } from '@/content/business';

export const metadata: Metadata = {
  title: 'About us',
  description:
    'Meet Shree Maruti Transport Services: established in 2001, with 50+ owned trucks and chemical and liquid transport operations across India.',
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
            <strong>2001</strong>
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
              Shree Maruti Transport Services was established in 2001. From our
              base in {business.location}, we operate across India.
            </p>
            <p>
              Our work centres on road transportation for chemicals, solvents,
              and industrial liquids. An owned fleet of 50+ trucks supports
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
                'The right vehicle, the route, and loading arrangements all belong in the plan before a truck leaves.',
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
              <span>OWNED TRUCKS</span>
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
      <ContactBand />
    </>
  );
}
