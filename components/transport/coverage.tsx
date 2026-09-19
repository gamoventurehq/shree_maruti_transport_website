'use client';

/* oxlint-disable jsx-a11y/prefer-tag-over-role -- SVG points need explicit roles; HTML buttons are provided alongside the map. */

import { useState } from 'react';
import Link from '@/components/transport/page-link';
import { coverageCities } from '@/content/coverage-cities';
import { indiaOutline } from '@/content/india-map';

const locations = [
  { name: 'Mumbai', state: 'Maharashtra', lon: 72.878, lat: 19.076 },
  ...coverageCities,
];

export function Coverage() {
  return (
    <section
      className="coverage dark-section"
      id="coverage"
      aria-labelledby="coverage-title"
    >
      <div className="container">
        <div className="coverage-heading">
          <h2 id="coverage-title">
            One fleet.
            <br />
            Connected across India.
          </h2>
          <p className="body-copy">
            From Mumbai, Bhiwandi, Maharashtra to the destinations we serve
            across India. Transport for chemical solvents, food-grade and
            pharmaceutical cargo, and other liquid cargo.
          </p>
        </div>
        <RouteExplorer />
      </div>
    </section>
  );
}

function RouteExplorer() {
  const [selected, setSelected] = useState('Mumbai');
  const city = locations.find((item) => item.name === selected) ?? locations[0];
  const project = (lon: number, lat: number) => [
    (lon - 66) * 16,
    (37 - lat) * 16,
  ];
  return (
    <div className="route-explorer">
      <div className="route-map">
        <svg
          viewBox="0 0 520 490"
          role="group"
          aria-label="Service locations in India. Select a point for details."
        >
          <defs>
            <pattern
              id="coverage-dots"
              width="6"
              height="6"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r=".75" fill="#868b90" />
            </pattern>
          </defs>
          <path
            d={indiaOutline}
            fill="#24272b"
            stroke="#70777d"
            strokeWidth="1"
          />
          <path d={indiaOutline} fill="url(#coverage-dots)" />
          {locations.map((point) => {
            const [x, y] = project(point.lon, point.lat);
            return (
              <g
                key={point.name}
                className="coverage-point"
                role="button"
                tabIndex={0}
                aria-label={`Show ${point.name}`}
                aria-pressed={point.name === selected}
                aria-controls="coverage-location-details"
                onClick={() => setSelected(point.name)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    setSelected(point.name);
                  }
                }}
              >
                <title>{point.name}</title>
                <circle cx={x} cy={y} r="6" fill="transparent" />
                <circle
                  className="coverage-point-halo"
                  cx={x}
                  cy={y}
                  r="8"
                  pointerEvents="none"
                />
                <circle
                  cx={x}
                  cy={y}
                  r={point.name === selected ? 4.5 : 3}
                  pointerEvents="none"
                  fill={point.name === selected ? '#ff5157' : '#9ea4aa'}
                />
              </g>
            );
          })}
          <text
            x={project(city.lon, city.lat)[0]}
            y={project(city.lon, city.lat)[1] - 16}
            textAnchor="middle"
            pointerEvents="none"
          >
            {city.name}
          </text>
        </svg>
        <span className="map-caption">
          Select a point to explore · Locations shown schematically
        </span>
      </div>
      <div className="route-console">
        <div
          id="coverage-location-details"
          aria-live="polite"
          aria-atomic="true"
        >
          <p className="eyebrow">
            {city.state} ·{' '}
            {city.name === 'Mumbai' ? 'OPERATING BASE' : 'SERVICE DESTINATION'}
          </p>
          <h3>{city.name}</h3>
          <p>
            {city.name === 'Mumbai'
              ? 'Our operating base in Mumbai, Bhiwandi, Maharashtra coordinates tanker movements across India.'
              : `We serve ${city.name}, ${city.state}, with tanker transport for chemical solvents, food-grade, pharmaceutical and other liquid cargo. Loading and delivery arrangements are coordinated with your site team.`}
          </p>
        </div>
        <p className="coverage-service-area">
          Also serving destinations across Kerala, including Kochi (Cochin).
        </p>
        <div className="city-selector" aria-label="Choose a destination">
          {locations.map((point) => (
            <button
              key={point.name}
              aria-pressed={selected === point.name}
              aria-controls="coverage-location-details"
              onClick={() => setSelected(point.name)}
            >
              {point.name}
            </button>
          ))}
        </div>
        <Link className="button button-primary" href="/contact">
          Discuss a movement ↗
        </Link>
      </div>
    </div>
  );
}
