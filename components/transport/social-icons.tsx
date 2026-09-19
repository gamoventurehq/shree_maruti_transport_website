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
        { name: 'LinkedIn', icon: 'linkedin' },
        { name: 'Instagram', icon: 'instagram', href: business.instagramUrl },
        { name: 'Facebook', icon: 'facebook' },
      ].map(({ name, icon, href }) => {
        const logo = (
          <Image
            className="social-logo"
            src={`/social/${icon}.svg`}
            width={22}
            height={22}
            alt={href ? '' : name}
          />
        );

        return (
          <li key={icon}>
            {href ? (
              <a
                className="social-icon"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name} (opens in a new tab)`}
                title={name}
              >
                {logo}
              </a>
            ) : (
              <span className="social-icon" title={name}>
                {logo}
              </span>
            )}
          </li>
        );
      })}
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
