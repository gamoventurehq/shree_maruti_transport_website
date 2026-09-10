const questions = [
  [
    'What information is needed for a tanker transport enquiry?',
    'Start with the product name, quantity, pickup and delivery addresses, preferred dispatch date, and site contacts. For chemical cargo, include the safety data sheet and handling requirements so the movement can be assessed.',
  ],
  [
    'Which tanker capacities and material grades are available?',
    'Our fleet range includes 16, 21, 25, 30, and 35 MT payload capacities and SS 304, SS 316, and SS 316L material grades. The appropriate combination and available tanker are confirmed against your product and shipment requirements.',
  ],
  [
    'Do you transport food-grade liquids?',
    'Yes. We handle food-grade liquid transport as well as chemical and industrial liquid movements. Share product specifications, hygiene requirements, and any restrictions on prior cargo so tanker suitability and preparation can be discussed.',
  ],
  [
    'Can you plan regular dispatches?',
    'Yes. Alongside individual consignments, we discuss recurring tanker requirements. Share the expected volume, dispatch frequency, loading windows, and destinations to help plan the schedule.',
  ],
  [
    'Does pan-India coverage mean every route is automatically available?',
    'Route availability is confirmed for each movement. Pickup access, receiving-site requirements, tanker availability, and the intended delivery window all form part of the planning discussion.',
  ],
];
export function TransportFaq() {
  return (
    <section
      className="section transport-faq"
      aria-labelledby="transport-faq-title"
    >
      <div className="container editorial-grid">
        <div>
          <p className="eyebrow">BEFORE YOU BOOK</p>
          <h2 id="transport-faq-title">
            Questions about
            <br />
            your next movement.
          </h2>
          <p>
            A few practical details can make your tanker transport enquiry
            easier to assess.
          </p>
        </div>
        <div className="faq-list">
          {questions.map(([question, answer]) => (
            <details key={question}>
              <summary>
                {question}
                <span aria-hidden="true">+</span>
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
