import Image from 'next/image';
import Link from '@/components/transport/page-link';

export function Hero() {
  return (
    <section className="paper-hero" aria-labelledby="hero-title">
      <Image
        src="/sections/header.png"
        alt="Blue-and-white Tata liquid tanker on the road beside a chemical plant"
        fill
        sizes="(min-width: 1542px) 1480px, 96vw"
        loading="eager"
      />
      <div className="paper-hero-wash" />
      <div className="paper-hero-copy">
        <h1 id="hero-title">
          Moving industry.
          <br />
          Since 2011.
        </h1>
        <p>
          Chemical solvents, food-grade, pharma and other liquid cargo across
          India.
          <br />
          Shree Maruti Transport Service, since 2011.
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
        <span>
          Based in Mumbai, Bhiwandi, Maharashtra. Connected across India.
        </span>
        <Link href="/fleet">Meet our tanker fleet ↗</Link>
      </div>
    </section>
  );
}
