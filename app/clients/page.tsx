import { SampleBriefs } from '@/components/transport/sample-briefs';
import { ClientBanner } from '@/components/transport/client-banner';
import type { Metadata } from 'next';
import {
  ClientGrid,
  ContactBand,
  PageIntro,
  TextLink,
} from '@/components/transport/site';

export const metadata: Metadata = {
  title: 'Our clients',
  description:
    'Businesses across chemicals, pharmaceuticals, manufacturing, and industrial supply served by Shree Maruti Transport Services.',
};

export default function ClientsPage() {
  return (
    <>
      <PageIntro
        eyebrow="OUR CLIENTS"
        title="Their industry. Our commitment."
        description="Working with businesses across chemicals, pharmaceuticals, manufacturing, and industrial supply."
      />
      <ClientBanner />
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">BUSINESSES WE WORK WITH</p>
              <h2>Connected through transport.</h2>
            </div>
            <p className="section-description">
              Every movement is part of a wider supply chain. These are some of
              the businesses we work with.
            </p>
          </div>
          <details className="client-directory">
            <summary>View the complete client directory</summary>
            <ClientGrid />
          </details>
          <p className="asset-note">
            All client names and logos belong to their respective owners.
          </p>
        </div>
      </section>
      <section className="section dark-section">
        <div className="container editorial-grid">
          <div>
            <p className="eyebrow">THE SAME CARE, EVERY TIME</p>
            <h2>
              Different industries.
              <br />A shared need to move.
            </h2>
          </div>
          <div className="editorial-copy">
            <p className="lead">
              The cargo changes. The importance of planning does not.
            </p>
            <p>
              We begin with the product, route, and schedule to understand what
              each transport requirement needs.
            </p>
            <TextLink href="/services">Explore our transport services</TextLink>
          </div>
        </div>
      </section>
      <section className="section client-industries">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">INDUSTRIAL SUPPLY CHAINS</p>
              <h2>
                Different products.
                <br />
                Specific requirements.
              </h2>
            </div>
            <p className="section-description">
              A tanker movement connects suppliers, production teams, and
              receiving facilities. The useful details differ with every product
              and site.
            </p>
          </div>
          <div className="industry-grid">
            <article>
              <span>01 / CHEMICALS & SOLVENTS</span>
              <h3>Know the product.</h3>
              <p>
                Product specifications, safety data, and tanker compatibility
                form the basis of chemical and solvent transport planning. Share
                handling instructions and site requirements at the enquiry
                stage.
              </p>
            </article>
            <article>
              <span>02 / PHARMACEUTICAL SUPPLY</span>
              <h3>Coordinate the handover.</h3>
              <p>
                Raw-material movements need clear product identification and
                receiving instructions. Loading schedules, delivery windows, and
                site contacts help coordinate transport with plant operations.
              </p>
            </article>
            <article>
              <span>03 / MANUFACTURING</span>
              <h3>Plan around production.</h3>
              <p>
                For recurring industrial liquid requirements, discuss dispatch
                frequency and expected volumes. A shared schedule helps identify
                the tanker capacity and route arrangements needed for each
                movement.
              </p>
            </article>
          </div>
        </div>
      </section>
      <SampleBriefs />
      <ContactBand />
    </>
  );
}
