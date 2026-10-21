

export default function Approach() {
  return (
<section
  id="approach"
  className="relative overflow-hidden border-y border-[#e8ddd3] bg-[#171717] py-12 text-white"
>
  {/* Decorative Glow */}
  <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#b65c3a]/10 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#b65c3a]/5 blur-3xl" />

  <div className="container-page relative">

    {/* =====================================================
        HEADER
    ===================================================== */}
    <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">

      {/* Left */}
      <div>
        <div className="mb-6 flex items-center gap-4">
          <span className="h-px w-10 bg-[#b65c3a]" />

          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d9825f]">
            02 / Approach
          </p>
        </div>

     <h2 className="display-font max-w-lg text-[50px]  md:text-[55px] leading-[0.95] tracking-[-0.04em]">
  How I turn{" "}
  <span className="font-serif italic font-medium text-[#b65c3a]">
    ideas into experiences.
  </span>
</h2>

        <p className="mt-5 max-w-md text-[15px] text-justify capitalize leading-8 text-white/55 cap">
     Great development starts with understanding the problem. I combine thoughtful UI design, reliable backend architecture, and clean code to build responsive web applications that deliver real value..
        </p>

        {/* Small Philosophy */}

{/* PRINCIPLE + CTA */}
<div className="mt-10 max-w-xl">

  {/* Principle Card */}
  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-5 sm:p-6">

    {/* Accent */}
    <div className="absolute left-0 top-0 h-full w-[2px] bg-[#b65c3a]" />

    <div className="flex items-center gap-4">

      {/* Icon */}
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#b65c3a]/20 bg-[#b65c3a]/10 text-[#d9825f]">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          className="h-5 w-5"
        >
          <path d="M9 18h6M10 22h4" />
          <path d="M8.5 14.5a7 7 0 1 1 7 0c-.9.7-1.5 1.5-1.5 2.5h-4c0-1-.6-1.8-1.5-2.5Z" />
        </svg>
      </div>

      {/* Text */}
      <div>
        <p className="text-[15px] font-semibold text-white">
          Simple Principle
        </p>

        <p className="mt-1 capitalize text-sm leading-6 text-white/45">
          Build with purpose, not complexity.
        </p>
      </div>

    </div>
  </div>


  {/* CTA */}
  <div className="mt-5 flex items-center gap-4">

    <a
      href="/project"
      className="group inline-flex items-center gap-4 rounded-xl bg-[#b65c3a] px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c96d49] hover:shadow-[0_12px_30px_rgba(182,92,58,0.22)]"
    >
      Explore My Work

      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 text-sm transition-transform duration-300 group-hover:translate-x-1">
        ↗
      </span>
    </a>

 

  </div>

</div>


      </div>


      {/* =====================================================
          PROCESS
      ===================================================== */}
      <div className="relative">

 

        <div className="space-y-4">

          {/* STEP 01 */}
          <article className="group relative rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition-all duration-300 hover:border-[#b65c3a]/40 hover:bg-white/[0.055] sm:p-7">
            <div className="flex gap-5 sm:gap-7">

              <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#b65c3a]/40 bg-[#171717] text-xs font-bold text-[#d9825f]">
                01
              </div>

              <div className="flex-1">
                <div className="mb-2 flex flex-wrap items-center gap-3">
                  <h3 className="uppercase font-bold text-white">
                    Understand
                  </h3>

                  <span className="rounded-full border border-white/10 px-3 py-1 text-[12px] font-bold uppercase tracking-[0.16em] text-[#b65c3a]">
                    Discover
                  </span>
                </div>

                <p className="max-w-xl text-sm leading-7 capitalize text-white/50 sm:text-[15px]">
                  I start by understanding business goals, user needs, project requirements, and the problem that needs to be solved.
                </p>
              </div>

              <span className="hidden text-2xl text-white/10 transition-colors group-hover:text-[#b65c3a]/40 sm:block">
                ↗
              </span>
            </div>
          </article>


          {/* STEP 02 */}
          <article className="group relative rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition-all duration-300 hover:border-[#b65c3a]/40 hover:bg-white/[0.055] sm:p-7">
            <div className="flex gap-5 sm:gap-7">

              <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#b65c3a]/40 bg-[#171717] text-xs font-bold text-[#d9825f]">
                02
              </div>

              <div className="flex-1">
                <div className="mb-2 flex flex-wrap items-center gap-3">
                  <h3 className="uppercase font-bold text-white">
                    Design
                  </h3>

                  <span className="rounded-full border border-white/10 px-3 py-1 text-[12px] font-bold uppercase tracking-[0.16em] text-[#b65c3a]">
                    Structure
                  </span>
                </div>

                <p className="max-w-xl text-sm leading-7 capitalize text-white/50 sm:text-[15px]">
                  I create clear layouts, intuitive navigation, and responsive interfaces that are easy to use across devices.
                </p>
              </div>

              <span className="hidden text-2xl text-white/10 transition-colors group-hover:text-[#b65c3a]/40 sm:block">
                ↗
              </span>
            </div>
          </article>


          {/* STEP 03 */}
          <article className="group relative rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition-all duration-300 hover:border-[#b65c3a]/40 hover:bg-white/[0.055] sm:p-7">
            <div className="flex gap-5 sm:gap-7">

              <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#b65c3a]/40 bg-[#171717] text-xs font-bold text-[#d9825f]">
                03
              </div>

              <div className="flex-1">
                <div className="mb-2 flex flex-wrap items-center gap-3">
                  <h3 className=" uppercase font-bold text-white">
                    Develop
                  </h3>

                  <span className="rounded-full border border-white/10 px-3 py-1 text-[12px] font-bold uppercase tracking-[0.16em] text-[#b65c3a]">
                    Build
                  </span>
                </div>

                <p className="max-w-xl text-sm leading-7 capitalize text-white/50 sm:text-[15px]">
                 I turn the approved design into clean, maintainable frontend and backend code, with reliable API integration.
                </p>
              </div>

              <span className="hidden text-2xl text-white/10 transition-colors group-hover:text-[#b65c3a]/40 sm:block">
                ↗
              </span>
            </div>
          </article>


          {/* STEP 04 */}
          <article className="group relative rounded-2xl border border-[#b65c3a]/30 bg-[#b65c3a]/[0.07] p-6 transition-all duration-300 hover:border-[#b65c3a]/60 hover:bg-[#b65c3a]/[0.11] sm:p-7">
            <div className="flex gap-5 sm:gap-7">

              <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#b65c3a] text-xs font-bold text-white shadow-[0_0_25px_rgba(182,92,58,0.25)]">
                04
              </div>

              <div className="flex-1">
                <div className="mb-2 flex flex-wrap items-center gap-3">
                  <h3 className="text-xl uppercase font-bold text-white">
                    Refine
                  </h3>

                  <span className="rounded-full border border-[#b65c3a]/30 px-3 py-1 text-[12px] font-bold uppercase tracking-[0.16em] text-[#d9825f]">
                    Improve
                  </span>
                </div>

                <p className="max-w-xl text-sm leading-7 capitalize text-white/55 sm:text-[15px]">
                 I test functionality across devices, fix issues, optimize performance, and refine the final product.
                </p>
              </div>

              <span className="hidden text-2xl text-[#d9825f]/50 transition-colors group-hover:text-[#d9825f] sm:block">
                ↗
              </span>
            </div>
          </article>

        </div>
      </div>
    </div>




  </div>
</section>
  );
}
