import { ElitePage } from '@/components/elite/pages';
import { editionPages } from '@/content/edition-pages';
export const metadata = {
  title: editionPages.network.title,
  description: editionPages.network.intro,
};
export default function Page() {
  return <ElitePage page="network" />;
}
