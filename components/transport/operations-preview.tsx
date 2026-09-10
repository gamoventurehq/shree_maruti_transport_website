export function OperationsPreview({ safety = false }: { safety?: boolean }) {
  const steps = safety
    ? [
        [
          'Before allocation',
          'Review the cargo brief',
          'The cargo review brings together product identification, handling instructions, tanker suitability and the documents requested by the customer. Any unanswered requirement is returned to the planning team.',
        ],
        [
          'Before departure',
          'Record readiness',
          'The dispatch record covers the vehicle, the driver, site instructions and the agreed dispatch details. The checklist brings these details together before the movement proceeds.',
        ],
        [
          'At collection and receipt',
          'Coordinate the handover',
          'Site coordination identifies a contact at each site and records the agreed loading or receiving window. Product checks and site procedures belong to the confirmed operating instructions.',
        ],
        [
          'After delivery',
          'Close the movement',
          'The movement closes with delivery documentation, a record of exceptions and any follow-up required. Open items are brought back to the relevant team for follow-up.',
        ],
      ]
    : [
        [
          'Customer coordination',
          'A clear commercial brief',
          'Customer coordination brings the product, quantity, route and preferred dates into one brief. It gives the customer a named point of coordination for the requirement.',
        ],
        [
          'Fleet planning',
          'Match the movement to the fleet',
          'Fleet planning reviews the requested payload, tank material and loading arrangements before discussing availability. Confirmed vehicle details belong with the dispatch record.',
        ],
        [
          'Site coordination',
          'Connect both ends of the journey',
          'The handover connects the loading point, driver and receiving contact. Changes to an appointment or destination are recorded against the movement.',
        ],
        [
          'Documentation',
          'Keep the movement traceable',
          'Documentation coordination collects the agreed dispatch details and delivery records in one place. The records connect the agreed requirement with the completed handover.',
        ],
      ];
  return (
    <section className="section operations-preview">
      <div className="container">
        <div className="section-heading">
          <div>
            <h2>
              {safety
                ? 'A movement, from review to handover.'
                : 'The people behind a planned movement.'}
            </h2>
            <p>
              {safety
                ? 'Cargo review, dispatch preparation, site coordination and delivery records.'
                : 'How customer, fleet and site coordination fit together.'}
            </p>
          </div>
        </div>
        <ol className="operations-steps">
          {steps.map(([stage, title, body], index) => (
            <li key={title}>
              <span className="operation-number">0{index + 1}</span>
              <div>
                <span className="brief-cargo">{stage}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
