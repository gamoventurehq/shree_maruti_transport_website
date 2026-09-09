import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowUpRight,
  Droplets,
  FlaskConical,
  ShieldCheck,
} from 'lucide-react';
import { Hero } from '@/components/transport/hero';
import { Coverage } from '@/components/transport/coverage';
import {
  ClientGrid,
  ContactBand,
  FleetVisual,
  TextLink,
} from '@/components/transport/site';
import { nicerglobeLogo } from '@/content/assets';
import { business } from '@/content/business';

export default function Home() {
  return (
    <>
      <Hero />
      <section className="facts-strip" aria-label="Company facts">
        <div className="container facts-grid">
          <div>
            <strong>
              {business.fleetSize}
              <span>TRUCKS</span>
            </strong>
            <p>An owned fleet. A shared responsibility.</p>
          </div>
          <div>
            <strong>
              {business.founded}
              <span>ESTABLISHED</span>
            </strong>
            <p>Our journey began on Indian roads.</p>
          </div>
          <div>
            <strong>
              PAN-INDIA<span>OPERATIONS</span>
            </strong>
            <p>Connecting industry across the country.</p>
          </div>
        </div>
      </section>
      <section className="section home-about" id="about">
        <div className="container editorial-grid">
          <div>
            <p className="eyebrow">THE COMPANY</p>
            <h2>
              Transport is our business.
              <br />
              Responsibility is our way.
            </h2>
          </div>
          <div className="editorial-copy">
            <p className="lead">
              For every consignment, there is a business counting on its
              arrival.
            </p>
            <p>
              Since 2001, Shree Maruti Transport Services has worked in road
              transportation, with a focus on chemicals and liquid cargo. Today,
              our 150 owned trucks serve businesses across India.
            </p>
            <TextLink href="/about">Get to know Shree Maruti</TextLink>
          </div>
        </div>
      </section>
      <section className="section services-preview">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">WHAT WE MOVE</p>
              <h2>
                Specialised cargo.
                <br />
                Considered transport.
              </h2>
            </div>
            <TextLink href="/services">All services</TextLink>
          </div>
          <div className="service-preview-grid">
            <Link href="/services#chemicals" className="service-preview">
              <FlaskConical size={34} strokeWidth={1.4} />
              <span className="service-number">01 /</span>
              <h3>
                Chemical
                <br />
                transportation
              </h3>
              <p>
                Tanker transport for chemical manufacturers, suppliers, and
                industrial customers.
              </p>
              <ArrowUpRight className="service-arrow" size={25} />
            </Link>
            <Link href="/services#solvents" className="service-preview">
              <Droplets size={34} strokeWidth={1.4} />
              <span className="service-number">02 /</span>
              <h3>
                Solvents &<br />
                industrial liquids
              </h3>
              <p>
                Road movements planned around the product, its handling
                requirements, and destination.
              </p>
              <ArrowUpRight className="service-arrow" size={25} />
            </Link>
            <div className="service-note">
              <span>
                FROM PICKUP
                <br />
                TO DELIVERY.
              </span>
              <p>
                Share the cargo, the route, and the schedule. We’ll start with
                the details that matter.
              </p>
              <TextLink href="/contact">Plan a movement</TextLink>
            </div>
          </div>
        </div>
      </section>
      <section className="home-fleet dark-section" id="fleet">
        <div className="fleet-feature-photo">
          <FleetVisual panel="lineup" />
        </div>
        <div className="container fleet-feature-content">
          <div>
            <p className="eyebrow">THE FLEET BEHIND THE JOURNEY</p>
            <h2>
              150 trucks.
              <br />
              One commitment.
            </h2>
          </div>
          <div>
            <p>
              Our owned fleet is the foundation of our transport operations.
              Explore our tanker focus and the technology that supports it.
            </p>
            <TextLink href="/fleet">Explore our fleet</TextLink>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container assurance-grid">
          <div className="certification-logo">
            <Image
              src={nicerglobeLogo.src}
              width={nicerglobeLogo.width}
              height={nicerglobeLogo.height}
              alt="Nicerglobe Responsible Care Initiative"
              sizes="260px"
            />
          </div>
          <div>
            <p className="eyebrow">SAFETY & TECHNOLOGY</p>
            <h2>
              Care travels with
              <br />
              every load.
            </h2>
            <p className="body-copy">
              Nicer Globe certified, with fleet-management tie-ups through Tata
              Motors Fleet Edge and BlackBox. Our approach brings together
              people, vehicle care, and journey visibility.
            </p>
            <TextLink href="/safety">
              Our safety approach
              <ShieldCheck size={18} />
            </TextLink>
          </div>
        </div>
      </section>
      <Coverage />
      <section className="section home-clients">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">OUR CLIENTS</p>
              <h2>Part of their supply chain.</h2>
            </div>
            <TextLink href="/clients">Meet our clients</TextLink>
          </div>
          <ClientGrid limit={6} />
        </div>
      </section>
      <ContactBand />
    </>
  );
}
