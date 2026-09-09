'use client';

import { useState } from 'react';
import { ArrowUpRight, MapPin } from 'lucide-react';
import Link from 'next/link';
import { regions } from '@/content/business';
import { indiaOutline } from '@/content/india-map';

export function Coverage() {
  const [selected, setSelected] = useState<(typeof regions)[number]>(
    regions[0],
  );
  return (
    <section
      className="coverage dark-section"
      id="coverage"
      aria-labelledby="coverage-title"
    >
      <div className="container">
        <div className="coverage-heading">
          <p className="section-label">OUR REACH</p>
          <h2 id="coverage-title">
            One fleet.
            <br />A country of possibilities.
          </h2>
          <p className="body-copy">
            Across cities, state lines, and the roads in between. Explore our
            pan-India transport footprint.
          </p>
        </div>
        <div className="coverage-layout">
          <div className="map-panel">
            <div className="map-topline">
              <span>INDIA / ROAD NETWORK</span>
              <span>150 TRUCKS</span>
            </div>
            <div className="india-map">
              <svg
                viewBox="0 0 520 490"
                aria-label="Illustrative map of India with selectable regional city markers"
              >
                <title>Illustrative India transport coverage</title>
                <defs>
                  <pattern
                    id="map-dots"
                    width="7"
                    height="7"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle cx="3.5" cy="3.5" r="1.3" fill="#62666a" />
                  </pattern>
                </defs>
                <path
                  d={indiaOutline}
                  fill="#1c1f22"
                  stroke="#484d52"
                  strokeWidth=".8"
                />
                <path d={indiaOutline} fill="url(#map-dots)" />
                {regions
                  .filter((region) => region.id !== selected.id)
                  .map((region) => (
                    <line
                      className="map-route"
                      key={region.id}
                      x1={(selected.lon - 66) * 16}
                      y1={(37 - selected.lat) * 16}
                      x2={(region.lon - 66) * 16}
                      y2={(37 - region.lat) * 16}
                    />
                  ))}
              </svg>
              {regions.map((region) => (
                <button
                  type="button"
                  className={`map-pin ${region.id === selected.id ? 'selected' : ''}`}
                  key={region.id}
                  style={{
                    left: `${(((region.lon - 66) * 16) / 520) * 100}%`,
                    top: `${(((37 - region.lat) * 16) / 490) * 100}%`,
                  }}
                  aria-label={`Explore ${region.name}, example city ${region.city}`}
                  aria-pressed={selected.id === region.id}
                  onClick={() => setSelected(region)}
                >
                  <span className="pin-dot" />
                  <span className="pin-label">{region.city}</span>
                </button>
              ))}
              <span className="map-water-label">
                ARABIAN
                <br />
                SEA
              </span>
              <span className="map-water-label bay">
                BAY OF
                <br />
                BENGAL
              </span>
            </div>
            <p className="map-disclaimer">
              Illustrative coverage map. City pins are examples, not confirmed
              branches or live vehicle locations.
            </p>
          </div>
          <div className="region-panel">
            <p className="region-prompt">Explore by region</p>
            <fieldset className="region-buttons" aria-label="Select a region">
              {regions.map((region, index) => (
                <button
                  key={region.id}
                  type="button"
                  aria-pressed={selected.id === region.id}
                  className={selected.id === region.id ? 'active' : ''}
                  onClick={() => setSelected(region)}
                >
                  <span className="region-index">0{index + 1}</span>
                  {region.name}
                  <ArrowUpRight size={18} />
                </button>
              ))}
            </fieldset>
            <div
              className="region-detail"
              aria-live="polite"
              aria-atomic="true"
            >
              <MapPin size={20} />
              <h3>{selected.name}</h3>
              <p className="region-cities">{selected.cities}</p>
              <p>{selected.description}</p>
              <Link className="text-link" href="/contact">
                Discuss your route <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
