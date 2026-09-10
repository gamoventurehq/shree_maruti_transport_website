import { PaperPage } from '@/components/editorial/pages';
import { editionPages } from '@/content/edition-pages';
export const metadata = {
  title: editionPages.clients.title,
  description: editionPages.clients.intro,
};
export default function Page() {
  return <PaperPage page="clients" />;
}
