import type { Metadata } from 'next';
import Image from 'next/image';
import { ShieldCheck } from 'lucide-react';
import { ContactBand, PageIntro } from '@/components/transport/site';
import {
  fleetPartners,
  nicerglobeLogo,
  trackingGraphic,
} from '@/content/assets';
import { safetyPractices } from '@/content/services';

export const metadata: Metadata = {
  title: 'Safety & technology',
  description:
    'Nicer Globe certification, transport safety practices, and fleet-management tie-ups with Tata Motors Fleet Edge and BlackBox.',
};

export default function SafetyPage() {
  return (
    <>
      <PageIntro
        eyebrow="SAFETY & TECHNOLOGY"
        title="Responsibility, on every road."
        description="People, vehicle care, and journey visibility. A considered approach to chemical and liquid transportation."
      />
      <section className="section">
        <div className="container certification-feature">
          <div className="certification-logo">
            <Image
              src={nicerglobeLogo.src}
              width={nicerglobeLogo.width}
              height={nicerglobeLogo.height}
              alt="Nicerglobe Responsible Care Initiative"
              sizes="300px"
            />
          </div>
          <div>
            <p className="eyebrow">NICER GLOBE CERTIFIED</p>
            <h2>
              Safe transport
              <br />
              is a shared responsibility.
            </h2>
            <p className="lead">
              Shree Maruti Transport Services is Nicer Globe certified.
            </p>
            <p>
              Nicer Globe is an Indian Chemical Council initiative focused on
              safety, security, and emergency response in chemical
              transportation. This focus sits alongside our attention to
              drivers, vehicles, and the journey.
            </p>
            <a
              className="text-link"
              href="https://www.indianchemicalcouncil.com/nicer-globe"
              target="_blank"
              rel="noopener noreferrer"
            >
              About the Nicer Globe initiative
              <ShieldCheck size={18} />
            </a>
          </div>
        </div>
      </section>
      <section className="section safety-practices">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">OUR APPROACH</p>
              <h2>
                Prepared people.
                <br />
                Prepared vehicles.
              </h2>
            </div>
          </div>
          <div className="practice-grid">
            {safetyPractices.map((practice, i) => (
              <article key={practice.title}>
                <span>0{i + 1}</span>
                <h3>{practice.title}</h3>
                <p>{practice.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section dark-section" id="technology">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">FLEET TECHNOLOGY</p>
              <h2>
                Visibility supports
                <br />
                better coordination.
              </h2>
            </div>
            <p className="section-description">
              Our fleet-management tie-ups support the people coordinating
              vehicle movements.
            </p>
          </div>
          <div className="technology-layout">
            <div>
              <Image
                className="tracking-graphic"
                src={trackingGraphic.src}
                alt="Client-supplied illustration of GPS fleet tracking, route history, and vehicle monitoring"
                width={trackingGraphic.width}
                height={trackingGraphic.height}
                sizes="(max-width: 768px) 100vw, 650px"
              />
              <p className="asset-note">
                Illustrative technology graphic. This website does not provide
                live vehicle tracking.
              </p>
            </div>
            <div className="technology-partners">
              {fleetPartners.map((partner) => (
                <article key={partner.name}>
                  <div
                    className={`partner-logo ${partner.name.includes('Tata') ? 'partner-logo-dark' : ''}`}
                  >
                    <Image
                      src={partner.src}
                      alt={partner.name}
                      width={partner.width}
                      height={partner.height}
                      sizes="250px"
                    />
                  </div>
                  <h3>{partner.name}</h3>
                  <p>
                    A fleet-management tie-up supporting our transport
                    operations.
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
