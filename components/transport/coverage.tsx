'use client';

import { useState } from 'react';
import Link from 'next/link';
import { coverageCities } from '@/content/coverage-cities';
import { indiaOutline } from '@/content/india-map';

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
            From Maharashtra’s industrial centres to destinations across
            northern, southern and eastern India. Explore the places we serve
            from Bhiwandi.
          </p>
        </div>
        <RouteExplorer />
      </div>
    </section>
  );
}

function RouteExplorer() {
  const [selected, setSelected] = useState<string>('Hyderabad');
  const city =
    coverageCities.find((item) => item.name === selected) ?? coverageCities[0];
  const project = (lon: number, lat: number) => [
    (lon - 66) * 16,
    (37 - lat) * 16,
  ];
  const hub = project(73.106, 19.252);
  return (
    <div className="route-explorer">
      <div className="route-map">
        <div className="map-orbit orbit-one" />
        <div className="map-orbit orbit-two" />
        <svg
          viewBox="0 0 520 490"
          aria-label="India route explorer from Bhiwandi"
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
          {coverageCities.map((point) => {
            const [x, y] = project(point.lon, point.lat);
            return (
              <g key={point.name}>
                <path
                  className={`route-arc ${point.name === selected ? 'is-selected' : ''}`}
                  d={`M${hub[0]},${hub[1]} Q${(hub[0] + x) / 2 - 35},${Math.min(y, hub[1]) - 55} ${x},${y}`}
                />
                <circle
                  cx={x}
                  cy={y}
                  r={point.name === selected ? 5 : 2.8}
                  fill={point.name === selected ? '#ff5157' : '#9ea4aa'}
                />
              </g>
            );
          })}
          <circle cx={hub[0]} cy={hub[1]} r="6" fill="#ff5157" />
          <text x={hub[0] - 15} y={hub[1] + 20} textAnchor="end">
            Bhiwandi
          </text>
          <text
            x={project(city.lon, city.lat)[0] + 10}
            y={project(city.lon, city.lat)[1] - 10}
          >
            {city.name}
          </text>
        </svg>
        <span className="map-caption">
          Service destinations · Routes shown schematically
        </span>
      </div>
      <div className="route-console">
        <h3 aria-live="polite" aria-atomic="true">
          Bhiwandi <span>→</span>
          <br />
          {city.name}
        </h3>
        <p>
          Explore a tanker movement between our operating base and {city.name}.
          Product suitability, site access and dispatch timing shape the route
          brief.
        </p>
        <p className="coverage-service-area">
          Also serving destinations across Kerala, including Kochi (Cochin).
        </p>
        <div className="city-selector" aria-label="Choose a destination">
          {coverageCities.map((point) => (
            <button
              key={point.name}
              aria-pressed={selected === point.name}
              onClick={() => setSelected(point.name)}
            >
              {point.name}
            </button>
          ))}
        </div>
        <Link className="button button-primary" href="/contact">
          Discuss this corridor ↗
        </Link>
      </div>
    </div>
  );
}
