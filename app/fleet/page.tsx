import { PaperPage } from '@/components/editorial/pages';
import { editionPages } from '@/content/edition-pages';
export const metadata = {
  title: editionPages.fleet.title,
  description: editionPages.fleet.intro,
};
export default function Page() {
  return <PaperPage page="fleet" />;
}
