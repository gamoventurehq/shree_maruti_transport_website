'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Pause, Play } from 'lucide-react';
import { FleetVisual } from './site';

export function Hero() {
  const [paused, setPaused] = useState(false);
  return (
    <section
      className={`hero dark-section ${paused ? 'motion-paused' : ''}`}
      aria-labelledby="hero-title"
    >
      <FleetVisual panel="single" className="hero-fleet" priority />
      <div className="hero-shade" />
      <div className="container hero-content">
        <p className="eyebrow">CHEMICAL & LIQUID TRANSPORTATION</p>
        <h1 id="hero-title">
          Moving industry.
          <br />
          Since 2001<span>.</span>
        </h1>
        <p>
          Shree Maruti Transport Services. An owned fleet of 50+ trucks,
          carrying your business across India.
        </p>
        <div className="hero-actions">
          <Link href="/services" className="button button-primary">
            Explore our services
            <ArrowUpRight size={19} />
          </Link>
          <Link href="/fleet" className="hero-secondary">
            Meet the fleet
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
      <div className="hero-caption">
        <span>SHREE MARUTI TRANSPORT SERVICES</span>
        <span>PAN-INDIA OPERATIONS</span>
      </div>
      <button
        type="button"
        className="motion-toggle"
        onClick={() => setPaused(!paused)}
        aria-label={
          paused ? 'Play background motion' : 'Pause background motion'
        }
      >
        {paused ? <Play size={14} /> : <Pause size={14} />}
      </button>
    </section>
  );
}
