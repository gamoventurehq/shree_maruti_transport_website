'use client';

import { useState } from 'react';
import { ArrowUpRight, MapPin } from 'lucide-react';
import Link from 'next/link';
import { regions } from '@/content/business';
import { coverageCities } from '@/content/coverage-cities';
import { indiaOutline } from '@/content/india-map';

export function Coverage() {
  const [selected, setSelected] = useState<(typeof regions)[number]>(
    regions[0],
  );
  const [selectedCity, setSelectedCity] = useState<string>('Ahmedabad');
  function selectRegion(region: (typeof regions)[number]) {
    setSelected(region);
    setSelectedCity(region.city);
  }
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
              <span>50+ TANKERS</span>
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
                {coverageCities.map((city) => (
                  <line
                    className={`map-route ${city.region === selected.id ? 'route-active' : ''}`}
                    key={city.name}
                    x1={(72.88 - 66) * 16}
                    y1={(37 - 19.08) * 16}
                    x2={(city.lon - 66) * 16}
                    y2={(37 - city.lat) * 16}
                  />
                ))}
              </svg>
              {coverageCities.map((city) => (
                <button
                  type="button"
                  key={city.name}
                  className={`map-pin city-pin ${city.name === selectedCity ? 'selected' : ''} ${city.label ? 'city-labelled' : ''} ${city.lon < 78 ? 'label-west' : ''}`}
                  style={{
                    left: `${(((city.lon - 66) * 16) / 520) * 100}%`,
                    top: `${(((37 - city.lat) * 16) / 490) * 100}%`,
                  }}
                  aria-label={`Explore ${city.name}`}
                  aria-pressed={city.name === selectedCity}
                  onClick={() => {
                    const region = regions.find(
                      (item) => item.id === city.region,
                    );
                    if (region) setSelected(region);
                    setSelectedCity(city.name);
                  }}
                >
                  <span className="pin-dot" />
                  <span className="pin-label">{city.name}</span>
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
              Explore major cities across India. Route availability is confirmed
              for each consignment.
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
                  onClick={() => selectRegion(region)}
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
              <p className="region-cities">{selectedCity}</p>
              <div
                className="coverage-city-list"
                aria-label={`Cities in ${selected.name}`}
              >
                {coverageCities
                  .filter((city) => city.region === selected.id)
                  .map((city) => (
                    <button
                      key={city.name}
                      type="button"
                      aria-pressed={city.name === selectedCity}
                      onClick={() => setSelectedCity(city.name)}
                    >
                      {city.name}
                    </button>
                  ))}
              </div>
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
