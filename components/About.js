

export default function About() {
  return (
<section
  id="about"
  className="relative overflow-hidden bg-[#FFF9F4] py-12"
>
  {/* Decorative background */}
  <div className="pointer-events-none absolute left-[8%] top-24 h-40 w-40 rounded-full bg-[#f4e5d7]/60 blur-sm" />

  <div className="pointer-events-none absolute right-[8%] top-20 hidden lg:block">
    <div
      className="h-24 w-24 opacity-40"
      style={{
        backgroundImage:
          "radial-gradient(#b65c3a 1.2px, transparent 1.2px)",
        backgroundSize: "12px 12px",
      }}
    />
  </div>

  <div className="container-page relative">

    {/* Main Layout */}
    <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 xl:gap-24">

      {/* =====================================================
          LEFT — IMAGE AREA
      ===================================================== */}
      <div className="relative mx-auto w-full max-w-[540px] lg:mx-0">

        {/* Decorative circle */}
        <div className="absolute -left-8 -top-10 h-36 w-36 rounded-full bg-[#f3e3d4] sm:h-44 sm:w-44" />

        {/* Dotted decoration */}
        <div
          className="absolute -left-8 bottom-24 hidden h-24 w-24 opacity-40 sm:block"
          style={{
            backgroundImage:
              "radial-gradient(#b65c3a 1.2px, transparent 1.2px)",
            backgroundSize: "12px 12px",
          }}
        />

        {/* Main Image */}
        <div className="relative z-10 overflow-hidden rounded-[28px] border border-black/5 bg-[#eee5dc] shadow-[0_25px_70px_rgba(55,35,20,0.12)]">
          <img
            src="/images/about.png"
            alt="Rajat Mishra working on web development"
            className=" w-full object-contain transition-transform duration-700 hover:scale-[1.03]"
          />
        </div>

     

      
      </div>


      {/* =====================================================
          RIGHT — CONTENT
      ===================================================== */}
      <div>

        {/* Label */}
        <div className="mb-6 flex items-center gap-4">
          <span className="h-px w-12 bg-[#b65c3a]" />

          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#b65c3a]">
            01 / About
          </p>
        </div>

        {/* Heading */}
        <h2 className="display-font leading-[1.2] max-w-3xl  text-[#171717] text-[2rem] md:text-[3.3rem]">
         End-to-End Development.
          <span className="mt-2 block font-serif italic font-medium text-[2.5rem] md:text-[3.5rem] text-[#b65c3a]">
            Built With Purpose.
          </span>
        </h2>

        {/* Description */}
        <p className="mt-4 max-w-2xl text-[16px] md:text-[17px] text-justify  capitalize leading-8 text-[#69635d] sm:leading-9">
          I combine frontend expertise with backend development to build modern, responsive web applications. I focus on clean code, intuitive user experiences, and reliable solutions that solve real-world problems
        </p>


        {/* =================================================
            STATS
        ================================================= */}

<div className="relative mt-4 overflow-hidden rounded-2xl border border-[#eadbd2] bg-gradient-to-br from-[#fffdfb] via-[#fff9f5] to-[#fdf0e9] shadow-[0_12px_35px_rgba(113,61,70,0.06)]">
  <div className="grid grid-cols-1 divide-y divide-[#eadbd2] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
    {[
      ["1.9+", "Years Experience"],
      ["15+", "Technologies"],
      ["10+", "Web Projects"],
    ].map(([number, label], index) => (
      <div
        key={label}
        className="group flex items-center gap-4 px-5 py-6 transition-colors duration-300 hover:bg-white/60 sm:justify-center sm:px-4 sm:py-8 lg:gap-5 lg:px-6"
      >
        {/* Icon */}
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#edd8cf] bg-white text-[#a95743] shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-md">
          {index === 0 && (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              className="h-5 w-5"
            >
              <rect x="3" y="7" width="18" height="13" rx="2" />
              <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            </svg>
          )}

          {index === 1 && (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              className="h-5 w-5"
            >
              <path d="m12 3 8 4-8 4-8-4 8-4Z" />
              <path d="m4 12 8 4 8-4" />
              <path d="m4 17 8 4 8-4" />
            </svg>
          )}

          {index === 2 && (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              className="h-5 w-5"
            >
              <rect x="3" y="4" width="18" height="16" rx="2" />
              <path d="M3 9h18M7 6.5h.01M10 6.5h.01M13 6.5h.01M7 13h10M7 16h6" />
            </svg>
          )}
        </div>

        {/* Number and label */}
        <div className="min-w-0">
          <div className="display-font text-3xl font-semibold leading-none tracking-tight text-[#713d46] sm:text-3xl lg:text-4xl">
            {number}
          </div>

          <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#81736d] sm:text-[10px] lg:text-xs">
            {label}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>




        <div className="mt-7">
          <a href="/about" className="inline-flex items-center gap-2 rounded-full bg-[#171717] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#b65c3a]">
            More about me <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}
