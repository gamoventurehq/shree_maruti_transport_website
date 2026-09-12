'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';
import { TankerCutout } from './tanker-cutout';
import styles from './hero-road-scene.module.css';

const ROAD_SPEED = 144;
const PLANT_SPEED = 32;
const TIRE_DIAMETER_RATIO = 276 / 1536;

export function HeroRoadScene() {
  const scene = useRef<HTMLDivElement>(null);
  const vehicle = useRef<HTMLDivElement>(null);
  const plant = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const element = scene.current;
    const tanker = vehicle.current;
    const scenery = plant.current;
    if (!element || !tanker || !scenery) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let inView = false;
    const syncPlayback = () => {
      element.dataset.running = String(
        inView && !document.hidden && !reducedMotion.matches,
      );
    };
    const resize = () => {
      const tireDiameter = tanker.clientWidth * TIRE_DIAMETER_RATIO;
      element.style.setProperty(
        '--wheel-duration',
        `${(Math.PI * tireDiameter) / ROAD_SPEED}s`,
      );
      element.style.setProperty(
        '--plant-duration',
        `${scenery.clientWidth / 2 / PLANT_SPEED}s`,
      );
    };

    const intersection = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        syncPlayback();
      },
      { threshold: 0 },
    );
    const dimensions = new ResizeObserver(resize);
    intersection.observe(element);
    dimensions.observe(tanker);
    dimensions.observe(scenery);
    document.addEventListener('visibilitychange', syncPlayback);
    reducedMotion.addEventListener('change', syncPlayback);
    resize();

    return () => {
      intersection.disconnect();
      dimensions.disconnect();
      document.removeEventListener('visibilitychange', syncPlayback);
      reducedMotion.removeEventListener('change', syncPlayback);
    };
  }, []);

  return (
    <div
      className={styles.scene}
      ref={scene}
      data-running="false"
      data-paused={paused}
    >
      <div className={styles.landscape} aria-hidden="true">
        <div className={styles.world}>
          <div className={styles.plant} ref={plant}>
            {[0, 1, 2, 3].map((panel) => (
              <div
                key={panel}
                className={`${styles.plantPanel} ${panel % 2 ? styles.mirrored : ''}`}
              >
                <Image
                  src="/hero/plant-perspective.webp"
                  alt=""
                  width={1774}
                  height={887}
                  sizes="(max-width: 900px) 1320px, 130vw"
                  loading="eager"
                />
              </div>
            ))}
          </div>
          <div className={styles.road}>
            <div className={styles.asphalt} />
            <div className={styles.kerb}>
              <div className={styles.kerbPaint} />
            </div>
            <div className={styles.lane} />
          </div>
        </div>
        <div ref={vehicle} className={styles.vehicle}>
          <svg className={styles.shadow} viewBox="0 0 1536 1024">
            <path d="M123 788C220 783 425 823 675 883L1306 845L1397 892Q1290 982 906 1009Q670 1048 430 941L153 855Z" />
          </svg>
          <TankerCutout
            className={styles.tanker}
            wheelClassName={styles.wheel}
          />
        </div>
        <div className={styles.foregroundShade} />
      </div>
      <button
        className={styles.control}
        type="button"
        aria-label={paused ? 'Play tanker animation' : 'Pause tanker animation'}
        aria-pressed={paused}
        onClick={() => setPaused(!paused)}
      >
        {paused ? <Play size={13} /> : <Pause size={13} />}
        <span>{paused ? 'Play motion' : 'Pause motion'}</span>
      </button>
    </div>
  );
}
