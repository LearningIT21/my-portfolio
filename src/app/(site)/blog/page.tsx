import BlogGridContainer from "@/components/Blog/BlogGridContainer";
import Breadcrumb from "@/components/Breadcrumb";
import { Blog } from "@/types/blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | AI Tool - Next.js Template for AI Tools",
  description: "This is Blog page for AI Tool",
};

export default async function BlogPage() {
  const posts: Blog[] = [];

  return (
    <>
      <Breadcrumb pageTitle='Blog Grid' />

      <section className='pt-20 pb-17.5 lg:pt-25 lg:pb-22.5 xl:pb-27.5'>
        <div className='mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0'>
          <BlogGridContainer blogs={posts} />
        </div>
      </section>
    </>
  );
}
