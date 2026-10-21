import { ArrowUpRight, Check, ChevronLeft, ChevronRight, ArrowLeft, ArrowRight, Code2, ExternalLink, Github, Layers3, Mail, Menu, Sparkles, X } from "lucide-react";

const services = [
  {
    no: "01",
    title: "Frontend Development",
    text: "Pixel-conscious, responsive interfaces built with React, Next.js and modern CSS systems.",
    icon: Code2,
  },
  {
    no: "02",
    title: "Backend & APIs",
    text: "Reliable PHP and CodeIgniter applications with REST API integration and database-driven workflows.",
    icon: Layers3,
  },
  {
    no: "03",
    title: "E-commerce & CMS",
    text: "Magento, WordPress and Shopify development with custom themes, storefronts and content systems.",
    icon: Sparkles,
  },
];
export default function Services() {
  return (
<section
  id="services"
  className="relative overflow-hidden bg-[#f8f5ef] py-12"
>
  {/* Decorative background */}
  <div className="pointer-events-none absolute -right-24 top-20 h-72 w-72 rounded-full bg-[#b65c3a]/[0.07] blur-3xl" />
  <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-black/10" />

  <div className="container-page relative">

    {/* Section heading */}
    <div className="mb-12 flex flex-col justify-between gap-7 lg:mb-16 lg:flex-row lg:items-end">

      <div className="max-w-3xl">
        <div className="mb-6 flex items-center gap-4">
          <span className="h-px w-10 bg-[#b65c3a]" />
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#b65c3a]">
            03 / Services
          </p>
        </div>

       <h2 className="display-font text-[28px] leading-tight tracking-[-0.045em] text-[#171717] sm:text-5xl lg:text-6xl">
  What I Bring{" "}
  <span className="font-serif font-medium italic text-[#b65c3a]">
    To Every Project.
  </span>
</h2>
      </div>
    </div>

    {/* Services grid */}
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

      {services.map((service, index) => {
        const Icon = service.icon;

        return (
          <article
            key={service.no}
            className="group relative flex min-h-[320px] flex-col overflow-hidden rounded-2xl border border-[#ded6ca] bg-[#fffdf9] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#b65c3a]/50 hover:shadow-[0_20px_50px_rgba(60,40,25,0.08)] sm:p-8"
          >
            {/* Card top */}
            <div className="flex items-start justify-between">
              <span className="font-serif text-3xl italic text-[#b65c3a]/60">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#e8ddd1] bg-[#f8f0e8] text-[#b65c3a] transition-colors duration-300 group-hover:bg-[#b65c3a] group-hover:text-white">
                <Icon size={22} strokeWidth={1.5} />
              </div>
            </div>

            {/* Service content */}
            <div className="mt-10 flex-1">
              <h3 className="text-xl font-semibold tracking-tight text-[#171717] transition-colors group-hover:text-[#b65c3a] sm:text-2xl">
                {service.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#716b64]">
                {service.text}
              </p>
            </div>

            {/* Card footer */}
            <div className="mt-8 flex items-center justify-between border-t border-[#e8e0d6] pt-5">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8b8176]">
                Explore Service
              </span>

              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#ded6ca] text-[#171717] transition-all duration-300 group-hover:rotate-45 group-hover:border-[#b65c3a] group-hover:bg-[#b65c3a] group-hover:text-white">
                ↗
              </span>
            </div>

            {/* Hover accent */}
            <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#b65c3a] transition-all duration-500 group-hover:w-full" />
          </article>
        );
      })}

    </div>

    {/* Bottom callout */}
    <div className="mt-8 flex flex-col gap-5 rounded-2xl border border-[#ded6ca] bg-[#f0e8dc] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b65c3a]">
          Have a project in mind?
        </p>
        <h3 className="mt-2 font-serif text-[20px] capitalize tracking-tight text-[#171717] sm:text-3xl">
          Let's build something meaningful.
        </h3>
      </div>

      <a
        href="/contact"
        className="inline-flex w-fit items-center gap-4 rounded-full bg-[#171717] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#b65c3a]"
      >
        Start a Conversation
        <span aria-hidden="true">↗</span>
      </a>
    </div>

  </div>
</section>
  );
}
