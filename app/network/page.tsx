import { PaperPage } from '@/components/editorial/pages';
import { editionPages } from '@/content/edition-pages';
export const metadata = {
  title: editionPages.network.title,
  description: editionPages.network.intro,
};
export default function Page() {
  return <PaperPage page="network" />;
}
