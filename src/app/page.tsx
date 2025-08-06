import BlogCard from '@/Components/BlogCard';
import Hero from '@/Components/Hero';
import { fetchHomePage, fetchLatestBlogs } from '@/server/prepr';

export default async function Home() {
  const homepage = await fetchHomePage();
  const blogs = await fetchLatestBlogs();

  return (
    <main className="flex w-full flex-col items-center justify-between">
      {homepage?.page_header && (
        <Hero
          title={homepage.page_header.title}
          text={homepage.page_header.text}
          image={homepage.page_header.image}
        />
      )}

      {blogs.length > 0 ? (
        <section className="flex w-full max-w-[1700px] flex-col items-center justify-center gap-[24px] px-8 py-[70px] md:py-[90px] lg:py-[120px] xl:px-[166px]">
          <h1 className="w-full text-start font-roboto text-5xl font-bold sm:text-3xl md:text-4xl">
            The newest blogs
          </h1>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {blogs.map((blog, index) => (
              <BlogCard key={blog._id} blog={blog} index={index} />
            ))}
          </div>
        </section>
      ) : (
        <p className="mt-12 text-center text-gray-600">No blog posts found.</p>
      )}
    </main>
  );
}
