'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Pause, Play, RotateCcw } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function ServiceJourney() {
  const scene = useRef<HTMLDivElement>(null);
  const root = useRef<HTMLElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  const pausedRef = useRef(false);
  const [paused, setPaused] = useState(false);
  const [run, setRun] = useState(0);
  useEffect(() => {
    pausedRef.current = paused;
    const element = scene.current;
    const bounds = element?.getBoundingClientRect();
    const inView =
      bounds && bounds.bottom > 0 && bounds.top < window.innerHeight;
    timeline.current?.paused(paused || document.hidden || !inView);
  }, [paused]);

  useGSAP(
    () => {
      const element = scene.current;
      if (!element) return;
      const media = gsap.matchMedia();
      media.add('(prefers-reduced-motion: no-preference)', () => {
        const tanker =
          element.querySelector<HTMLElement>('.journey-traveller')!;
        const wheels = element.querySelectorAll('.journey-wheel');
        const trail = element.querySelector('.journey-road-trail');
        const steps = root.current!.querySelectorAll('.journey-steps li');
        let inView = false;
        let previousWidth = 0;
        const sync = () =>
          timeline.current?.paused(
            pausedRef.current || !inView || document.hidden,
          );
        const build = () => {
          const width = element.clientWidth;
          if (width === previousWidth) return;
          previousWidth = width;
          const previousProgress = timeline.current?.progress() ?? 0;
          timeline.current?.kill();
          const size = tanker.offsetWidth;
          const wheelDiameter = size * (88 / 588);
          const positions = [
            -size - 4,
            width * 0.18 - size / 2,
            width * 0.5 - size / 2,
            width * 0.82 - size / 2,
            width + 4,
          ];
          const sequence = gsap.timeline({
            repeat: -1,
            paused: true,
            defaults: { ease: 'none' },
          });
          timeline.current = sequence;
          sequence
            .set(tanker, { x: positions[0] })
            .set(wheels, { rotation: 0 })
            .set(trail, { scaleX: 0, opacity: 1 })
            .set(steps, { attr: { 'data-active': 'false' } });
          let rotation = 0;
          for (let i = 1; i < positions.length; i++) {
            const distance = positions[i] - positions[i - 1];
            const duration = distance / (width / 14);
            const ease =
              i === 1 ? 'sine.out' : i === 4 ? 'sine.in' : 'sine.inOut';
            rotation += (distance / (Math.PI * wheelDiameter)) * 360;
            const start = sequence.duration();
            sequence
              .to(tanker, { x: positions[i], duration, ease }, start)
              .to(wheels, { rotation, duration, ease }, start)
              .to(
                trail,
                {
                  scaleX: Math.max(
                    0,
                    Math.min(1, (positions[i] + size * 0.5) / width),
                  ),
                  duration,
                  ease,
                },
                start,
              );
            if (i < 4) {
              sequence.set(steps, { attr: { 'data-active': 'false' } });
              sequence.set(steps[i - 1], { attr: { 'data-active': 'true' } });
              sequence.to({}, { duration: i === 2 ? 1.4 : 0.7 });
            }
          }
          sequence
            .set(steps, { attr: { 'data-active': 'false' } })
            .to(trail, { opacity: 0, duration: 0.8, ease: 'sine.inOut' });
          sequence.progress(previousProgress);
          sync();
        };
        const trigger = ScrollTrigger.create({
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          onToggle: (self) => {
            inView = self.isActive;
            sync();
          },
        });
        inView = trigger.isActive;
        build();
        const observer = new ResizeObserver(build);
        observer.observe(element);
        document.addEventListener('visibilitychange', sync);
        return () => {
          observer.disconnect();
          trigger.kill();
          timeline.current?.kill();
          timeline.current = null;
          document.removeEventListener('visibilitychange', sync);
        };
      });
      return () => media.revert();
    },
    { scope: root, dependencies: [run], revertOnUpdate: true },
  );
  return (
    <section
      ref={root}
      className="section service-journey"
      aria-labelledby="journey-title"
    >
      <div className="container">
        <div className="section-heading">
          <div>
            <h2 id="journey-title">From dispatch to delivery.</h2>
            <p>
              A connected journey for chemical solvents, food-grade, pharma and
              other liquid cargo.
            </p>
          </div>
          <div className="journey-controls">
            <button
              type="button"
              onClick={() => {
                setRun(run + 1);
                setPaused(false);
              }}
            >
              <RotateCcw size={16} /> Replay
            </button>
            <button type="button" onClick={() => setPaused(!paused)}>
              {paused ? <Play size={16} /> : <Pause size={16} />}
              {paused ? 'Play' : 'Pause'}
            </button>
          </div>
        </div>
        <div
          ref={scene}
          className="journey-scene"
          aria-label="A tanker travels from dispatch to a chemical plant for loading, then to the receiving customer"
        >
          <div className="journey-stations" aria-hidden="true">
            <div>
              <JourneyOffice />
            </div>
            <JourneyTree />
            <div className="journey-plant">
              <Image
                src="/journey/chemical-plant-line.jpg"
                width={350}
                height={350}
                alt=""
              />
            </div>
            <JourneyTree />
            <div>
              <JourneyOffice delivery />
            </div>
          </div>
          <div className="journey-road" aria-hidden="true">
            <div className="journey-road-trail" />
          </div>
          <div className="journey-traveller" aria-hidden="true">
            <div className="journey-tanker">
              <svg
                className="journey-tanker-art"
                viewBox="0 0 588 271"
                fill="none"
                stroke="#202830"
                strokeWidth="5"
                strokeLinejoin="round"
              >
                <path d="M26 183H566V225H26Z" fill="#334451" />
                <path
                  d="M67 35H352C427 35 427 185 352 185H67C-8 185-8 35 67 35Z"
                  fill="#f5f7f8"
                />
                <path
                  d="M19 136H400C392 165 376 183 352 183H67C42 183 25 166 19 136Z"
                  fill="#bccbd4"
                  stroke="none"
                />
                <path d="M16 119H406V136H16Z" fill="#d71920" stroke="none" />
                <path
                  d="M83 36V183M329 36V183"
                  stroke="#8599a6"
                  strokeWidth="9"
                />
                <path
                  d="M91 60H311"
                  stroke="white"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
                <path d="M172 35V20H228V35" fill="#6d8391" />
                <path d="M140 20H262M145 20V35M257 20V35" strokeWidth="4" />
                <path d="M425 69H535L574 128V220H425Z" fill="#167eb1" />
                <path d="M425 69V54H519L535 69Z" fill="#f5f7f8" />
                <path d="M445 84H523L550 128H445Z" fill="#bce1ec" />
                <path d="M496 84V128" strokeWidth="4" />
                <path d="M425 157H574V173H425Z" fill="#f5f7f8" stroke="none" />
                <path d="M425 173H574V182H425Z" fill="#d71920" stroke="none" />
                <path d="M442 139H458M556 136H581V116" strokeWidth="5" />
                <path d="M546 189H574V208H546Z" fill="#f8deb0" />
                <path d="M557 211H582V227H557Z" fill="#7a919f" />
                <path d="M275 199H380V237H275Z" fill="#91a6b3" />
                <path
                  d="M310 201V235M345 201V235"
                  stroke="#526975"
                  strokeWidth="4"
                />
                <path d="M24 201H39V213H24Z" fill="#d71920" />
                <g fill="#202830" stroke="#111820">
                  <circle cx="76" cy="225" r="44" />
                  <circle cx="184" cy="225" r="44" />
                  <circle cx="493" cy="225" r="44" />
                </g>
                <path
                  d="M28 215A49 49 0 0 1 124 215M136 215A49 49 0 0 1 232 215M445 215A49 49 0 0 1 541 215"
                  stroke="#526975"
                  strokeWidth="8"
                />
              </svg>
              <span className="journey-wheel wheel-one" />
              <span className="journey-wheel wheel-two" />
              <span className="journey-wheel wheel-three" />
            </div>
          </div>
        </div>
        <ol className="journey-steps">
          <li>
            <h3>Prepare for the movement.</h3>
            <p>
              Confirm the tanker, route, cargo requirements and loading
              appointment before departure.
            </p>
          </li>
          <li>
            <h3>Collect the liquid cargo.</h3>
            <p>
              Coordinate site entry, product documentation and loading
              arrangements with the plant team.
            </p>
          </li>
          <li>
            <h3>Complete the handover.</h3>
            <p>
              Travel to the receiving site, coordinate unloading and complete
              the delivery records.
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
}

