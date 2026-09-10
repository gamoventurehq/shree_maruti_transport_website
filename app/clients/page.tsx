import { ElitePage } from '@/components/elite/pages';
import { editionPages } from '@/content/edition-pages';
export const metadata = {
  title: editionPages.clients.title,
  description: editionPages.clients.intro,
};
export default function Page() {
  return <ElitePage page="clients" />;
}
