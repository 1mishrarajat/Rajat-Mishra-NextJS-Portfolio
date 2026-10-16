import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowUpRight, Sparkles } from "lucide-react";

const projects = [
  { title: "Journal System", category: "Publication Platform", description: "A publishing platform with reusable interfaces, multiple theme variations, and responsive workflows.", stack: ["React.js", "CodeIgniter 4", "MySQL"], image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1400&q=85", url: "https://default-theme.openjournalcloud.com/", extraLinks: [{ label: "Classic theme", url: "https://classic-theme.openjournalcloud.com/" }] },
  { title: "Car Insurance System", category: "Web Application", description: "A responsive insurance application built around a clear and accessible customer experience.", stack: ["Next.js", "PHP"], image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1400&q=85", url: "https://umbrellainsurance.ie/" },
  { title: "Aldhaif Transport", category: "Business Website", description: "A polished, responsive business website with WordPress theme customization and performance improvements.", stack: ["WordPress", "PHP", "JavaScript"], image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1400&q=85", url: "https://aldhaiftransport.ae/" },
  { title: "Hillside Family Medicine", category: "Healthcare", description: "A healthcare website focused on useful content, accessibility, and a responsive experience across devices.", stack: ["WordPress", "PHP", "JavaScript"], image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=85", url: "https://hillsidefamilymedicine.org/" },
  { title: "HF69 Perfumes", category: "E-commerce", description: "A responsive perfume store designed to make product discovery clear and enjoyable.", stack: ["WordPress", "WooCommerce", "PHP"], image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1400&q=85", url: "https://hf69perfume.com/" },
  { title: "Thermoglaze", category: "Business Website", description: "Responsive interface refinements and performance improvements for a stronger browsing experience.", stack: ["WordPress", "PHP", "CSS", "JavaScript"], image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85", url: "https://thermoglaze.ie/" },
  { title: "Paudhshala", category: "E-commerce", description: "A Magento storefront with responsive components, modern product presentation, and utility-first styling.", stack: ["Magento 2", "Hyvä", "Tailwind CSS"], image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1400&q=85", url: "https://paudhshala.com/" },
  { title: "Rise Commerce", category: "E-commerce", description: "Magento storefront customization with responsive layouts and a conversion-focused shopping experience.", stack: ["Magento 2", "Hyvä", "Tailwind CSS"], image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=85", url: "https://risecommerce.com/" },
  { title: "HyväGo", category: "E-commerce", description: "A modern Magento storefront implementation with responsive theme customization.", stack: ["Magento 2", "Hyvä", "PHP"], image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&w=1400&q=85", url: "https://demo.hyvago.com/hd/" },
  { title: "Diamond King Tools", category: "E-commerce", description: "A customized shopping experience and responsive storefront built with Magento technologies.", stack: ["Magento 2", "Hyvä", "PHP"], image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=1400&q=85", url: "https://diamondkingtools.com/" },
  { title: "InvoiceScheduler", category: "Web Application", description: "An invoice management and scheduling platform with PDF generation, email automation, API integration, and responsive dashboard workflows.", stack: ["PHP", "MySQL", "REST API", "PDF Generation"], image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=85", url: "https://invoicescheduler.com/" },
  { title: "Vdesis Events", category: "Events Website", description: "An events website that presents event information and details through a responsive web experience.", stack: ["Symfony", "PHP", "MySQL", "JavaScript"], image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=85", url: "https://events.vdesis.com/" },
];

export default function ProjectPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden bg-[#FCF8F3] pt-[76px] text-[#20201E]">
  
  {/* PROJECTS HERO */}
<section className="relative isolate overflow-hidden border-b border-[#E9DED4] bg-[#F8F0E8] py-8">
  {/* Background */}
  <div className="pointer-events-none absolute -right-24 -top-24 -z-10 h-[420px] w-[420px] rounded-full bg-[#EBD7C7]/50 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-24 left-1/3 -z-10 h-72 w-72 rounded-full bg-white/70 blur-3xl" />

  <div className="container-page relative">
    <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">

      {/* LEFT CONTENT */}
      <div className="min-w-0">
        <div className="flex items-center gap-3">
          <span className="h-px w-9 bg-[#B65C3A]" />
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#A65A3C] sm:text-[11px]">
            A collection of selected work
          </p>
        </div>

        <h1 className="display-font capitalize  mt-7 text-[3.2rem] leading-[1.04] tracking-[-0.05em] sm:text-6xl lg:text-[4.5rem] xl:text-[5rem]">
          Thoughtful work.
          <span className="mt-1 block capitalize font-serif font-normal italic text-[#B65C3A]">
            Useful outcomes.
          </span>
        </h1>

        <p className="mt-6 capitalize max-w-xl text-sm leading-7 text-[#71665D] sm:text-base sm:leading-8">
          Websites, e-commerce experiences, and applications built with
          care for the people who use them and the teams who maintain them.
        </p>

        {/* Categories */}
        <div className="mt-7 capitalize flex flex-wrap gap-2">
          {[
            "Web Applications",
            "E-commerce",
            "Publishing",
            "Custom Development",
          ].map((category, index) => (
            <span
              key={category}
              className={`rounded-full border px-3.5 py-2 text-xs font-medium transition-colors ${
                index === 0
                  ? "border-[#B65C3A] bg-[#B65C3A] text-white"
                  : "border-[#DFCCBC] bg-white/50 text-[#625349] hover:border-[#B65C3A] hover:text-[#A65A3C]"
              }`}
            >
              {category}
            </span>
          ))}
        </div>

      </div>  

      {/* RIGHT VISUAL SHOWCASE */}
      <div className="relative mx-auto w-full max-w-[500px] lg:ml-auto">
        {/* Decorative frame */}
        <div className="absolute inset-5 rounded-[28px] border border-[#DCC7B6]/70 bg-[#EBDACB]/40 rotate-[-5deg]" />

        <div className="pointer-events-none absolute -right-3 -top-5 h-32 w-32 rounded-full border border-[#C99B80]/40 sm:-right-5 sm:-top-7 sm:h-40 sm:w-40" />

        {/* Main preview card */}
        <div className="relative z-10 w-[91%] overflow-hidden rounded-[22px] border border-[#E7D6C8] bg-[#FFFAF5] shadow-[0_24px_65px_rgba(63,42,27,0.12)] transition-transform duration-500 hover:-translate-y-1">
          {/* Browser bar */}
          <div className="flex items-center justify-between border-b border-[#EAE0D7] px-4 py-3 sm:px-5">
            <div className="flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#D7A28D]" />
              <span className="h-2 w-2 rounded-full bg-[#E6CDB9]" />
              <span className="h-2 w-2 rounded-full bg-[#C8D0B9]" />
            </div>

          </div>

          {/* Preview content */}
          <div className=" p-4">
       
            {/* Remote image: no event handlers */}
            <div className="overflow-hidden rounded-xl ">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=85"
                alt="Laptop and workspace for a web development project"
                
              />
            </div>
          </div>
        </div>

      </div>
    </div>


  </div>
</section>


        <section className="py-12">
          <div className="container-page">
            <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div><p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#A65A3C]">The portfolio</p><h2 className="display-font mt-2 text-3xl tracking-tight sm:text-4xl">Projects, made with purpose.</h2></div>
              <p className="text-sm text-[#81766D]">{projects.length} projects · Web, commerce, and applications</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {projects.map((project, index) => (
                <article key={project.title} className="group flex min-w-0 flex-col overflow-hidden rounded-[24px] border border-[#E6D9CE] bg-[#FFFCF8] transition-all duration-300 hover:-translate-y-1 hover:border-[#CFA38E] hover:shadow-[0_22px_55px_rgba(55,35,20,0.09)]">
                  <a href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.title}`} className="relative block aspect-[16/10] overflow-hidden bg-[#EDE1D6]">
                    <Image src={project.image} alt={`${project.title} project preview`} fill sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#241B16]/60 via-transparent to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full border border-white/50 bg-[#FCF8F3]/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#92553D]">{project.category}</span>
                    <span className="absolute bottom-4 right-4 font-serif text-4xl italic text-white/80">{String(index + 1).padStart(2, "0")}</span>
                  </a>
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-3"><h3 className="display-font text-2xl leading-tight tracking-tight">{project.title}</h3><a href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title}`} className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#E6D9CE] text-[#A65A3C] transition-all hover:border-[#B65C3A] hover:bg-[#B65C3A] hover:text-white"><ArrowUpRight size={17} /></a></div>
                    <p className="mt-3 text-sm leading-7 text-[#71675F]">{project.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">{project.stack.map((item) => <span key={item} className="rounded-full border border-[#E9DED4] bg-[#F8F1EA] px-2.5 py-1.5 text-[11px] text-[#766C64]">{item}</span>)}</div>
                    {project.extraLinks?.length > 0 && <div className="mt-4 flex flex-wrap gap-4">{project.extraLinks.map((link) => <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-[#A65A3C] hover:text-[#20201E]">{link.label}</a>)}</div>}
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 border-t border-[#E9DED4] pt-4 text-sm font-semibold text-[#A65A3C] transition-colors hover:text-[#20201E]">View live project<ArrowUpRight size={15} /></a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-[#E9DED4] bg-[#F5EDE5] py-12 sm:py-16">
          <div className="container-page grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div className="max-w-2xl"><div className="flex items-center gap-2 text-[#A65A3C]"><Sparkles size={16} /><p className="text-[11px] font-semibold uppercase tracking-[0.2em]">Have something in mind?</p></div><h2 className="display-font mt-4 text-3xl capitalize leading-tight sm:text-4xl">Let’s make your next idea useful.</h2><p className="mt-3 capitalize text-sm leading-7 text-[#766C64]">I’m open to conversations about thoughtful websites, e-commerce stores, and web applications.</p></div>
            <a href="/contact" className="inline-flex w-fit items-center gap-3 rounded-full bg-[#B65C3A] px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#98482D]">Start a conversation<ArrowUpRight size={16} /></a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}