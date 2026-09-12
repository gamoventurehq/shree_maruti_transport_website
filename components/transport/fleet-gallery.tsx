'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { FleetVisual, type FleetPanel } from './site';

const views: {
  panel: FleetPanel;
  label: string;
  photo?: string;
  alt?: string;
}[] = [
  { panel: 'overview', label: 'Fleet overview' },
  {
    panel: 'single',
    label: 'Tata tanker',
    photo: 'clear-tanker-front',
    alt: 'Blue-and-white Tata tanker parked beside the road',
  },
  {
    panel: 'lineup',
    label: 'Tanker side view',
    photo: 'clear-tanker-side',
    alt: 'Side view of a liquid tanker showing its cab, tank and access ladder',
  },
  {
    panel: 'road',
    label: 'Tanker at the yard',
    photo: 'clear-tanker-yard',
    alt: 'Liquid tanker at the yard with its valve box and tank visible',
  },
  {
    panel: 'rear',
    label: 'Rear access',
    photo: 'clear-tanker-rear',
    alt: 'Rear view of a tanker showing its ladder and reflective markings',
  },
  {
    panel: 'white',
    label: 'Tank markings',
    photo: 'clear-tanker-markings',
    alt: 'Close view of tanker markings, rear lights and tank body',
  },
];

export function FleetGallery() {
  const [index, setIndex] = useState(0);
  const selected = views[index];
  return (
    <div className="fleet-gallery">
      <div className="gallery-main">
        {selected.photo ? (
          <div className="fleet-visual fleet-photo gallery-client-photo">
            <Image
              src={`/fleet/${selected.photo}.jpg`}
              alt={selected.alt ?? selected.label}
              fill
              sizes="90vw"
            />
          </div>
        ) : (
          <FleetVisual panel={selected.panel} />
        )}
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
        Fleet views supplied for Shree Maruti Transport Services. Vehicle
        specifications are confirmed for each requirement.
      </p>
    </div>
  );
}
