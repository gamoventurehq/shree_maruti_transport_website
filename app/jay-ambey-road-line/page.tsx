import type { Metadata } from 'next';
import Image from 'next/image';
import { ContactBand, PageIntro, TextLink } from '@/components/transport/site';
import { jayAmbeyLogo } from '@/content/assets';
import { business } from '@/content/business';

export const metadata: Metadata = {
  title: 'Jay Ambey Road Line',
  description:
    'Jay Ambey Road Line and Shree Maruti Transport Service are two names for the same business, transporting chemical solvents and liquid cargo across India.',
};

export default function JayAmbeyRoadLinePage() {
  return (
    <>
      <PageIntro
        eyebrow="JAY AMBEY ROAD LINE"
        title="Jay Ambey Road Line."
        description="One business, known by two names. The same team and tanker fleet transporting chemical solvents, food-grade, pharmaceutical and other liquid cargo across India."
      />
      <section className="section">
        <div className="container editorial-grid">
          <div className="associated-company-logo">
            <Image
              src={jayAmbeyLogo.src}
              alt="Jay Ambey Road Line — JARL logo"
              width={jayAmbeyLogo.width}
              height={jayAmbeyLogo.height}
              sizes="220px"
            />
          </div>
          <div className="editorial-copy">
            <p className="eyebrow">OUR TRANSPORT BUSINESS</p>
            <h2>One business. Two names.</h2>
            <p className="lead">
              Jay Ambey Road Line and Shree Maruti Transport Service are two
              names for the same business. Our team, tanker fleet, transport
              services and contact details remain the same whichever name you
              know us by.
            </p>
            <p>
              Our base is in {business.location}. We coordinate liquid cargo
              movements across India, from collection at the loading plant to
              handover at the receiving site.
            </p>
            <p>
              For every enquiry, our team starts with your cargo details, route
              requirements and delivery arrangements.
            </p>
            <TextLink href="/about">Meet the transport business</TextLink>
          </div>
        </div>
      </section>
      <section className="section fleet-specifications">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">OUR TANKER FLEET</p>
              <h2>Tanker capacity for liquid cargo.</h2>
            </div>
            <TextLink href="/fleet">Explore the fleet</TextLink>
          </div>
          <dl className="specification-grid">
            <div>
              <dt>Owned tanker fleet</dt>
              <dd>
                <strong>{business.fleetSize}</strong>
              </dd>
              <p>One owned fleet supports our operations under both names.</p>
            </div>
            <div>
              <dt>Payload capacities</dt>
              <dd>
                <strong>{business.payloadCapacities.join(' / ')} MT</strong>
              </dd>
              <p>Capacity is selected to suit the consignment and route.</p>
            </div>
            <div>
              <dt>Tank material</dt>
              <dd>
                <strong>{business.materialGrades.join(' / ')}</strong>
              </dd>
              <p>Stainless-steel tankers for compatible liquid cargo.</p>
            </div>
          </dl>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">WHAT WE TRANSPORT</p>
              <h2>Services built around the product.</h2>
            </div>
            <TextLink href="/services">View all transport services</TextLink>
          </div>
          <div className="industry-grid">
            <article>
              <span>01 / CHEMICALS & SOLVENTS</span>
              <h3>Industrial liquid cargo.</h3>
              <p>
                Tanker transportation for chemical manufacturers, solvent
                suppliers and industrial customers. Product specifications,
                safety data and site requirements guide preparation and
                coordination at each end of the journey.
              </p>
            </article>
            <article>
              <span>02 / FOOD-GRADE & PHARMA</span>
              <h3>Product-specific requirements.</h3>
              <p>
                Food-grade and pharmaceutical liquid movements are planned
                around tanker compatibility, hygiene requirements, prior-cargo
                restrictions and receiving-site procedures. Share the product
                specification and quality requirements with our team.
              </p>
            </article>
            <article>
              <span>03 / OTHER LIQUID CARGO</span>
              <h3>Individual and recurring movements.</h3>
              <p>
                Transport for other liquid cargo and regular dispatch schedules.
                We assess the cargo, quantity, pickup and destination to
                coordinate a suitable tanker, loading appointment and delivery
                window.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="section dark-section">
        <div className="container editorial-grid">
          <div>
            <p className="eyebrow">MUMBAI BASE. PAN-INDIA SERVICE.</p>
            <h2>Connected from collection to handover.</h2>
          </div>
          <div className="editorial-copy">
            <p className="lead">
              Our operating network and safety practices apply to every movement
              under either name. The dispatch team coordinates with drivers and
              the people loading and receiving the cargo.
            </p>
            <p>
              Movements connect destinations including Ahmednagar–Supa, Mahad,
              Lote, Hyderabad, Vizag, Nellore, Chennai, Cuddalore, Erode, Kochi
              and Kerala, Bengaluru, Nagpur and Kolkata. Contact the same team
              to discuss your pickup, destination and schedule.
            </p>
            <TextLink href="/safety">
              Our safety and handling practices
            </TextLink>
          </div>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
