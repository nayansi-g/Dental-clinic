import BannerHero from "@/components/BannerHero";
import StructuredData from "@/components/StructuredData";
import BlogArchiveClient from "@/components/client/BlogArchiveClient";
import { blogCategories, blogPosts, blogTags } from "@/lib/blog-data";
import { breadcrumbSchema, buildMetadata } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Dental Blog With Oral Health Tips and Treatment Advice",
  description:
    "Read dental blog articles from Decare Dental Clinic covering oral hygiene, root canal care, emergency dentistry, pediatric dental visits, and smile protection tips.",
  path: "/blog",
  keywords: [
    "dental blog",
    "oral health tips",
    "root canal advice",
    "pediatric dental blog",
    "emergency dentist tips",
  ],
});

export default function BlogPage() {
  return (
    <div className="bg-white">
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />
      <BannerHero heading="Dental Blog" pagename="Blog" />
      <BlogArchiveClient
        posts={blogPosts}
        categories={blogCategories}
        tags={blogTags}
      />
    </div>
  );
}
