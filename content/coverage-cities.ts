// Client-confirmed destinations; Kerala is represented by Kochi and the area note.
// Coordinates are schematic city markers, not branch addresses.
export const coverageCities = [
  {
    name: 'Ahmednagar / Supa',
    region: 'west',
    lat: 19.04,
    lon: 74.4,
    label: true,
  },
  { name: 'Mahad', region: 'west', lat: 18.08, lon: 73.42, label: true },
  { name: 'Lote', region: 'west', lat: 17.57, lon: 73.48, label: true },
  { name: 'Hyderabad', region: 'south', lat: 17.39, lon: 78.49, label: true },
  {
    name: 'Visakhapatnam (Vizag)',
    region: 'south',
    lat: 17.69,
    lon: 83.22,
    label: true,
  },
  { name: 'Nellore', region: 'south', lat: 14.44, lon: 79.99, label: true },
  { name: 'Chennai', region: 'south', lat: 13.08, lon: 80.27, label: true },
  { name: 'Cuddalore', region: 'south', lat: 11.75, lon: 79.77, label: true },
  { name: 'Erode', region: 'south', lat: 11.34, lon: 77.72, label: true },
  {
    name: 'Kochi (Cochin)',
    region: 'south',
    lat: 9.93,
    lon: 76.27,
    label: true,
  },
  {
    name: 'Bengaluru (Bangalore)',
    region: 'south',
    lat: 12.97,
    lon: 77.59,
    label: true,
  },
  { name: 'Nagpur', region: 'central', lat: 21.15, lon: 79.09, label: true },
  { name: 'Kolkata', region: 'east', lat: 22.57, lon: 88.36, label: true },
] as const;
