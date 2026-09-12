import Link from '@/components/transport/page-link';
import { HeroRoadScene } from './hero-road-scene';

export function Hero() {
  return (
    <section className="paper-hero" aria-labelledby="hero-title">
      <HeroRoadScene />
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
        <span>
          Based in Mumbai, Bhiwandi, Maharashtra. Connected across India.
        </span>
        <Link href="/fleet">Meet our tanker fleet ↗</Link>
      </div>
    </section>
  );
}
