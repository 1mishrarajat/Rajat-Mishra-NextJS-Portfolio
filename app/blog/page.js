
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BlogPage() {
  return (
    <>
      <Navbar />

      <main className="relative overflow-hidden bg-[#FBF7F2] pt-[76px] text-[#211D1A]">
        {/* Decorative background */}
        <div className="pointer-events-none absolute -left-20 top-40 h-64 w-64 rounded-full border border-[#EBD1BF]/60" />
        <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full border border-[#EBD1BF]/60" />

        <section className="relative mx-auto grid min-h-[calc(100svh-76px)] max-w-[1440px] items-center gap-8 px-5 py-12 sm:px-8 sm:py-14 lg:grid-cols-2 lg:gap-12 lg:px-12 lg:py-14">
          {/* LEFT CONTENT */}
          <div className="relative z-10 w-full">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#F0D9C9] bg-[#FFF8F1] px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.13em] text-[#B65C3A]">
              <span className="h-2 w-2 rounded-full bg-[#B65C3A]" />
              The Journal · Coming Soon
            </span>

            {/* TWO-LINE HEADING */}
            <h1 className="mt-7 max-w-[680px] font-serif text-[clamp(2.8rem,5.2vw,5rem)] leading-[1.05] tracking-[-0.06em] text-[#211D1A]">
              Something{" "}
              <span className="italic text-[#B65C3A]">
                Amazing
              </span>
              <br />
              <span className="whitespace-nowrap">
                Is Coming Soon.
              </span>
            </h1>

            {/* Decorative divider */}
            <div className="mt-6 flex items-center gap-3 text-[#C78A35]">
              <span className="h-px w-12 bg-current" />
              <span className="text-xl">✦</span>
              <span className="h-px w-12 bg-current" />
            </div>
          </div>

          {/* RIGHT SIDE: YOUR IMAGE */}
          <div className="relative mx-auto w-full max-w-[620px] lg:ml-auto">
            <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-[#F2D3BD] via-[#FFF7EF] to-[#E9C4A8]" />

            <div className="relative overflow-hidden rounded-[1.5rem] border border-[#EAD7C7] bg-[#FBF7F2] p-2 shadow-[0_25px_65px_rgba(78,48,31,0.12)] sm:p-3">
              <Image
                src="/images/Coming-Soon.png"
                alt="Blog coming soon illustration with a laptop, books, coffee, and a creative workspace"
                width={1536}
                height={1024}
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-auto w-full rounded-[1rem] object-contain"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 right-4 rounded-2xl border border-[#EAD7C7] bg-[#FFFCF8] px-4 py-3 shadow-lg sm:right-5 sm:px-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B65C3A]">
                In the making
              </p>
              <p className="mt-1 font-serif text-base text-[#211D1A] sm:text-lg">
                Good things take time.
              </p>
            </div>  
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
