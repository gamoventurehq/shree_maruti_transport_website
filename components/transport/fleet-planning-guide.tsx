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
              <tr>
                <th scope="row">Payload</th>
                <td>22 / 25 / 30 / 35 MT</td>
                <td>
                  Confirm quantity and product density. Payload in tonnes is not
                  the same as tank volume in litres.
                </td>
              </tr>
              <tr>
                <th scope="row">Tank material</th>
                <td>SS 304L</td>
                <td>
                  Review the product and its compatibility requirements before
                  selecting the material grade.
                </td>
              </tr>
              <tr>
                <th scope="row">Cargo focus</th>
                <td>Chemical solvents, food-grade, pharma and other liquids</td>
                <td>
                  Identify the product and any preparation or prior-cargo
                  requirements. Acceptance is consignment-specific.
                </td>
              </tr>
              <tr>
                <th scope="row">Fleet and reach</th>
                <td>50+ owned tankers · Pan-India</td>
                <td>
                  Confirm the route, available configuration, site access and
                  intended loading date.
                </td>
              </tr>
            </tbody>
          </table>
        </section>
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
