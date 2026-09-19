const specifications = [
  {
    label: 'Payload',
    range: '22 / 25 / 30 / 35 MT',
    guidance:
      'Confirm quantity and product density. Payload in tonnes is not the same as tank volume in litres.',
  },
  {
    label: 'Tank material',
    range: 'SS 304L',
    guidance:
      'Review the product and its compatibility requirements before selecting the material grade.',
  },
  {
    label: 'Cargo focus',
    range: 'Chemical solvents, food-grade, pharma and other liquids',
    guidance:
      'Identify the product and any preparation or prior-cargo requirements. Acceptance is consignment-specific.',
  },
  {
    label: 'Fleet and reach',
    range: '50+ owned tankers · Pan-India',
    guidance:
      'Confirm the route, available configuration, site access and intended loading date.',
  },
];

export function FleetPlanningGuide() {
  return (
    <section className="section fleet-planning-guide">
      <div className="container">
        <div className="section-heading">
          <div>
            <h2>Read the fleet specification.</h2>
            <p>What the figures tell you—and what still needs to be agreed.</p>
          </div>
        </div>
        <section
          className="spec-table-wrap"
          // A scrollable table needs a keyboard focus target.
          // oxlint-disable-next-line jsx-a11y/no-noninteractive-tabindex
          tabIndex={0}
          aria-label="Tanker specification guide"
        >
          <table className="spec-guide-table">
            <caption>Confirmed fleet range and selection questions</caption>
            <thead>
              <tr>
                <th scope="col">Specification</th>
                <th scope="col">Fleet range</th>
                <th scope="col">For your consignment</th>
              </tr>
            </thead>
            <tbody>
              {specifications.map(({ label, range, guidance }) => (
                <tr key={label}>
                  <th scope="row">{label}</th>
                  <td>{range}</td>
                  <td>{guidance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        <dl
          className="spec-guide-mobile"
          aria-label="Tanker specification guide"
        >
          {specifications.map(({ label, range, guidance }) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>
                <strong>{range}</strong>
                <p>{guidance}</p>
              </dd>
            </div>
          ))}
        </dl>
        <div className="fleet-document-note">
          <h3>A useful tanker brief includes more than tonnage.</h3>
          <p>
            Record the loading and receiving connections, site restrictions,
            product specification and any preparation evidence required by the
            buyer. The available capacity and material ranges do not imply that
            every combination is present in the fleet.
          </p>
        </div>
      </div>
    </section>
  );
}
