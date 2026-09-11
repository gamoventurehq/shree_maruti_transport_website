export const services = [
  {
    id: 'chemicals',
    number: '01',
    title: 'Chemical transportation',
    summary:
      'Tanker transport for chemical manufacturers, suppliers, and industrial customers.',
    detail:
      'From the loading point to the receiving plant, chemical movements need careful planning. We start with the product, its handling requirements, and the route to arrange the movement.',
    requirements:
      'Product name, safety data sheet, quantity, loading and unloading requirements.',
    icon: 'flask',
  },
  {
    id: 'solvents',
    number: '02',
    title: 'Solvents & industrial liquids',
    summary:
      'Road transportation shaped around the liquid cargo and its handling requirements.',
    detail:
      'Solvents and industrial liquids require attention to tanker suitability and site procedures. Share the product specification so the transport requirement can be assessed before dispatch.',
    requirements:
      'Product specification, compatibility requirements, quantity, and destination.',
    icon: 'droplet',
  },
  {
    id: 'food-grade',
    number: '03',
    title: 'Food-grade liquid transport',
    summary:
      'Tanker transportation for food-grade liquids, with the product and hygiene requirements considered from the outset.',
    detail:
      'Food-grade liquid movements require attention to tanker suitability, cleanliness, prior-cargo restrictions, and receiving-site procedures. Share the product specification and your quality requirements so preparation and transport arrangements can be confirmed.',
    requirements:
      'Product specification, quantity, hygiene requirements, prior-cargo restrictions, and loading arrangements.',
    icon: 'droplet',
  },
  {
    id: 'pharmaceutical-liquids',
    number: '04',
    title: 'Pharmaceutical liquid transport',
    summary:
      'Tanker transportation for pharmaceutical liquids, planned around product quality and handling requirements.',
    detail:
      'Share the product specification, hygiene requirements and loading conditions so tanker compatibility, preparation and receiving-site arrangements can be reviewed for the consignment.',
    requirements:
      'Product specification, quantity, hygiene requirements, documentation and receiving-site procedures.',
    icon: 'flask',
  },
  {
    id: 'tanker-movements',
    number: '05',
    title: 'Planned tanker movements',
    summary:
      'Transport planning for individual consignments and recurring business requirements.',
    detail:
      'Whether your requirement is a single movement or a regular dispatch schedule, we work from the pickup, destination, cargo, and timing to plan the transport.',
    requirements:
      'Dispatch frequency, preferred dates, origin, destination, and expected volumes.',
    icon: 'truck',
  },
  {
    id: 'pan-india',
    number: '06',
    title: 'Pan-India road transport',
    summary:
      'An owned fleet of 50+ tankers, connecting businesses across India.',
    detail:
      'Our operations extend across India. Discuss your origin and destination with us so the route, vehicle requirement, and delivery arrangements can be confirmed for your shipment.',
    requirements:
      'Pickup and delivery addresses, site access, delivery window, and contact person.',
    icon: 'route',
  },
] as const;

export const safetyPractices = [
  {
    title: 'Prepared drivers',
    body: 'Driver training and awareness of cargo-handling procedures are part of a responsible transport operation.',
  },
  {
    title: 'Vehicle maintenance',
    body: 'Regular maintenance and vehicle checks support tanker readiness before it goes on the road.',
  },
  {
    title: 'Appropriate PPE',
    body: 'Personal protective equipment and site-specific instructions help protect people at loading and unloading points.',
  },
  {
    title: 'Journey planning',
    body: 'Route, cargo, delivery location, and site access are considered when planning a movement.',
  },
  {
    title: 'Emergency preparedness',
    body: 'Clear cargo information and emergency arrangements help teams prepare for incidents on the journey.',
  },
  {
    title: 'Fleet visibility',
    body: 'Fleet-management technology supports visibility into vehicle movements and operational coordination.',
  },
] as const;
