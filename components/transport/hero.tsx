'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowDownRight, ArrowUpRight, Pause, Play } from 'lucide-react';

export function Hero() {
  const [paused, setPaused] = useState(false);
  return (
    <section className="hero" aria-labelledby="hero-title">
      <Image
        unoptimized
        className="hero-image"
        style={{
          animationPlayState: paused ? 'paused' : 'running',
        }}
        src="/transport-hero.webp"
        alt="Illustrative orange cargo truck on an Indian highway at sunset"
        width={1672}
        height={941}
        fetchPriority="high"
        loading="eager"
      />
      <div className="hero-shade" />
      <div className="hero-content">
        <p className="eyebrow">INDIAN ROADS. NATIONAL REACH.</p>
        <h1 id="hero-title">
          Every mile.
          <br />
          For your business.
        </h1>
        <p className="hero-description">
          150 trucks. Pan-India operations. Road transport that connects your
          business to its next destination.
        </p>
        <a className="button button-light" href="#coverage">
          Explore our reach <ArrowUpRight size={19} />
        </a>
      </div>
      {
        <button
          type="button"
          className="motion-toggle"
          aria-label={
            paused ? 'Play background motion' : 'Pause background motion'
          }
          onClick={() => setPaused(!paused)}
        >
          {paused ? <Play size={15} /> : <Pause size={15} />}
        </button>
      }
      <div className="hero-bottom">
        <span>SHREE MARUTI TRANSPORT</span>
        <span>
          BUILT FOR THE ROAD AHEAD <ArrowDownRight size={17} />
        </span>
      </div>
    </section>
  );
}
