import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import StructuredData from "@/components/StructuredData";
import { blogPosts, getBlogPost } from "@/lib/blog-data";
import { absoluteUrl, buildMetadata } from "@/lib/site";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }) {
  const post = getBlogPost(params.slug);

  if (!post) {
    return buildMetadata({
      title: "Blog Article",
      description: "Dental blog article",
      path: "/blog",
    });
  }

  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    keywords: [post.category, ...post.tags],
    image: post.image,
  });
}

export default function BlogDetailsPage({ params }) {
  const post = getBlogPost(params.slug);

  if (!post) return notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: [absoluteUrl(post.image)],
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Decare Dental Clinic",
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/Dental-logo.png"),
      },
    },
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
  };

  return (
    <section className="bg-[#f7f7f7] px-4 py-10 sm:px-6 md:px-8 lg:px-10 xl:px-14">
      <StructuredData data={articleSchema} />

      <div className="mx-auto max-w-[1000px]">
        <article className="overflow-hidden rounded-2xl border border-[#e8e8e8] bg-white">
          <Image
            src={post.image}
            alt={post.title}
            width={1200}
            height={600}
            className="h-[260px] w-full object-cover sm:h-[380px]"
            priority
          />

          <div className="px-5 py-8 sm:px-8">
            <p className="text-sm text-[#3563e9]">
              {post.author} • {post.date}
            </p>
            <h1 className="mt-3 text-3xl font-bold leading-[1.2] text-[#0b2a63] sm:text-4xl">
              {post.title}
            </h1>
            <p className="mt-5 text-[15px] leading-[2] text-[#7a7a7a]">
              {post.content}
            </p>

            <Link
              href="/blog"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#3563e9]"
            >
              <ChevronRight className="h-4 w-4 rotate-180" />
              Back to Blog
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
