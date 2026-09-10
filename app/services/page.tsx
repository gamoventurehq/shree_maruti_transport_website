import { TransportFaq } from '@/components/transport/transport-faq';
import type { Metadata } from 'next';
import { Droplets, FlaskConical, Route, Truck } from 'lucide-react';
import { ContactBand, PageIntro, TextLink } from '@/components/transport/site';
import { services } from '@/content/services';

export const metadata: Metadata = {
  title: 'Transport services',
  description:
    'Chemical transportation, solvents, industrial and food-grade liquids, and planned tanker movements from Shree Maruti Transport Services.',
};
const icons = {
  flask: FlaskConical,
  droplet: Droplets,
  truck: Truck,
  route: Route,
};

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="OUR SERVICES"
        title="Your cargo. Our focus."
        description="Chemical and liquid transportation, planned around the product and the journey it needs to make."
      />
      <section className="section">
        <div className="container services-list">
          {services.map((service) => {
            const Icon = icons[service.icon];
            return (
              <article
                className="service-detail"
                key={service.id}
                id={service.id}
              >
                <span className="detail-number">{service.number}</span>
                <div className="service-detail-title">
                  <Icon size={36} strokeWidth={1.3} />
                  <h2>{service.title}</h2>
                </div>
                <div>
                  <p className="lead">{service.summary}</p>
                  <p>{service.detail}</p>
                  <div className="service-requirements">
                    <span>WHAT TO SHARE WITH US</span>
                    <p>{service.requirements}</p>
                  </div>
                  <TextLink href="/contact">Discuss this service</TextLink>
                </div>
              </article>
            );
          })}
        </div>
      </section>
      <section className="section dark-section">
        <div className="container editorial-grid">
          <div>
            <p className="eyebrow">BEFORE DISPATCH</p>
            <h2>
              A clear brief.
              <br />A considered movement.
            </h2>
          </div>
          <div className="process-list">
            {[
              [
                'Tell us about the cargo',
                'Product, quantity, safety data, and any special handling needs.',
              ],
              [
                'Confirm the route',
                'Pickup and delivery points, access restrictions, and site contacts.',
              ],
              [
                'Agree on the movement',
                'Vehicle suitability, loading requirements, and the dispatch schedule.',
              ],
            ].map(([title, copy], i) => (
              <div key={title}>
                <span>0{i + 1}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <TransportFaq />
      <ContactBand />
    </>
  );
}
