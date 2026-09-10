import { ElitePage } from '@/components/elite/pages';
import { editionPages } from '@/content/edition-pages';
export const metadata = {
  title: editionPages.about.title,
  description: editionPages.about.intro,
};
export default function Page() {
  return <ElitePage page="about" />;
}
