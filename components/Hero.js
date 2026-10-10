import Image from "next/image";
import { ArrowUpRight, Check, ChevronLeft, ChevronRight, ArrowLeft, ArrowRight, Code2, ExternalLink, Github, Layers3, Mail, Menu, Sparkles, X } from "lucide-react";


export default function Hero() {
  return (
<section
  id="home"
  className="noise grid-paper relative isolate min-h-screen overflow-hidden bg-[#f8f5ef] pt-28 sm:pt-32 lg:pt-24"
>
  {/* Decorative background */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute -right-32 top-24 -z-10 h-80 w-80 rounded-full bg-[#b65c3a]/10 blur-3xl sm:h-[28rem] sm:w-[28rem]"
  />
  <div
    aria-hidden="true"
    className="pointer-events-none absolute bottom-10 left-0 -z-10 h-64 w-64 rounded-full bg-[#d9c6aa]/25 blur-3xl"
  />

  <div className="container-page relative flex min-h-[calc(100vh-6rem)] flex-col justify-center gap-14 py-12 lg:flex-row lg:items-center lg:gap-12 ">

    {/* LEFT: Hero content */}
    <div className="w-full min-w-0 lg:w-[60%]">
      <div className="reveal-up mb-7 inline-flex items-center gap-2.5 rounded-full border border-[#b65c3a]/20 bg-white/70 px-4 py-2.5 shadow-sm backdrop-blur-md">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-40" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-600" />
        </span>
        <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#49443e] sm:text-xs">
          Available for opportunities
        </span>
      </div>

      <p className="reveal-up mb-5 text-sm font-medium tracking-wide text-[#69655e]">
        Hello, I&apos;m Rajat Mishra <span className="ml-1">✦</span>
      </p>

      <h1 className="display-font reveal-up capitalize max-w-full text-[clamp(3rem,7.1vw,6.8rem)] font-medium leading-[0.94] tracking-[-0.055em]">
        <span className="block whitespace-nowrap">
          I build digital
        </span>
        <span className="mt-1 block whitespace-nowrap italic text-[#b65c3a]">
          Solutions.
        </span>
      </h1>

      <p className="reveal-up mt-7 max-w-xl text-[17px] leading-7 text-[#69655e] text-justify capitalize sm:mt-8 sm:leading-8">
        Full Stack Developer building modern, responsive web applications with intuitive frontend interfaces and reliable backend systems.
      </p>

      {/* Action buttons */}
      <div className="reveal-up mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap">
        <a
          href="#projects"
          className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#171717] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-1 hover:bg-[#b65c3a] hover:shadow-xl"
        >
          Explore my work
          <ArrowUpRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>

        <a
          href="mailto:rajatmishra74150@gmail.com"
          className="inline-flex min-h-14 items-center justify-center gap-2.5 rounded-full border border-black/10 bg-white/60 px-7 py-4 text-sm font-semibold text-[#171717] transition duration-300 hover:-translate-y-1 hover:border-black/20 hover:bg-white"
        >
          <Mail size={17} />
          Let&apos;s connect
        </a>
      </div>

    </div>

    {/* RIGHT: Visual / image */}
    <div className="w-full lg:w-[40%]">
      <div className="relative mx-auto w-full max-w-[390px] lg:max-w-[430px]">

        {/* Decorative outline */}
        <div
          aria-hidden="true"
          className="absolute -right-3 -top-3 h-full w-full rounded-[2rem] border border-[#b65c3a]/25 sm:-right-4 sm:-top-4 sm:rounded-[2.5rem]"
        />

        {/* Location badge */}
        <div className="absolute -left-2 top-7 z-20 rounded-2xl border border-white/70 bg-white/90 px-4 py-3 shadow-xl shadow-black/5 backdrop-blur-xl sm:-left-8 sm:top-10 sm:px-5 sm:py-4">
          <p className="text-[9px] font-bold uppercase tracking-[0.17em] text-[#969087] sm:text-[10px]">
            Based in
          </p>
          <p className="mt-1 text-sm font-semibold text-[#171717]">
            Lucknow, India
          </p>
        </div>

        {/* Main image */}
        <div className="group relative aspect-[4/4.7] overflow-hidden rounded-[1.75rem] bg-[#e5d9c8] shadow-2xl shadow-black/10 sm:rounded-[2.25rem]">
          <Image
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1100&q=85"
            alt="Creative workspace with digital technology"
            fill
            priority
            className="object-cover transition duration-700 group-hover:scale-[1.04]"
            sizes="(max-width: 1024px) 90vw, 430px"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/80 via-[#171717]/5 to-transparent" />

          {/* Image caption */}
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
            <div className="mb-3 flex items-center gap-2">
              <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-md">
                FULL STACK DEVELOPER
              </span>
            </div>

            <p className="max-w-xs text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl">
              Frontend to
              <span className="block text-white/70">
                Backend
              </span>
            </p>
          </div>
        </div>

        {/* Floating experience card */}
        <div className="absolute -bottom-5 right-3 z-20 flex items-center gap-3 rounded-2xl border border-white/70 bg-white/90 p-3.5 shadow-xl shadow-black/10 backdrop-blur-xl sm:-right-6 sm:bottom-8 sm:p-4">
          <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#b65c3a]/10 text-[#b65c3a]">
            <Code2 size={22} />
          </div>
          <div>
            <p className="text-lg font-bold leading-tight text-[#171717]">
              1.9+ years
            </p>
            <p className="mt-1 text-[14px] text-[#b65c3a] font-bold">
              Built to Perform.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

</section>
  );
}
