import { ElitePage } from '@/components/elite/pages';
import { editionPages } from '@/content/edition-pages';
export const metadata = {
  title: editionPages.contact.title,
  description: editionPages.contact.intro,
};
export default function Page() {
  return <ElitePage page="contact" />;
}
