import type { Metadata } from 'next';
import { ArrowUpRight, Mail, MapPin } from 'lucide-react';
import { PageIntro } from '@/components/transport/site';
import { EnquiryForm } from '@/components/transport/enquiry-form';
import { business } from '@/content/business';
import { getSmtpConfig } from '@/lib/mail-config';
import {
  GoogleMapsIcon,
  SocialIcons,
} from '@/components/transport/social-icons';

export const metadata: Metadata = {
  title: 'Contact us',
  description:
    'Find the Shree Maruti Transport Service office in Mumbai, Bhiwandi, Maharashtra, and enquire about chemical solvent, food-grade, pharma or other liquid cargo transport.',
};

export default function ContactPage() {
  const directSendEnabled = Boolean(getSmtpConfig());

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
            <p className="eyebrow">SHREE MARUTI TRANSPORT SERVICE</p>
            <h2>
              Let’s talk
              <br />
              about the journey.
            </h2>
            <p>
              Share your product details, quantity, route, and preferred
              dispatch date.{' '}
              {directSendEnabled
                ? 'Send your enquiry to our team using the form.'
                : 'Prepare an enquiry using the form and open it in your email app.'}
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
                <GoogleMapsIcon />
                Open directions in Google Maps
                <ArrowUpRight size={18} />
              </a>
            </div>
            <div className="contact-email">
              <Mail size={24} />
              <h3>Email us</h3>
              <a className="text-link" href={`mailto:${business.email}`}>
                {business.email}
                <ArrowUpRight size={18} />
              </a>
            </div>
            <SocialIcons />
          </div>
          <div className="form-panel">
            <h2>Your transport requirement</h2>
            <p className="form-intro">Fields marked * are required.</p>
            <EnquiryForm directSendEnabled={directSendEnabled} />
          </div>
        </div>
      </section>
      <section className="section enquiry-preparation">
        <div className="container editorial-grid">
          <div>
            <p className="eyebrow">A USEFUL ENQUIRY</p>
            <h2>
              The details that
              <br />
              help us plan.
            </h2>
            <p>
              Whether you need a single tanker movement or a recurring dispatch
              schedule, a complete brief makes it easier to discuss the right
              transport arrangement.
            </p>
          </div>
          <div className="process-list">
            <div>
              <span>01</span>
              <div>
                <h3>Product and quantity</h3>
                <p>
                  Include the product name, quantity, safety data sheet where
                  applicable, and any tanker material or hygiene requirements.
                </p>
              </div>
            </div>
            <div>
              <span>02</span>
              <div>
                <h3>Locations and site access</h3>
                <p>
                  Provide pickup and delivery addresses, site contacts, access
                  restrictions, and loading or unloading arrangements.
                </p>
              </div>
            </div>
            <div>
              <span>03</span>
              <div>
                <h3>Timing and frequency</h3>
                <p>
                  State the preferred dispatch date, receiving window, and
                  whether the requirement is one-off or recurring. For regular
                  movements, share expected volumes and frequency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="office-map">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">FIND US</p>
              <h2>Mumbai, Bhiwandi, Maharashtra.</h2>
            </div>
            <a
              className="text-link"
              href={business.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GoogleMapsIcon />
              View the business listing
              <ArrowUpRight size={18} />
            </a>
          </div>
          <iframe
            title="Shree Maruti Transport Service office location"
            src="https://maps.google.com/maps?q=19.2516926,73.1062199&z=15&output=embed"
            width="1200"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <p className="asset-note">
            Office location from the Google Maps link provided by Shree Maruti
            Transport Service.
          </p>
        </div>
      </section>
    </>
  );
}
