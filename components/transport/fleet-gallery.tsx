'use client';

import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { FleetVisual, type FleetPanel } from './site';

const views: { panel: FleetPanel; label: string }[] = [
  { panel: 'single', label: 'Chemical tanker' },
  { panel: 'lineup', label: 'The tanker fleet' },
  { panel: 'road', label: 'On the road' },
  { panel: 'white', label: 'Fleet lineup' },
];

export function FleetGallery() {
  const [index, setIndex] = useState(0);
  const selected = views[index];
  return (
    <div className="fleet-gallery">
      <div className="gallery-main">
        <FleetVisual panel={selected.panel} />
        <div className="gallery-caption">
          <div aria-live="polite">
            <span>
              0{index + 1} / 0{views.length}
            </span>
            <h3>{selected.label}</h3>
          </div>
          <div className="gallery-arrows">
            <button
              type="button"
              aria-label="Previous fleet view"
              onClick={() =>
                setIndex((index + views.length - 1) % views.length)
              }
            >
              <ArrowLeft size={20} />
            </button>
            <button
              type="button"
              aria-label="Next fleet view"
              onClick={() => setIndex((index + 1) % views.length)}
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
      <div className="gallery-tabs" aria-label="Choose a fleet view">
        {views.map((view, i) => (
          <button
            key={view.panel}
            type="button"
            aria-pressed={i === index}
            onClick={() => setIndex(i)}
          >
            {view.label}
          </button>
        ))}
      </div>
      <p className="asset-note">
        Client-supplied illustrative fleet imagery. Vehicle specifications are
        confirmed for each requirement.
      </p>
    </div>
  );
}
