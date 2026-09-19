'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './fleet-gallery.module.css';

const views = [
  {
    src: '/sections/fleet.png',
    alt: 'Foreground tankers and staff at Shree Maruti Transport Service',
    overview: true,
  },
  {
    src: '/fleet/tanker-front-cleaned.png',
    alt: 'Front and side view of a blue-and-white Tata liquid tanker beside the road',
  },
  {
    src: '/fleet/clear-tanker-yard.jpg',
    alt: 'Liquid tanker at the yard with its valve box and tank visible',
  },
  {
    src: '/fleet/clear-tanker-rear.jpg',
    alt: 'Rear view of a tanker showing its ladder and reflective markings',
  },
  {
    src: '/fleet/clear-tanker-markings.jpg',
    alt: 'Close view of tanker markings, rear lights and tank body',
  },
];

export function FleetGallery() {
  const [index, setIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const galleryRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    const motionPreference = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    );
    const hoverCapability = window.matchMedia('(hover: hover)');
    const updateMotionPreference = () =>
      setReducedMotion(motionPreference.matches);
    updateMotionPreference();
    motionPreference.addEventListener('change', updateMotionPreference);

    let inView = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
      },
      { threshold: 0.25 },
    );
    observer.observe(gallery);

    const timer = window.setInterval(() => {
      if (
        motionPreference.matches ||
        !inView ||
        document.hidden ||
        (hoverCapability.matches && gallery.matches(':hover')) ||
        gallery.contains(document.activeElement)
      )
        return;
      setIndex((current) => (current + 1) % views.length);
    }, 2000);

    return () => {
      window.clearInterval(timer);
      observer.disconnect();
      motionPreference.removeEventListener('change', updateMotionPreference);
    };
  }, []);

  return (
    <section
      ref={galleryRef}
      className={styles.gallery}
      // Keyboard focus pauses the photographs without adding a visible control.
      // oxlint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex={0}
      aria-label="Fleet photographs. Hover or focus to pause the slideshow."
    >
      {views.map((view, position) => (
        <figure
          key={view.src}
          className={`${styles.slide} ${view.overview ? styles.overview : ''}`}
          data-active={position === index}
          aria-hidden={!reducedMotion && position !== index}
        >
          <div className={styles.imageFrame}>
            <Image
              src={view.src}
              alt={view.alt}
              fill
              sizes="(min-width: 1440px) 1280px, 90vw"
              loading={position < 2 ? 'eager' : 'lazy'}
            />
          </div>
          {view.overview && (
            <figcaption className={styles.title}>Fleet</figcaption>
          )}
        </figure>
      ))}
    </section>
  );
}
