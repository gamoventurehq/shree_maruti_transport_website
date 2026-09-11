import Image from 'next/image';
import Link from '@/components/transport/page-link';

export function Hero() {
  return (
    <section className="paper-hero" aria-labelledby="hero-title">
      <Image
        src="/fleet/tanker-front-road.jpg"
        alt="Shree Maruti blue-and-white Tata tanker photographed on the road"
        fill
        sizes="96vw"
        loading="eager"
      />
      <div className="paper-hero-wash" />
      <div className="paper-hero-copy">
        <h1 id="hero-title">
          Careful with your cargo.
          <br />
          Clear about the journey.
        </h1>
        <p>
          Chemical and liquid tanker transport across India.
          <br />
          Shree Maruti Transport Services, since 2011.
        </p>
        <div>
          <Link className="button button-primary" href="/contact">
            Plan a movement ↗
          </Link>
          <Link className="button paper-button-light" href="/services">
            Explore services ↗
          </Link>
        </div>
      </div>
      <div className="paper-hero-foot">
        <span>Based in Bhiwandi. Connected across India.</span>
        <Link href="/fleet">Meet our tanker fleet ↗</Link>
      </div>
    </section>
  );
}
