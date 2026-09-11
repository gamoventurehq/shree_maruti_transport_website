import Link from '@/components/transport/page-link';
import { serviceGuides } from '@/content/service-guides';

export function SampleBriefs() {
  return (
    <section className="section sample-briefs" id="sample-movements">
      <div className="container">
        <div className="section-heading">
          <div>
            <h2>What a transport brief looks like.</h2>
            <p>
              Three different requirements. The details that shape each
              movement.
            </p>
          </div>
        </div>
        <div className="brief-list">
          {serviceGuides.map((guide) => (
            <article key={guide.slug}>
              <div>
                <span className="brief-cargo">{guide.scenario.cargo}</span>
                <h3>{guide.scenario.route}</h3>
              </div>
              <div>
                <h4>{guide.scenario.title}</h4>
                <p>{guide.scenario.brief}</p>
                <Link className="text-link" href={`/services/${guide.slug}`}>
                  Explore the transport brief <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