function JourneyOffice({ delivery = false }: { delivery?: boolean }) {
  if (delivery) {
    return (
      <svg
        viewBox="0 0 200 150"
        fill="none"
        stroke="#17191b"
        strokeWidth="3"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M4 148H196M20 146V30H116V146M116 55H180V146M16 30V20H120V30M116 55V47H184V55" />
        <path d="M31 20V12H104V20M132 47V39H166V47" />
        <rect x="32" y="41" width="72" height="65" fill="#edf3f5" />
        <path d="M56 41V106M80 41V106M32 62H104M32 84H104" />
        <rect x="130" y="66" width="37" height="53" fill="#edf3f5" />
        <path d="M149 66V119M130 84H167M130 101H167" />
        <path d="M40 146V124H95V146M67 124V146M59 133V138M75 133V138M33 124V116H104V124ZM32 146V142H104V146M123 146V135H175V146" />
        <path d="M129 133V127M140 133V124M151 133V126M163 133V123M9 146V119M6 118H13M190 146V119M187 118H194" />
        <path d="M25 25H111" stroke="var(--red)" strokeWidth="4" />
        <path d="M25 110H111M121 124H176" strokeWidth="2" />
      </svg>
    );
  }
  return (
    <svg
      viewBox="0 0 200 150"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 148H195M18 147V44H119V147M14 44V34H123V44ZM119 76H181V147M115 76L150 60L188 76" />
      <path d="M29 34V24H108V34M25 140H112M119 140H181" />
      {[54, 80].map((y) =>
        [30, 57, 84].map((x) => (
          <g key={`${x}-${y}`}>
            <rect x={x} y={y} width="18" height="16" />
            <path d={`M${x + 9} ${y}v16M${x} ${y + 8}h18`} />
          </g>
        )),
      )}
      <path d="M53 147V113H87V147M70 113V147M49 110H91M65 129V134M75 129V134" />
      <rect x="132" y="94" width="36" height="46" />
      <path d="M150 94V140M132 117H168M135 89H165" />
      <path d="M10 147V122M8 121H13M187 147V122M185 121H190M26 147V137M23 136H30" />
      <path d="M31 27H104" stroke="var(--red)" strokeWidth="3" />
      <path d="M44 147V142H96V147M48 142V138H92V142" />
    </svg>
  );
}

function JourneyTree() {
  return (
    <svg
      className="journey-tree"
      viewBox="0 0 90 140"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M42 138L43 63M50 138L48 61M43 92L25 75M49 104L67 84M44 72L34 55M48 80L62 62M43 114L33 104" />
      <path d="M23 88C8 90 4 76 12 67C1 54 9 39 22 40C17 24 30 17 40 22C43 5 61 5 66 22C81 17 89 32 80 42C94 48 91 66 79 70C86 85 71 97 58 89C47 104 29 100 23 88Z" />
      <path d="M20 49C14 58 21 66 29 63M32 33C27 41 33 47 40 44M53 25C49 33 55 41 63 38M69 49C77 46 82 54 77 61M57 73C62 81 73 79 72 70M26 77C30 84 39 85 42 78M39 58C46 53 52 58 53 65M13 137H76M33 137L28 130M59 137L65 130" />
    </svg>
  );
}
