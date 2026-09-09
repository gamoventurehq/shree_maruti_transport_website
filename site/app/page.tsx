import Image from 'next/image';
import { ArrowUpRight, Plus, Route, Truck } from 'lucide-react';
import { Navigation } from '@/components/transport/navigation';
import { Hero } from '@/components/transport/hero';
import { Coverage } from '@/components/transport/coverage';
import { EnquiryForm } from '@/components/transport/enquiry-form';
import { business } from '@/content/business';

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navigation />
      <main id="main">
        <Hero />
        <section
          className="intro section-grid"
          id="about"
          aria-labelledby="about-title"
        >
          <p className="section-label">THE COMPANY</p>
          <div>
            <h2 id="about-title">
              A business that
              <br />
              keeps business moving.
            </h2>
            <p className="body-copy">
              From one city to the next, Shree Maruti Transport moves goods
              across India with an owned fleet of {business.fleetSize} trucks.
              Our business is road transport. Our focus is your next move.
            </p>
          </div>
          <div className="fleet-number">
            <span>{business.fleetSize}</span>
            <p>Trucks in our owned fleet</p>
            <a className="text-link" href="#fleet">
              Meet the fleet <ArrowUpRight size={17} />
            </a>
          </div>
        </section>
        <section
          className="fleet-section"
          id="fleet"
          aria-labelledby="fleet-title"
        >
          <div className="fleet-heading">
            <p className="section-label">OUR FLEET</p>
            <h2 id="fleet-title">
              The strength behind
              <br />
              every movement.
            </h2>
          </div>
          <div className="fleet-layout">
            <figure className="fleet-photo">
              <Image
                unoptimized
                src="/transport-hero.webp"
                alt="Illustrative heavy cargo truck on an open highway"
                width={1672}
                height={941}
                loading="lazy"
              />
              <figcaption>
                Concept imagery. Actual fleet photography to follow.
              </figcaption>
            </figure>
            <div className="fleet-story">
              <Truck size={32} strokeWidth={1.2} />
              <h3>
                Our trucks.
                <br />
                Your next destination.
              </h3>
              <p>
                A fleet of 150 owned trucks forms the backbone of our pan-India
                transport business.
              </p>
              <div className="fleet-facts">
                <div>
                  <span>150</span>
                  <p>Owned trucks</p>
                </div>
                <div>
                  <Route size={35} strokeWidth={1.2} />
                  <p>Pan-India operations</p>
                </div>
              </div>
              <p className="fleet-footnote">
                Vehicle types and load capacities will be added with the
                confirmed fleet details.
              </p>
            </div>
          </div>
        </section>
        <Coverage />
        <section
          className="planning section-grid"
          aria-labelledby="planning-title"
        >
          <p className="section-label">BEFORE THE JOURNEY</p>
          <div>
            <h2 id="planning-title">
              A good move starts
              <br />
              with the right details.
            </h2>
            <p className="body-copy">
              Tell us what needs to move, where it needs to go, and when. These
              details help define the transport requirement.
            </p>
          </div>
          <div className="planning-details">
            {[
              [
                'The route',
                'Share the pickup and delivery locations, including site access details and any loading restrictions.',
              ],
              [
                'The cargo',
                'Include the type of goods, approximate weight, dimensions, and any special handling requirements.',
              ],
              [
                'The schedule',
                'Tell us your preferred dispatch date, delivery window, and whether this is a one-off or recurring requirement.',
              ],
            ].map(([title, content], index) => (
              <details key={title} open={index === 0}>
                <summary>
                  <span>0{index + 1}</span>
                  {title}
                  <Plus size={18} />
                </summary>
                <p>{content}</p>
              </details>
            ))}
          </div>
        </section>
        <section
          className="contact"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="contact-intro">
            <p className="section-label">LET’S TALK TRANSPORT</p>
            <h2 id="contact-title">
              Where are
              <br />
              we headed<span>?</span>
            </h2>
            <p className="body-copy">
              Tell us about your next shipment.
              <br />
              Start with the details. We’ll take it from there.
            </p>
            <div className="contact-preview">
              <span>CONTACT DETAILS</span>
              <p>
                Official phone, email, and office address will be added after
                client confirmation.
              </p>
            </div>
          </div>
          <EnquiryForm />
        </section>
      </main>
      <footer>
        <div className="footer-top">
          <a className="footer-brand" href="#home">
            SHREE MARUTI<span>TRANSPORT</span>
          </a>
          <p>
            150 trucks.
            <br />
            One country. Countless journeys.
          </p>
          <a className="text-link" href="#home">
            Back to top <ArrowUpRight size={17} />
          </a>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {business.name}.
          </span>
          <span>
            Design preview · Content and imagery subject to client approval
          </span>
          {business.creatorCredit && (
            <a
              href="https://gamoventure.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Website by Gamoventure <ArrowUpRight size={12} />
            </a>
          )}
        </div>
      </footer>
    </>
  );
}
