import { ArrowUpRight, Check, ChevronLeft, ChevronRight, ArrowLeft, ArrowRight, Code2, ExternalLink, Github, Layers3, Mail, Menu, Sparkles, X } from "lucide-react";


export default function WhyWorkWithMe() {
  return (
<section className="relative overflow-hidden bg-[#b65c3a] py-12 text-white">
  {/* Background decoration */}
  <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border border-white/10" />
  <div className="pointer-events-none absolute -right-12 -top-12 h-56 w-56 rounded-full border border-white/10" />
  <div className="pointer-events-none absolute -bottom-40 -left-40 h-[30rem] w-[30rem] rounded-full bg-black/[0.06]" />

  <div className="container-page relative">
    {/* Section heading */}
    <div className="grid gap-8 lg:grid-cols-[0.65fr_1.8fr] lg:gap-16">
      <div>
        <div className="flex items-center gap-4">
          <span className="h-px w-10 bg-white/60" />
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/75">
            Why work with me?
          </p>
        </div>

        <p className="display-font mt-8 hidden text-[7rem] leading-none tracking-[-0.08em] text-white/15 lg:block">
          06
        </p>
      </div>

      <div>
        <h2 className="display-font capitalize   max-w-4xl text-4xl leading-[1.05] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
          Good design gets attention.
          <span className="mt-1 block font-serif font-medium italic text-[#f0d1bd]">
            Great development makes it work.
          </span>
        </h2>

      </div>
    </div>

    {/* Benefits */}
    <div className="mt-8 border-t border-white/25 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            number: "01",
            title: "Responsive-first",
            text: "Interfaces that adapt beautifully to mobile, tablet, laptop, and desktop screens.",
          },
          {
            number: "02",
            title: "Clean development",
            text: "Reusable components and organized code designed for easier maintenance and growth.",
          },
          {
            number: "03",
            title: "Business-focused",
            text: "Practical UI decisions that support user needs, product goals, and business outcomes.",
          },
          {
            number: "04",
            title: "Seamless API integration",
            text: "Frontend and backend functionality connected to deliver reliable, dynamic applications.",
          },
          {
            number: "05",
            title: "CMS & e-commerce",
            text: "Experience customizing WordPress, Magento, Hyvä themes, and Shopify websites.",
          },
          {
            number: "06",
            title: "Performance-minded",
            text: "Efficient implementations focused on speed, usability, and a smooth user experience.",
          },
        ].map((item) => (
          <article
            key={item.number}
            className="group border-b border-white/20 p-5 transition-colors duration-300 hover:bg-white/[0.07] sm:p-7 lg:p-8"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs tracking-[0.16em] text-[#f0d1bd]">
                / {item.number}
              </span>

              <span className="grid h-10 w-10 place-items-center rounded-full border border-white/30 transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-[#b65c3a]">
                <Check size={17} strokeWidth={2} />
              </span>
            </div>

            <h3 className="mt-7 text-lg font-semibold tracking-[-0.02em] sm:text-xl">
              {item.title}
            </h3>

            <p className="mt-3 max-w-sm text-sm leading-7 text-white/70 transition-colors duration-300 group-hover:text-white/90">
              {item.text}
            </p>

            <div className="mt-6 h-px w-8 bg-[#f0d1bd]/70 transition-all duration-300 group-hover:w-16 group-hover:bg-white" />
          </article>
        ))}
      </div>
    </div>

  </div>
</section>
  );
}
