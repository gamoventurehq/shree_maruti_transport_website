const hazardClasses = [
  ['1', 'Explosives', 'Explosive substances and articles.', 'explosive'],
  ['2', 'Gases', 'Flammable, non-flammable non-toxic, and toxic gases.', 'gas'],
  [
    '3',
    'Flammable liquids',
    'Liquids classified for their flammability in transport.',
    'flammable',
  ],
  [
    '4',
    'Flammable solids & reactive substances',
    'Includes spontaneously combustible and water-reactive substances.',
    'reactive',
  ],
  [
    '5',
    'Oxidizers & organic peroxides',
    'Oxidizing substances and organic peroxides are separate divisions.',
    'oxidizer',
  ],
  [
    '6',
    'Toxic & infectious substances',
    'Toxic substances and infectious substances are separate divisions.',
    'toxic',
  ],
  [
    '7',
    'Radioactive material',
    'Materials classified for their radioactive properties.',
    'radioactive',
  ],
  [
    '8',
    'Corrosive substances',
    'Substances classified for corrosive hazards.',
    'corrosive',
  ],
  [
    '9',
    'Miscellaneous dangerous goods',
    'Other dangerous substances and articles covered by transport classification.',
    'miscellaneous',
  ],
];

export function HazardousMaterials() {
  return (
    <section
      className="section hazard-section"
      id="hazardous-materials"
      aria-labelledby="hazard-title"
    >
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">CARGO AWARENESS</p>
            <h2 id="hazard-title">
              Nine hazard classes.
              <br />
              Start with identification.
            </h2>
          </div>
          <p className="section-description">
            Dangerous goods are grouped into nine transport hazard classes. The
            class describes the hazard; it does not, by itself, establish
            whether a product is suitable for a particular tanker.
          </p>
        </div>
        <div className="hazard-intro">
          <strong>An awareness guide, not a cargo acceptance list.</strong>
          <p>
            These classes are shown for general understanding. Share the safety
            data sheet and transport classification with your enquiry. Shree
            Maruti confirms product acceptance and tanker suitability before
            booking.
          </p>
        </div>
        <div className="hazard-grid">
          {hazardClasses.map(([number, title, description, tone]) => (
            <article key={number}>
              <div
                className={`hazard-number hazard-${tone}`}
                aria-hidden="true"
              >
                <span>{number}</span>
              </div>
              <div>
                <span className="eyebrow">CLASS {number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="asset-note">
          Simplified class guide based on the{' '}
          <a
            href="https://unece.org/transport/dangerous-goods"
            target="_blank"
            rel="noopener noreferrer"
          >
            UN dangerous goods classification framework
          </a>
          . The numbered graphics are navigation illustrations, not transport
          placards or labelling instructions.
        </p>
      </div>
    </section>
  );
}
