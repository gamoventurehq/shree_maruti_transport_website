import type { Metadata } from 'next';
import Image from 'next/image';
import { MapPinned, ShieldCheck, Truck } from 'lucide-react';
import { ContactBand, PageIntro, TextLink } from '@/components/transport/site';
import { FleetGallery } from '@/components/transport/fleet-gallery';
import { fleetPartners } from '@/content/assets';

export const metadata: Metadata = {
  title: 'Our fleet',
  description:
    'Explore Shree Maruti Transport Services’ owned fleet of 150 trucks, tanker transport focus, and fleet-management partners.',
};

export default function FleetPage() {
  return (
    <>
      <PageIntro
        eyebrow="OUR FLEET"
        title="The strength behind every mile."
        description="150 owned trucks. A tanker-focused transport operation serving businesses across India."
      />
      <section className="section">
        <div className="container">
          <FleetGallery />
        </div>
      </section>
      <section className="section fleet-details">
        <div className="container editorial-grid">
          <div>
            <p className="eyebrow">BUILT AROUND THE LOAD</p>
            <h2>
              Tankers for
              <br />
              industrial movement.
            </h2>
            <p>
              Our fleet supports chemical and liquid transportation. Tanker
              suitability, capacity, and availability are confirmed against your
              cargo and route requirements.
            </p>
            <TextLink href="/contact">
              Discuss your vehicle requirement
            </TextLink>
          </div>
          <div className="fleet-capabilities">
            {[
              {
                icon: Truck,
                title: 'Owned fleet',
                copy: '150 trucks support our road transport operations.',
              },
              {
                icon: ShieldCheck,
                title: 'Tanker care',
                copy: 'Stainless-steel tanker focus, regular maintenance, and vehicle readiness.',
              },
              {
                icon: MapPinned,
                title: 'Fleet visibility',
                copy: 'Fleet-management technology supports vehicle coordination and journey visibility.',
              },
            ].map(({ icon: Icon, title, copy }) => (
              <article key={title}>
                <Icon size={26} strokeWidth={1.4} />
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">FLEET-MANAGEMENT TIE-UPS</p>
              <h2>Technology behind the movement.</h2>
            </div>
            <TextLink href="/safety#technology">
              How technology supports us
            </TextLink>
          </div>
          <div className="partner-row">
            {fleetPartners.map((partner) => (
              <div key={partner.src}>
                <div
                  className={`partner-logo ${partner.name.includes('Tata') ? 'partner-logo-dark' : ''}`}
                >
                  <Image
                    src={partner.src}
                    alt={partner.name}
                    width={partner.width}
                    height={partner.height}
                    sizes="300px"
                  />
                </div>
                <h3>{partner.name}</h3>
                <p>Fleet-management technology partner</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
