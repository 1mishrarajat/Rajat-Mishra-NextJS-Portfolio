import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
const blogPosts = [
{
  title: "PHP 8.5: What's New?",
  description:
    "Discover PHP 8.5 features, security updates, performance improvements, and practical fixes for modern web development.",
  image: "/images/php-85.png",
  slug: "/blog/php-85",
},
];

export default function BlogPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#FFF9F4] text-[#211D1A]">
        {/* Full-width Blog Banner */}
        <section className="w-full mt-16 ">
          <img
            src="/images/blog.png"
            alt="Web development blog banner"
            className="block  w-full"
          />
        </section>

        {/* Blog Articles */}
        <section className="container-page mx-auto py-8">
          {/* Section Heading */}
          <div className="mb-8 text-center">
            <p className="inline-flex items-center gap-3 rounded-full border border-[#EAD7D7] bg-[#FFF9F4] px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#514943] shadow-[0_3px_10px_rgba(113,61,70,0.08)]">
              <span className="h-3 w-3 rounded-full bg-emerald-600 shadow-[0_0_0_5px_rgba(16,185,129,0.10)]" />
              Latest Articles
            </p>
          </div>

          {/* Article Cards */}
  <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
  {blogPosts.map((post) => (
    <article
      key={post.title}
      className="group h-full"
    >
      <Link
        href={post.slug}
        aria-label={`Read article: ${post.title}`}
        className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#EAD7D7] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#D6B5B5] hover:shadow-[0_18px_45px_rgba(113,61,70,0.10)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9A454D] focus-visible:ring-offset-4"
      >
        {/* Blog Image */}
        <div className="relative overflow-hidden bg-[#F2E5DA]">
          <img
            src={post.image}
            alt={post.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Blog Content */}
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <h2 className="font-serif text-xl leading-snug text-[#211D1A] transition-colors duration-300 group-hover:text-[#9A454D] sm:text-2xl">
            {post.title}
          </h2>

          <p className="mt-3 flex-1 text-[15px] leading-7 text-[#71665D]">
            {post.description}
          </p>

          {/* Read Article */}
          <div className="mt-5 flex items-center justify-between border-t border-[#F0E4E1] pt-4">
            <span className="text-sm font-semibold text-[#9A454D]">
              Read Article
            </span>

            <span
              aria-hidden="true"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#EAD7D7] text-[#9A454D] transition-all duration-300 group-hover:border-[#9A454D] group-hover:bg-[#9A454D] group-hover:text-white"
            >
              →
            </span>
          </div>
        </div>
      </Link>
    </article>
  ))}
</div>
        </section>
      </main>

      <Footer />
    </>
  );
}  
