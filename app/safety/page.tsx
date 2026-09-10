import { PaperPage } from '@/components/editorial/pages';
import { editionPages } from '@/content/edition-pages';
export const metadata = {
  title: editionPages.safety.title,
  description: editionPages.safety.intro,
};
export default function Page() {
  return <PaperPage page="safety" />;
}
