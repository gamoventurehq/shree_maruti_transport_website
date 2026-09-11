import { business } from '@/content/business';
import { TextLink } from './site';

export function FleetSpecifications() {
  const specifications = [
    {
      label: 'Owned tanker fleet',
      value: `${business.fleetSize} tankers`,
      detail:
        'Supporting chemical, food-grade and pharmaceutical liquid movements.',
    },
    {
      label: 'Payload capacities',
      value: `${business.payloadCapacities.join(' / ')} MT`,
      detail:
        'Capacity is matched to the product, loading requirement, and route.',
    },
    {
      label: 'Tank material grades',
      value: business.materialGrades.join(' · '),
      detail:
        'Stainless-steel grades selected for the cargo and its compatibility requirements.',
    },
    {
      label: 'Operational coverage',
      value: 'Pan-India',
      detail: 'Road tanker logistics from our base in Bhiwandi, Maharashtra.',
    },
    {
      label: 'Cargo focus',
      value: 'Chemical, food-grade & pharmaceutical liquids',
      detail:
        'Including solvents and industrial liquids, subject to product suitability.',
    },
    {
      label: 'Safety credential',
      value: 'Nicer Globe certified',
      detail:
        'Supported by fleet-management tie-ups with Tata Motors Fleet Edge and BlackBox.',
    },
  ];
  return (
    <section
      className="section fleet-specifications"
      id="specifications"
      aria-labelledby="specifications-title"
    >
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">FLEET AT A GLANCE</p>
            <h2 id="specifications-title">
              The right tanker.
              <br />
              The details that count.
            </h2>
          </div>
          <p className="section-description">
            A closer look at the fleet behind our bulk liquid transport
            services. Share your product details so we can discuss the
            appropriate tanker configuration.
          </p>
        </div>
        <dl className="specification-grid">
          {specifications.map((spec) => (
            <div key={spec.label}>
              <dt>{spec.label}</dt>
              <dd>
                <strong>{spec.value}</strong>
                <p>{spec.detail}</p>
              </dd>
            </div>
          ))}
        </dl>
        <p className="asset-note">
          MT means metric tonnes. Actual loading quantity depends on product
          density, tanker configuration, permitted payload, and route
          requirements. Material grades and capacities describe the fleet range;
          availability is confirmed for each shipment.
        </p>
        <TextLink href="/contact">Discuss a tanker specification</TextLink>
      </div>
    </section>
  );
}
