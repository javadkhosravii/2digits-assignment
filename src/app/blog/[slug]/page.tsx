import Image from 'next/image';
import { notFound } from 'next/navigation';

import SafeHtmlRenderer from '@/Components/SafeHtmlRenderer';
import { fetchBlogBySlug } from '@/server/prepr';

type Props = {
  params: Promise<{ slug: string }>;
};

// Format the creation date
function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function BlogDetail({ params }: Props) {
  const { slug } = await params;
  const blog = await fetchBlogBySlug(slug);

  if (!blog) {
    return notFound();
  }

  // Extract excerpt from content (first text block or first 200 characters)
  const getExcerpt = () => {
    if (blog.content && blog.content.length > 0) {
      const firstTextContent = blog.content.find(
        (item) => item && item.__typename === 'Text' && 'text' in item && item.text,
      );
      if (firstTextContent && 'text' in firstTextContent && firstTextContent.text) {
        return firstTextContent.text.length > 200
          ? `${firstTextContent.text.slice(0, 200)}...`
          : firstTextContent.text;
      }
    }
    return '';
  };

  return (
    <article>
      {/* Thumbnail at the top */}
      {blog.banner_image.url && (
        <div className="relative aspect-[1.9] w-full xl:aspect-[4.2]">
          <Image
            src={blog.banner_image.url}
            alt={blog.title}
            fill
            className="object-cover"
            loading="eager"
            quality={100}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
            priority
          />
        </div>
      )}

      <div className="flex w-full max-w-[1200px] flex-col gap-6 px-8 py-4 sm:gap-8 md:py-[56px] lg:px-24 xl:px-[166px]">
        <div className="flex flex-col gap-3 sm:gap-4">
          {/* Tags above the blog title */}
          {blog.categories.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {blog.categories.map((category) => (
                <span
                  key={category._id || category.body}
                  className="w-fit rounded bg-[#b4b4b6] px-3 py-1 text-xs font-semibold text-black sm:text-sm">
                  {category.body}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="font-roboto text-2xl font-medium leading-tight sm:text-3xl md:text-4xl lg:text-[48px]">
            {blog.title}
          </h1>

          {/* Publication date */}
          {blog._created_on && (
            <p className="font-openSans text-sm text-gray-500 sm:text-base">
              Published on {formatDate(blog._created_on)}
            </p>
          )}
        </div>

        {/* Excerpt */}
        {getExcerpt() !== '' && (
          <p className="font-openSans text-base font-normal italic leading-relaxed text-gray-600 sm:text-lg md:text-xl lg:text-[21px]">
            {getExcerpt()}
          </p>
        )}

        {/* Blog content rendered safely */}
        <div className="flex flex-col gap-6">
          {blog.content && blog.content.length > 0 ? (
            blog.content.flatMap((contentItem, index) => {
              if (!contentItem) return [];

              if (contentItem.__typename === 'Text' && 'html' in contentItem && contentItem.html) {
                return [
                  <SafeHtmlRenderer
                    key={contentItem._id || `text-${index}`}
                    html={contentItem.html}
                  />,
                ];
              }

              if (contentItem.__typename === 'Quote' && 'body' in contentItem && contentItem.body) {
                return [
                  <blockquote
                    key={contentItem._id || `quote-${index}`}
                    className="mb-6 border-l-4 border-gray-300 pl-4 text-lg italic">
                    <p className="font-openSans text-base font-normal leading-relaxed text-black sm:text-lg md:text-xl">
                      &quot;{contentItem.body}&quot;
                    </p>

                    {'author' in contentItem && contentItem.author && (
                      <cite className="mt-2 block text-sm not-italic text-gray-600">
                        — {contentItem.author}
                      </cite>
                    )}
                  </blockquote>,
                ];
              }

              return [];
            })
          ) : (
            <p className="font-openSans text-base italic text-gray-500">
              No content available for this blog post.
            </p>
          )}
        </div>
      </div>
    </article>
  );
}
