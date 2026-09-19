import Image from 'next/image';
import { business } from '@/content/business';

export function GoogleMapsIcon() {
  return (
    <Image
      className="social-logo"
      src="/social/google-maps.svg"
      width={22}
      height={22}
      alt=""
      aria-hidden="true"
    />
  );
}

export function SocialIcons() {
  return (
    <ul className="social-icons" aria-label="Social platforms and location">
      {[
        ['LinkedIn', 'linkedin'],
        ['Instagram', 'instagram'],
        ['Facebook', 'facebook'],
      ].map(([name, icon]) => (
        <li className="social-icon" key={icon} title={name}>
          <Image
            className="social-logo"
            src={`/social/${icon}.svg`}
            width={22}
            height={22}
            alt={name}
          />
        </li>
      ))}
      <li>
        <a
          className="social-icon"
          href={business.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Find our office on Google Maps (opens in a new tab)"
          title="Google Maps"
        >
          <GoogleMapsIcon />
        </a>
      </li>
    </ul>
  );
}
