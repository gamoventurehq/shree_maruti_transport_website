export const serviceGuides = [
  {
    slug: 'chemical-tanker-transport',
    serviceId: 'chemicals',
    title: 'Chemical tanker transport across India',
    summary:
      'Bulk liquid transport for chemical supply chains, connecting production facilities, storage points and receiving plants.',
    introduction:
      'A chemical consignment is more than a payload and a destination. The product specification, tanker material, loading connections and receiving arrangements all shape the transport brief. Shree Maruti Transport Services brings a fleet of 50+ owned tankers to chemical and liquid movements across India.',
    focus: 'Plan around the product',
    explanation:
      'Our fleet includes SS 304, SS 316 and SS 316L material grades, with payload options from 16 to 35 MT. These are fleet-wide options, not a guarantee that every capacity and grade combination is available. The specific tanker and movement are agreed after reviewing the cargo requirement.',
    considerations: [
      [
        'Cargo information',
        'Identify the product, quantity and relevant handling information. A clear specification helps the transport and receiving teams discuss the same requirement.',
      ],
      [
        'Tanker suitability',
        'Material compatibility, fittings, previous cargo and preparation requirements belong in the selection discussion. Payload alone does not establish suitability.',
      ],
      [
        'Site coordination',
        'Loading appointments, entry instructions, weighbridge arrangements and the receiving contact help turn a route into a workable dispatch plan.',
      ],
    ],
    scenario: {
      title: 'A manufacturer-to-plant movement',
      route: 'Dahej → Bhiwandi',
      cargo: 'Industrial chemical · 25 MT enquiry',
      brief:
        'A manufacturer needs a bulk liquid consignment collected from its Gujarat facility and delivered to a receiving plant in Maharashtra. The buyer supplies the product specification and a preferred loading date.',
      approach:
        'The transport plan records the requested tank grade, loading connections, site appointment and receiving contact before assigning a vehicle. Dispatch and arrival updates are agreed with the operations team.',
      handover:
        'The receiving team checks the consignment details and records the delivery documentation. Actual acceptance criteria, route availability and update arrangements remain subject to confirmation.',
    },
    question: 'Can a tanker be selected using capacity alone?',
    answer:
      'No. The product, material compatibility, tanker configuration and site requirements must be considered alongside quantity. Share the full cargo brief so the available options can be discussed.',
  },
  {
    slug: 'food-grade-liquid-transport',
    serviceId: 'food-grade',
    title: 'Food-grade liquid tanker transport',
    summary:
      'Liquid cargo transportation with product quality, tanker preparation and receiving requirements at the centre of the brief.',
    introduction:
      'Food-grade liquid transport brings the quality team into the planning conversation. Alongside the quantity and route, the buyer needs to specify cleanliness requirements, prior-cargo restrictions, product identification and receiving conditions. These details establish what a suitable movement must look like before dispatch.',
    focus: 'Make the quality brief explicit',
    explanation:
      'Shree Maruti handles food-grade liquid transport and operates stainless-steel tankers across SS 304, SS 316 and SS 316L grades. A material grade by itself does not establish food-grade suitability. Product requirements and tanker preparation need to be agreed for the particular consignment.',
    considerations: [
      [
        'Product and quality requirements',
        'Provide the product specification and the checks expected at collection and receipt. Include any temperature or handling requirements for assessment rather than assuming a particular vehicle capability.',
      ],
      [
        'Preparation and cargo history',
        'Describe required cleaning evidence and restrictions on previous cargo. The transport discussion should establish what documentation the buyer needs to accept the tanker.',
      ],
      [
        'Receiving arrangements',
        'Identify the unloading connection, receiving contact and appointment window. Clear product identification and handover instructions help the site prepare for arrival.',
      ],
    ],
    scenario: {
      title: 'A food-production supply movement',
      route: 'Ahmedabad → Pune',
      cargo: 'Food-grade liquid · 21 MT enquiry',
      brief:
        'A food producer needs a liquid ingredient moved between two facilities. Its quality team provides a preparation checklist and prior-cargo restrictions with the transport enquiry.',
      approach:
        'The transport brief brings together the quality requirements, requested payload, loading appointment and receiving instructions. Tanker suitability and supporting documents are review items before the movement is agreed.',
      handover:
        'The movement closes with the receiving team reviewing the product details and agreed delivery documents. Tanker preparation and acceptance requirements are established with the quality team before dispatch.',
    },
    question: 'What should our quality team provide?',
    answer:
      'Provide the product specification, cleanliness and prior-cargo requirements, required documents, and receiving checks. Any special conditions should be discussed before confirming the tanker.',
  },
  {
    slug: 'scheduled-tanker-logistics',
    serviceId: 'tanker-movements',
    title: 'Scheduled tanker logistics for industry',
    summary:
      'A practical transport brief for repeat dispatches, production schedules and bulk liquid supply across India.',
    introduction:
      'Recurring transport needs a view of the whole dispatch cycle. A production team may know its monthly requirement while a receiving plant works to individual appointment windows. Bringing those details together helps define the tanker requirement, collection sequence and communication points for each movement.',
    focus: 'Build a schedule that teams can use',
    explanation:
      'Shree Maruti discusses both individual consignments and recurring tanker requirements. With 50+ owned tankers and pan-India operations, the starting point is the expected volume, product, origin and destinations. Availability, frequency and route arrangements are agreed for the actual requirement.',
    considerations: [
      [
        'Volume and frequency',
        'Distinguish the expected monthly quantity from each individual load. Include preferred dispatch days and any periods when the requirement is likely to change.',
      ],
      [
        'Loading and delivery windows',
        'Record plant opening times, appointment requirements and access restrictions. Include a receiving contact for each destination rather than relying on a single general address.',
      ],
      [
        'Coordination and documentation',
        'Agree which dispatch details and delivery records the buyer needs. Discuss how changes to the schedule will be communicated before making a recurring commitment.',
      ],
    ],
    scenario: {
      title: 'A recurring plant supply schedule',
      route: 'Bhiwandi → Hyderabad',
      cargo: 'Industrial liquid · weekly dispatch brief',
      brief:
        'A procurement team is planning regular liquid deliveries to a manufacturing facility. The brief includes expected weekly quantities and two possible receiving windows.',
      approach:
        'The dispatch schedule separates planned demand from confirmed dispatches. Each movement records the product, requested capacity, site contacts and delivery window so changes can be reviewed against the whole plan.',
      handover:
        'Delivery records are grouped by dispatch for review with the procurement team. Frequency, route availability and receiving windows are agreed as part of the transport requirement.',
    },
    question: 'Can the schedule change as our production changes?',
    answer:
      'Changes can be discussed with the operations team. Tanker availability, cargo requirements and site arrangements need to be reviewed before a revised movement is confirmed.',
  },
] as const;
