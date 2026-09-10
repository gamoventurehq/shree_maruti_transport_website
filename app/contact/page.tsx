import { PaperPage } from '@/components/editorial/pages';
import { editionPages } from '@/content/edition-pages';
export const metadata = {
  title: editionPages.contact.title,
  description: editionPages.contact.intro,
};
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ cargo?: string; region?: string }>;
}) {
  const params = await searchParams;
  const cargo =
    typeof params.cargo === 'string' ? params.cargo.slice(0, 200) : '';
  const region =
    typeof params.region === 'string' ? params.region.slice(0, 200) : '';
  return (
    <PaperPage page="contact" initialCargo={cargo} initialDelivery={region} />
  );
}
