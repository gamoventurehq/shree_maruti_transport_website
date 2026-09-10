import { ElitePage } from '@/components/elite/pages';
import { editionPages } from '@/content/edition-pages';
export const metadata = {
  title: editionPages.services.title,
  description: editionPages.services.intro,
};
export default function Page() {
  return <ElitePage page="services" />;
}
