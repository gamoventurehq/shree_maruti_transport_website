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
          <ClientGrid />
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
      <ContactBand />
    </>
  );
}
