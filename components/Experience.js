

export default function Experience() {
  return (
<section
  id="experience"
  className="relative overflow-hidden bg-[#f8f5ef] py-12"
>
  {/* Background decoration */}
  <div className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-[#b65c3a]/[0.07] blur-3xl" />
  <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[#d9c6aa]/25 blur-3xl" />

  <div className="container-page relative">
    {/* Section heading */}
    <div className="mb-8">
      <div className="mb-5 flex items-center gap-4">
        <span className="h-px w-10 bg-[#b65c3a]" />
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#b65c3a]">
          05 / Experience
        </p>
      </div>

      <h2 className="display-font text-4xl leading-[1.05] tracking-[-0.045em] text-[#171717] sm:text-5xl lg:text-6xl">
        The journey{" "}
        <span className="font-serif font-medium italic text-[#b65c3a]">
          so far.
        </span>
      </h2>

    </div>

    {/* Experience timeline */}
    <div className="relative">


      <div className="space-y-5 sm:space-y-6">
        {/* Current role */}
        <article className="group relative rounded-2xl border border-[#171717]/[0.08] bg-white/80 p-5 shadow-[0_8px_30px_rgba(50,35,20,0.025)] transition-all duration-300 hover:-translate-y-1 hover:border-[#b65c3a]/30 hover:bg-white hover:shadow-[0_20px_45px_rgba(50,35,20,0.07)] sm:rounded-3xl sm:p-8 lg:p-9">
          <div className="grid gap-7 md:grid-cols-[175px_minmax(0,1fr)] lg:grid-cols-[205px_minmax(0,1fr)] lg:gap-9">
            {/* Date */}
            <div className="relative">
              <span
                aria-hidden="true"
                className="absolute left-0 top-1 hidden h-[15px] w-[15px] rounded-full border-4 border-[#f8f5ef] bg-[#b65c3a] shadow-[0_0_0_1px_rgba(182,92,58,0.25)] md:block"
              />

              <div className="md:pl-7">
              <div className="flex flex-wrap items-center gap-2">
  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#b65c3a]">
    Dec 2024
  </p>
  <span className="text-[#b65c3a]/50">—</span>
  <p className="text-sm font-medium text-[#81786f]">
    Present
  </p>
</div>

                <div className="mt-4 hidden h-px w-12 bg-[#d9cec1] md:block" />
              </div>
            </div>

            {/* Role details */}
            <div className="min-w-0">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <h3 className="display-font text-2xl leading-tight tracking-[-0.035em] text-[#171717] sm:text-3xl">
                    Full Stack Developer
                  </h3>

                  <p className="mt-2 text-sm font-semibold text-[#b65c3a]">
                    Risecore Technologies Pvt. Ltd.
                  </p>

                  <p className="mt-1.5 flex items-center gap-2 text-xs text-[#81786f]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      className="h-4 w-4 shrink-0"
                      aria-hidden="true"
                    >
                      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                      <circle cx="12" cy="10" r="2.5" />
                    </svg>
                    Lucknow, India
                  </p>
                </div>

                <span className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-[#b65c3a]/20 bg-[#b65c3a]/[0.06] px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.13em] text-[#b65c3a]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#b65c3a]" />
                  Current Role
                </span>
              </div>

              {/* Technologies */}
              <div className="mt-4 border-t border-[#171717]/[0.07] pt-4">
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#81786f]">
                  Technologies
                </p>

                <div className="flex flex-wrap gap-2">
                  {[
                    "React.js",
                    "Next.js",
                    "JavaScript",
                    "PHP",
                    "Laravel",
                    "CodeIgniter 4",
                    "MySQL",
                    "WordPress",
                    "Magento 2",
                    "Hyvä",
                    "Tailwind CSS",
                  ].map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-[#171717]/[0.07] bg-[#f8f5ef] px-3 py-1.5 text-[11px] font-medium text-[#514940] transition-colors duration-200 hover:border-[#b65c3a]/30 hover:bg-[#b65c3a]/[0.06] hover:text-[#b65c3a]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Professional training */}
        <article className="group relative rounded-2xl border border-[#171717]/[0.07] bg-white/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#b65c3a]/25 hover:bg-white/80 hover:shadow-[0_16px_40px_rgba(50,35,20,0.05)] sm:rounded-3xl sm:p-8 lg:p-9">
          <div className="grid gap-7 md:grid-cols-[175px_minmax(0,1fr)] lg:grid-cols-[205px_minmax(0,1fr)] lg:gap-9">
            {/* Date */}
            <div className="relative">
              <span
                aria-hidden="true"
                className="absolute left-0 top-1 hidden h-[15px] w-[15px] rounded-full border-4 border-[#f8f5ef] bg-[#c9bbae] shadow-[0_0_0_1px_rgba(0,0,0,0.08)] md:block"
              />

              <div className="md:pl-7">
             <p className="whitespace-nowrap text-xs font-bold uppercase tracking-[0.16em] text-[#81786f]">
  Sept – Nov 2024
</p>

                <div className="mt-4 hidden h-px w-12 bg-[#d9cec1] md:block" />
              </div>
            </div>

            {/* Training details */}
            <div className="min-w-0">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <h3 className="display-font text-2xl leading-tight tracking-[-0.035em] text-[#171717] sm:text-3xl">
                    Professional Training
                  </h3>

                  <p className="mt-2 text-sm font-semibold text-[#b65c3a]">
                    Risecore Technologies Pvt. Ltd.
                  </p>

                  <p className="mt-1.5 flex items-center gap-2 text-xs text-[#81786f]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      className="h-4 w-4 shrink-0"
                      aria-hidden="true"
                    >
                      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                      <circle cx="12" cy="10" r="2.5" />
                    </svg>
                    Lucknow, India
                  </p>
                </div>

                <span className="w-fit shrink-0 rounded-full border border-[#171717]/[0.08] bg-[#f8f5ef] px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.13em] text-[#81786f]">
                  Training
                </span>
              </div>

              {/* Training technologies */}
              <div className="mt-7 border-t border-[#171717]/[0.07] pt-6">
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#81786f]">
                  Core Skills
                </p>

                <div className="flex flex-wrap gap-2">
                  {[
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "PHP",
                    "CodeIgniter 4",
                    "MySQL",
                    "Responsive UI",
                  ].map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-[#171717]/[0.07] bg-white/80 px-3 py-1.5 text-[11px] font-medium text-[#655d55] transition-colors duration-200 hover:border-[#b65c3a]/30 hover:text-[#b65c3a]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</section>
  );
}
