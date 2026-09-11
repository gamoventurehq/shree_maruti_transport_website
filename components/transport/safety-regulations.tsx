import Link from '@/components/transport/page-link';
import { ClipboardCheck, FileCheck, FlaskConical, HardHat } from 'lucide-react';

const preparationAreas = [
  {
    icon: HardHat,
    title: 'Personal protective equipment',
    description:
      'Plan protective equipment around the cargo and the loading site: head and eye protection, suitable gloves, protective clothing, and safety footwear. Confirm any additional site requirements before arrival.',
    label: 'PEOPLE & SITE SAFETY',
  },
  {
    icon: FlaskConical,
    title: 'Cargo information & handling',
    description:
      'Share the product name, safety data sheet, quantity, and handling instructions. For chemical and liquid cargo, discuss tanker suitability, loading arrangements, and unloading access before booking.',
    label: 'KNOW THE LOAD',
  },
  {
    icon: ClipboardCheck,
    title: 'Vehicle & journey checks',
    description:
      'Vehicle condition, tanker fittings, route access, and the receiving site all belong in the transport plan. Clear driver and site contacts support coordination from dispatch through delivery.',
    label: 'BEFORE DISPATCH',
  },
  {
    icon: FileCheck,
    title: 'Documentation & regulations',
    description:
      'Documentation and permissions depend on the cargo, vehicle, and route. Confirm shipment details, relevant transport documents, site instructions, and emergency contact information with the transport team before dispatch.',
    label: 'PREPARE THE DETAILS',
  },
];

export function SafetyRegulations() {
  return (
    <section
      className="section safety-regulations"
      id="regulations"
      aria-labelledby="regulations-title"
    >
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">SAFETY & REGULATIONS</p>
            <h2 id="regulations-title">
              Safer cargo transport.
              <br />
              From the first detail.
            </h2>
          </div>
          <p className="section-description">
            Road transport and logistics start with understanding the load.
            These are the safety and preparation topics to discuss when planning
            a chemical, liquid, or industrial cargo movement.
          </p>
        </div>
        <div className="regulations-grid">
          {preparationAreas.map(({ icon: Icon, title, description, label }) => (
            <article className="regulation-card" key={title}>
              <Icon size={34} strokeWidth={1.4} aria-hidden="true" />
              <p className="eyebrow">{label}</p>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
        <div className="regulations-note">
          <span>PLAN YOUR SHIPMENT</span>
          <p>
            Cargo acceptance, vehicle suitability, and applicable requirements
            are confirmed for each transport enquiry.
          </p>
          <Link className="text-link" href="/contact">
            Discuss your cargo <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
