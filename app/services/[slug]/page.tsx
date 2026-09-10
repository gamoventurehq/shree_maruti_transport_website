import { notFound } from 'next/navigation';
import { EliteService } from '@/components/elite/pages';
import { serviceGuides } from '@/content/service-guides';
export const dynamicParams = false;
export function generateStaticParams() {
  return serviceGuides.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = serviceGuides.find((item) => item.slug === slug);
  return { title: guide?.title, description: guide?.summary };
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!serviceGuides.some((item) => item.slug === slug)) notFound();
  return <EliteService slug={slug} />;
}
