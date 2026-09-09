export const business = {
  name: 'Shree Maruti Transport',
  fleetSize: 150,
  // Publish only after the client confirms the brand, content, routes, and contacts.
  isPreview: true,
  creatorCredit: false,
};

export const regions = [
  {
    id: 'west',
    name: 'Western India',
    city: 'Ahmedabad',
    lon: 72.57,
    lat: 23.02,
    cities: 'Ahmedabad · Mumbai · Pune',
    description:
      'Explore a movement to or from western India. Share your pickup and delivery locations to discuss the route.',
  },
  {
    id: 'north',
    name: 'Northern India',
    city: 'Delhi',
    lon: 77.21,
    lat: 28.61,
    cities: 'Delhi · Jaipur · Chandigarh',
    description:
      'Planning a movement in northern India? Start with your cargo details, locations, and preferred dispatch date.',
  },
  {
    id: 'central',
    name: 'Central India',
    city: 'Nagpur',
    lon: 79.09,
    lat: 21.15,
    cities: 'Nagpur · Indore · Raipur',
    description:
      'For a movement through central India, share the route and load details so the requirement is clear from the start.',
  },
  {
    id: 'south',
    name: 'Southern India',
    city: 'Bengaluru',
    lon: 77.59,
    lat: 12.97,
    cities: 'Bengaluru · Hyderabad · Chennai',
    description:
      'Discuss your next movement to or from southern India, whether it is one consignment or a recurring requirement.',
  },
  {
    id: 'east',
    name: 'Eastern India',
    city: 'Kolkata',
    lon: 88.36,
    lat: 22.57,
    cities: 'Kolkata · Bhubaneswar · Guwahati',
    description:
      'Planning transport to eastern or northeastern India? Include the destination and cargo details in your enquiry.',
  },
] as const;
