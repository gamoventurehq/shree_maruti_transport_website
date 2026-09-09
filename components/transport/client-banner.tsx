'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Pause, Play } from 'lucide-react';
import { clientLogos } from '@/content/assets';

export function ClientBanner() {
  const [paused, setPaused] = useState(false);

  return (
    <div className="client-banner" data-paused={paused}>
      <div className="client-banner-window" aria-label="Our clients">
        <div className="client-banner-track">
          {[false, true].map((duplicate) => (
            <div
              className="client-banner-group"
              key={String(duplicate)}
              aria-hidden={duplicate || undefined}
            >
              {clientLogos.map((client) => (
                <div className="client-banner-logo" key={client.src}>
                  <Image
                    src={client.src}
                    alt={duplicate ? '' : client.name}
                    width={client.width}
                    height={client.height}
                    sizes="180px"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="client-banner-controls">
        <button
          type="button"
          className="text-link"
          aria-pressed={paused}
          onClick={() => setPaused(!paused)}
        >
          {paused ? <Play size={14} /> : <Pause size={14} />}
          {paused ? 'Play client banner' : 'Pause client banner'}
        </button>
      </div>
    </div>
  );
}
