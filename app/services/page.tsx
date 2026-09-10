import { PaperPage } from '@/components/editorial/pages';
import { editionPages } from '@/content/edition-pages';
export const metadata = {
  title: editionPages.services.title,
  description: editionPages.services.intro,
};
export default function Page() {
  return <PaperPage page="services" />;
}
