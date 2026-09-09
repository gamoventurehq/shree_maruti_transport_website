import Image from 'next/image';
import { clientLogos } from '@/content/assets';

export function ClientBanner() {
  return (
    <div className="client-banner">
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
    </div>
  );
}
