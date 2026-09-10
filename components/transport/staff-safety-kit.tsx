import Image from 'next/image';
import { staffSafetyIllustration } from '@/content/assets';

export function StaffSafetyKit() {
  return (
    <section
      className="section staff-safety"
      id="staff-safety-kit"
      aria-labelledby="staff-safety-title"
    >
      <div className="container staff-safety-layout">
        <figure className="staff-kit-figure">
          <Image
            src={staffSafetyIllustration.src}
            width={staffSafetyIllustration.width}
            height={staffSafetyIllustration.height}
            alt="Illustrated worker wearing a safety helmet, protective eyewear, hearing protection, gloves, reflective workwear, and safety boots, with labelled callouts."
            sizes="(max-width: 1000px) 90vw, 650px"
          />
          <figcaption>
            <span className="staff-kit-caption-label">
              01 / PEOPLE & PROTECTION
            </span>
            Illustrative PPE guide. Equipment is selected for the cargo, task,
            and site conditions.
          </figcaption>
        </figure>
        <div className="staff-safety-copy">
          <p className="eyebrow">OUR PEOPLE. THEIR PROTECTION.</p>
          <h2 id="staff-safety-title">
            Careful handling.
            <br />
            Proper protection.
          </h2>
          <p className="lead">
            Our staff handle cargo with care, follow site precautions, and wear
            protective equipment suited to the work.
          </p>
          <p>
            From loading through unloading, the focus is on the people handling
            the consignment as well as the cargo itself. Protective clothing and
            equipment are part of that preparation.
          </p>
          <ol className="staff-precautions">
            <li>
              <strong>Understand the task.</strong>
              <span>
                Review cargo-handling instructions and the site’s safety
                precautions before work begins.
              </span>
            </li>
            <li>
              <strong>Wear the right equipment.</strong>
              <span>
                Use protective equipment appropriate to the material, activity,
                and working environment.
              </span>
            </li>
            <li>
              <strong>Handle with care.</strong>
              <span>
                Coordinate with the loading or receiving team, and raise any
                unsafe condition before continuing.
              </span>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
