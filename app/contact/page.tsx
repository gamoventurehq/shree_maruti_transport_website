import type { Metadata } from 'next';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { PageIntro } from '@/components/transport/site';
import { EnquiryForm } from '@/components/transport/enquiry-form';
import { business } from '@/content/business';

export const metadata: Metadata = {
  title: 'Contact us',
  description:
    'Find the Shree Maruti Transport Services office in Bhiwandi, Maharashtra, and prepare your chemical or liquid transport enquiry.',
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="CONTACT US"
        title="Where are we headed?"
        description="Start with your cargo, pickup, and destination. Let’s understand your next transport requirement."
      />
      <section className="section" id="contact">
        <div className="container contact-layout">
          <div className="contact-information">
            <p className="eyebrow">SHREE MARUTI TRANSPORT SERVICES</p>
            <h2>
              Let’s talk
              <br />
              about the journey.
            </h2>
            <p>
              Share your product details, quantity, route, and preferred
              dispatch date. You can prepare and copy a clear enquiry using the
              form.
            </p>
            <div className="office-card">
              <MapPin size={24} />
              <h3>Our office</h3>
              <p>
                {business.location}
                <br />
                India
              </p>
              <a
                className="text-link"
                href={business.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open directions in Google Maps
                <ArrowUpRight size={18} />
              </a>
            </div>
            <p className="contact-note">
              Direct phone and email details will be added once confirmed by the
              team.
            </p>
          </div>
          <div className="form-panel">
            <h2>Your transport requirement</h2>
            <p className="form-intro">Fields marked * are required.</p>
            <EnquiryForm />
          </div>
        </div>
      </section>
      <section className="office-map">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">FIND US</p>
              <h2>Bhiwandi, Maharashtra.</h2>
            </div>
            <a
              className="text-link"
              href={business.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View the business listing
              <ArrowUpRight size={18} />
            </a>
          </div>
          <iframe
            title="Shree Maruti Transport Services office location"
            src="https://maps.google.com/maps?q=19.2516926,73.1062199&z=15&output=embed"
            width="1200"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <p className="asset-note">
            Office location from the Google Maps link provided by Shree Maruti
            Transport Services.
          </p>
        </div>
      </section>
    </>
  );
}
