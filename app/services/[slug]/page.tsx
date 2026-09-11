import type { Metadata } from 'next';
import Link from '@/components/transport/page-link';
import { notFound } from 'next/navigation';
import { serviceGuides } from '@/content/service-guides';
import { ContactBand, PageIntro } from '@/components/transport/site';

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return serviceGuides.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = serviceGuides.find((item) => item.slug === slug);
  return guide
    ? {
        title: guide.title,
        description: guide.summary,
        openGraph: {
          title: guide.title,
          description: guide.summary,
          type: 'website',
        },
      }
    : {};
}
export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const guide = serviceGuides.find((item) => item.slug === slug);
  if (!guide) notFound();
  return (
    <>
      <PageIntro
        eyebrow="TANKER TRANSPORT SERVICES"
        title={guide.title}
        description={guide.summary}
      />
      <section className="section">
        <div className="container service-guide-layout">
          <aside className="service-guide-index">
            <h2>In this guide</h2>
            <Link href="/services">All transport services</Link>
            <a href="#overview">Service overview</a>
            <a href="#planning">Planning the movement</a>
            <a href="#sample">Transport brief</a>
            <a href="#service-question">Common question</a>
            <Link href="/fleet#specifications">Fleet specifications ↗</Link>
          </aside>
          <div className="service-guide-copy">
            <div id="overview">
              <h2>{guide.focus}</h2>
              <p className="lead">{guide.introduction}</p>
              <p>{guide.explanation}</p>
            </div>
            <div id="planning" className="guide-planning">
              <h2>Before a movement is agreed.</h2>
              {guide.considerations.map(([title, body]) => (
                <div key={title}>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              ))}
            </div>
            <article id="sample" className="sample-dossier">
              <h2>{guide.scenario.title}</h2>
              <p className="dossier-route">{guide.scenario.route}</p>
              <p>{guide.scenario.cargo}</p>
              <h3>The requirement</h3>
              <p>{guide.scenario.brief}</p>
              <h3>The proposed approach</h3>
              <p>{guide.scenario.approach}</p>
              <h3>The handover</h3>
              <p>{guide.scenario.handover}</p>
            </article>
            <div id="service-question" className="guide-question">
              <h2>{guide.question}</h2>
              <p>{guide.answer}</p>
              <Link className="text-link" href="/contact">
                Prepare a transport enquiry ↗
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section related-services">
        <div className="container">
          <h2>Explore other tanker services.</h2>
          {serviceGuides
            .filter((item) => item.slug !== slug)
            .map((item) => (
              <Link key={item.slug} href={`/services/${item.slug}`}>
                {item.title}
                <span aria-hidden="true">↗</span>
              </Link>
            ))}
        </div>
      </section>
      <ContactBand />
    </>
  );
}
