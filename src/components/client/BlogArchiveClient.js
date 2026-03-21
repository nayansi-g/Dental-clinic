"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  User,
  CalendarDays,
  Play,
  Facebook,
  Twitter,
  Instagram,
  Dribbble,
} from "lucide-react";

function SidebarBox({ title, children }) {
  return (
    <div className="rounded-2xl border border-[#e8e8e8] bg-white p-5">
      <h3 className="relative mb-5 pl-3 text-[15px] font-bold text-[#0b2a63] before:absolute before:left-0 before:top-1/2 before:h-3 before:w-[2px] before:-translate-y-1/2 before:bg-[#3563e9]">
        {title}
      </h3>
      {children}
    </div>
  );
}

function BlogCard({ post }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-[#e8e8e8] bg-white shadow-sm transition hover:shadow-lg">
      <div className="relative">
        <Image
          src={post.image}
          alt={post.title}
          width={900}
          height={520}
          className="h-[220px] w-full object-cover sm:h-[300px] lg:h-[340px]"
        />

        {post.featured && (
          <button
            type="button"
            className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#3563e9] shadow-lg transition hover:scale-105"
            aria-label="Featured dental article"
          >
            <Play className="ml-1 h-5 w-5 fill-current" />
          </button>
        )}
      </div>

      <div className="px-5 pb-6 pt-5 sm:px-6 sm:pb-8">
        <div className="flex flex-wrap items-center gap-4 text-[11px] text-[#8d8d8d] sm:text-[12px]">
          <span className="inline-flex items-center gap-1.5">
            <User className="h-3.5 w-3.5" />
            {post.author}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5" />
            {post.date}
          </span>
        </div>

        <h2 className="mt-4 text-[24px] font-bold leading-[1.25] text-[#0b2a63] sm:text-[28px]">
          <Link href={`/blog/${post.slug}`} className="transition hover:text-[#3563e9]">
            {post.title}
          </Link>
        </h2>

        <p className="mt-3 text-[14px] leading-[1.9] text-[#7a7a7a] sm:text-[15px]">
          {post.excerpt}
        </p>

        <Link
          href={`/blog/${post.slug}`}
          className="mt-5 inline-flex h-11 items-center justify-center rounded-[3px] bg-gradient-to-r from-[#1699e8] to-[#4166e8] px-6 text-[13px] font-semibold uppercase text-white shadow-[0_10px_25px_rgba(65,102,232,0.25)] transition hover:scale-[1.02]"
        >
          Read More
        </Link>
      </div>
    </article>
  );
}

export default function BlogArchiveClient({ posts, categories, tags }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeTag, setActiveTag] = useState("All");

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        activeCategory === "All" || post.category === activeCategory;

      const matchesTag = activeTag === "All" || post.tags.includes(activeTag);

      return matchesSearch && matchesCategory && matchesTag;
    });
  }, [activeCategory, activeTag, posts, searchTerm]);

  const recentPosts = posts.slice(0, 3);

  return (
    <section className="bg-white px-4 py-10 sm:px-6 md:px-8 lg:px-10 xl:px-14">
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_320px] xl:gap-10">
          <div className="space-y-8">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => <BlogCard key={post.id} post={post} />)
            ) : (
              <div className="border border-[#e8e8e8] bg-white px-6 py-14 text-center">
                <h2 className="text-2xl font-bold text-[#0b2a63]">No articles found</h2>
                <p className="mt-3 text-[#7a7a7a]">
                  Try changing the search term, category, or topic filter.
                </p>
              </div>
            )}
          </div>

          <aside className="space-y-8">
            <SidebarBox title="Search">
              <div className="flex overflow-hidden border border-[#e8e8e8]">
                <div className="flex flex-1 items-center bg-[#f8f8f8] px-3">
                  <Search className="mr-2 h-4 w-4 text-[#9a9a9a]" />
                  <input
                    type="text"
                    placeholder="Search dental articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="h-12 w-full bg-transparent text-[13px] outline-none placeholder:text-[#a0a0a0]"
                  />
                </div>
                <button className="min-w-[84px] bg-[#4166e8] px-4 text-[12px] font-semibold text-white">
                  Search
                </button>
              </div>
            </SidebarBox>

            <SidebarBox title="Follow Us">
              <div className="flex flex-wrap gap-2">
                {[
                  { icon: Twitter, label: "Twitter" },
                  { icon: Dribbble, label: "Dribbble" },
                  { icon: Facebook, label: "Facebook" },
                  { icon: Instagram, label: "Instagram" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href="#"
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-[#dcdcdc] text-[#9b9b9b] transition hover:border-[#3563e9] hover:text-[#3563e9]"
                      aria-label={item.label}
                    >
                      <Icon className="h-3.5 w-3.5" />
                    </a>
                  );
                })}
              </div>
            </SidebarBox>

            <SidebarBox title="Categories">
              <div className="space-y-3">
                <button
                  onClick={() => setActiveCategory("All")}
                  className={`flex w-full items-center justify-between border-b border-[#efefef] pb-2 text-left text-[13px] transition ${
                    activeCategory === "All"
                      ? "font-semibold text-[#3563e9]"
                      : "text-[#7a7a7a] hover:text-[#3563e9]"
                  }`}
                >
                  <span>All</span>
                  <span>({posts.length})</span>
                </button>

                {categories.map((category) => {
                  const count = posts.filter((post) => post.category === category).length;

                  return (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`flex w-full items-center justify-between border-b border-[#efefef] pb-2 text-left text-[13px] transition ${
                        activeCategory === category
                          ? "font-semibold text-[#3563e9]"
                          : "text-[#7a7a7a] hover:text-[#3563e9]"
                      }`}
                    >
                      <span>{category}</span>
                      <span>({count})</span>
                    </button>
                  );
                })}
              </div>
            </SidebarBox>

            <SidebarBox title="Recent Posts">
              <div className="space-y-4">
                {recentPosts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="block border-b border-[#efefef] pb-4 last:border-b-0 last:pb-0"
                  >
                    <h3 className="text-[13px] leading-[1.7] text-[#6e6e6e] transition hover:text-[#3563e9]">
                      {post.title}
                    </h3>
                    <p className="mt-1 text-[12px] text-[#9a9a9a]">{post.date}</p>
                  </Link>
                ))}
              </div>
            </SidebarBox>

            <SidebarBox title="Topics">
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setActiveTag("All")}
                  className={`border px-3 py-2 text-[12px] transition ${
                    activeTag === "All"
                      ? "border-[#3563e9] bg-[#3563e9] text-white"
                      : "border-[#dddddd] text-[#7a7a7a] hover:border-[#3563e9] hover:text-[#3563e9]"
                  }`}
                >
                  All
                </button>

                {tags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setActiveTag(tag)}
                    className={`border px-3 py-2 text-[12px] transition ${
                      activeTag === tag
                        ? "border-[#3563e9] bg-[#3563e9] text-white"
                        : "border-[#dddddd] text-[#7a7a7a] hover:border-[#3563e9] hover:text-[#3563e9]"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </SidebarBox>
          </aside>
        </div>
      </div>
    </section>
  );
}
