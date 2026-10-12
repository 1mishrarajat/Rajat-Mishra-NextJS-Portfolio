

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
        <div className="mt-10 grid grid-cols-1 border-y border-[#e5dbd1] sm:grid-cols-3">

          {[
            ["1.9+", "Years Experience"],
            ["15+", "Technologies"],
            ["10+", "Web Projects"],
          ].map(([number, label], index) => (
            <div
              key={label}
              className={`flex items-center gap-4 py-6 sm:justify-center sm:py-7 ${
                index !== 0 ? "border-t border-[#e5dbd1] sm:border-l sm:border-t-0" : ""
              }`}
            >
              {/* Icon */}
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f6e9df] text-[#b65c3a]">
                {index === 0 && (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
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
                    strokeWidth="1.7"
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
                    strokeWidth="1.7"
                    className="h-5 w-5"
                  >
                    <path d="M4 5h16v14H4z" />
                    <path d="M8 9h8M8 13h5" />
                  </svg>
                )}
              </div>

              <div className="flex items-center gap-3 sm:block">
                <div className="display-font text-3xl leading-none text-[#171717] sm:text-4xl">
                  {number}
                </div>

                <div className="mt-2 text-[14px] font-medium capitalize tracking-[0.12em] text-[#81776e]">
                  {label}
                </div>
              </div>
            </div>
          ))}
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
