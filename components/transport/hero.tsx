import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="hero dark-section" aria-labelledby="hero-title">
      <div className="hero-road-scene">
        <Image
          src="/fleet/tata-highway-hero.png"
          alt="Blue-and-white Tata stainless-steel tanker on an Indian highway"
          fill
          sizes="100vw"
          loading="eager"
        />
      </div>
      <div className="hero-shade" />
      <div className="container hero-content">
        <p className="eyebrow">CHEMICAL & LIQUID TRANSPORTATION</p>
        <h1 id="hero-title">
          Chemical &amp; liquid
          <br />
          tanker transport<span>.</span>
        </h1>
        <p>
          Shree Maruti Transport Services. An owned fleet of 50+ tankers,
          serving India since 2001. Chemical and food-grade liquid movements,
          with 16–35 MT payload options.
        </p>
        <div className="hero-actions">
          <Link href="/services" className="button button-primary">
            Explore our services
            <ArrowUpRight size={19} />
          </Link>
          <Link href="/fleet" className="hero-secondary">
            Meet the fleet
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
      <div className="hero-caption">
        <span>SHREE MARUTI TRANSPORT SERVICES</span>
        <span>PAN-INDIA OPERATIONS</span>
      </div>
    </section>
  );
}
