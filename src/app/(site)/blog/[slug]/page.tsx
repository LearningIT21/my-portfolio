import Breadcrumb from '@/components/Breadcrumb';
import { RelatedArticles } from './_components/related-articles';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(props: Props) {
  const params = await props.params;
  const { slug } = params;

  return {
    title: `Blog Post | AI Tool`,
    description: 'Blog post from AI Tool',
  };
}

export default async function BlogDetails(props: Props) {
  const params = await props.params;
  const { slug } = params;

  return (
    <>
      <Breadcrumb pageTitle='Blog Details' />

      <section className='pt-20 pb-17.5 lg:pt-25 lg:pb-22.5 xl:pb-27.5'>
        <div className='mx-auto w-full max-w-[1170px]'>
          <div className='mx-auto max-w-[870px]'>
            <h1 className='mb-7.5 text-[34px] leading-[45px] font-semibold text-white'>
              Blog Post Not Available
            </h1>
            <p>Blog functionality has been disabled. Sanity CMS has been removed from this project.</p>
          </div>
          <RelatedArticles />
        </div>
      </section>
    </>
  );
}
