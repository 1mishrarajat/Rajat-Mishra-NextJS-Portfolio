"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";

const projects = [
  { title: "Journal System", category: "Publication Platform", description: "A publishing platform with reusable interfaces, multiple theme variations, and responsive workflows.", stack: ["React.js", "CodeIgniter 4", "MySQL"], image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1400&q=85", url: "https://default-theme.openjournalcloud.com/", extraLinks: [{ label: "Classic theme", url: "https://classic-theme.openjournalcloud.com/" }] },
  { title: "Car Insurance System", category: "Web Application", description: "A responsive insurance application built around a clear and accessible customer experience.", stack: ["Next.js", "PHP"], image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1400&q=85", url: "https://car-insurance-omega.vercel.app/" },
  { title: "Aldhaif Transport", category: "Business Website", description: "A polished, responsive business website with WordPress theme customization and performance improvements.", stack: ["WordPress", "PHP", "JavaScript"], image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1400&q=85", url: "https://aldhaiftransport.ae/" },
  { title: "Hillside Family Medicine", category: "Healthcare", description: "A healthcare website focused on useful content, accessibility, and a responsive experience across devices.", stack: ["WordPress", "PHP", "JavaScript"], image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=85", url: "https://hillsidefamilymedicine.org/" },
  { title: "Thermoglaze", category: "Business Website", description: "Responsive interface refinements and performance improvements for a stronger browsing experience.", stack: ["WordPress", "PHP", "CSS", "JavaScript"], image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85", url: "https://thermoglaze.ie/" },
  { title: "Paudhshala", category: "E-commerce", description: "A Magento storefront with responsive components, modern product presentation, and utility-first styling.", stack: ["Magento 2", "Hyvä", "Tailwind CSS"], image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1400&q=85", url: "https://paudhshala.com/" },
{
  title: "Web Scraping – Online Store",
  category: "E-commerce",
  description:
    "A responsive e-commerce website built with WordPress and WooCommerce, featuring product listings, an intuitive shopping experience, and an easy-to-use storefront.",
  stack: ["WordPress", "WooCommerce", "PHP"],
  image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1400&q=85",
  url: "https://shop.easycheapwebscraping.com/",
},
  { title: "Home Furniture", category: "E-commerce", description: "A modern Magento storefront implementation with responsive theme customization.", stack: ["Magento 2", "Hyvä", "PHP"], image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=85", url: "https://demo.hyvago.com/hd/" },
  { title: "Diamond King Tools", category: "E-commerce", description: "A customized shopping experience and responsive storefront built with Magento technologies.", stack: ["Magento 2", "Hyvä", "PHP"], image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=1400&q=85", url: "https://diamondkingtools.com/" },
  { title: "InvoiceScheduler", category: "Web Application", description: "An invoice management and scheduling platform with PDF generation, email automation, API integration, and responsive dashboard workflows.", stack: ["PHP", "MySQL", "REST API", "PDF Generation"], image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=85", url: "https://invoicescheduler.com/" },
  { title: "Vdesis Events", category: "Events Website", description: "An events website that presents event information and details through a responsive web experience.", stack: ["Symfony", "PHP", "MySQL", "JavaScript"], image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=85", url: "https://events.vdesis.com/" },
  {
  title: "School – Education Platform",
  category: "Freelance",
  description:  
    "An educational platform designed to provide a user-friendly learning experience with a clean, responsive interface.",
  stack: ["WordPress", "PHP", "CSS", "JavaScript"], 
image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=85",
  url: "https://devschool.infinityfreeapp.com/",
},
{
  title: "Online Journal  Platform",
  category: "Ojs Development",
  description:
    "An academic journal publishing platform built using Open Journal Systems (OJS), designed to manage scholarly publications, journal submissions, editorial workflows, and research articles.",
  stack: ["OJS", "PHP", "MySQL"],
image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1400&q=85",
  url: "https://clprj.com/journal",
},
];
export default function Projects() {
  const [projectIndex, setProjectIndex] = useState(0);
  const nextProject = () => setProjectIndex((current) => (current + 1) % projects.length);
  const previousProject = () => setProjectIndex((current) => (current - 1 + projects.length) % projects.length);
  const project = projects[projectIndex];
  return (
<section
  id="projects"
  className="relative overflow-hidden bg-[#171717] py-12 text-white"
>
  {/* Background decoration */}
  <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#b65c3a]/10 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#b65c3a]/5 blur-3xl" />

  <div className="container-page relative">

    {/* Section header */}
    <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between lg:mb-14">
      <div className="max-w-3xl">
        <div className="mb-5 flex items-center gap-4">
          <span className="h-px w-10 bg-[#b65c3a]" />

          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d98b6d]">
            04 / Selected Work
          </p>
        </div>

        <h2 className="display-font text-[40px] leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-[5rem]">
          Selected Work
          <span className="mt-1 block font-serif font-medium italic text-[#b65c3a]">
            Built with purpose.
          </span>
        </h2>

        <p className="mt-5 max-w-xl text-sm  leading-7 text-white/55 sm:text-base">
          A selection of web applications and digital experiences I've built
          using modern frontend technologies, backend systems, and CMS platforms.
        </p>
      </div>

      {/* Slider controls */}
      <div className="flex items-center gap-3">
        <span className="mr-2 hidden text-xs uppercase tracking-[0.18em] text-white/35 sm:block">
          Explore projects
        </span>

        <button
          type="button"
          aria-label="Previous project"
          onClick={previousProject}
          className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-white/65 transition-all duration-300 hover:border-[#b65c3a] hover:bg-[#b65c3a] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b65c3a]"
        >
          <ArrowLeft size={18} />
        </button>

        <button
          type="button"
          aria-label="Next project"
          onClick={nextProject}
          className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-white/65 transition-all duration-300 hover:border-[#b65c3a] hover:bg-[#b65c3a] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b65c3a]"
        >
          <ArrowRight size={18} />
        </button>
      </div>
    </div>

    {/* Featured project */}
    {projects.length > 0 && (
      <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.035] sm:rounded-[2rem]">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr]">

          {/* Project image */}
          <div className="group relative aspect-[16/11] overflow-hidden bg-[#242424] sm:aspect-[16/10] lg:aspect-auto lg:min-h-[540px]">
            <Image
              key={project.image}
              src={project.image}
              alt={project.title}
              fill
              priority={projectIndex === 0}
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />

            {/* Image overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

            {/* Category badge */}
            <div className="absolute left-5 top-5 sm:left-7 sm:top-7">
              <span className="inline-flex rounded-full border border-white/20 bg-black/30 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-xl sm:text-xs">
                {project.category}
              </span>
            </div>

            {/* Project number */}
            <div className="absolute bottom-5 right-5 sm:bottom-7 sm:right-7">
              <span className="font-serif text-6xl italic leading-none text-white/35 sm:text-7xl">
                {String(projectIndex + 1).padStart(2, "0")}
              </span>
            </div>

            {/* Open live project */}
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title} live website in a new tab`}
              className="absolute bottom-5 left-5 grid h-12 w-12 place-items-center rounded-full bg-white text-[#171717] shadow-xl transition-transform duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b65c3a] sm:bottom-7 sm:left-7"
            >
              <ExternalLink size={18} />
            </a>
          </div>

          {/* Project details */}
          <div className="flex min-w-0 flex-col justify-between p-6 sm:p-9 lg:p-11">

            <div>
              {/* Project metadata */}
              <div className="flex items-center justify-between gap-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d98b6d] sm:text-xs">
                  Featured Project
                </span>

                <span className="shrink-0 text-xs tracking-[0.15em] text-white/40">
                  {String(projectIndex + 1).padStart(2, "0")} /{" "}
                  {String(projects.length).padStart(2, "0")}
                </span>
              </div>

              {/* Project title */}
              <h3 className="display-font mt-6 break-words text-3xl leading-tight tracking-[-0.035em] sm:text-4xl lg:text-5xl">
                {project.title}
              </h3>

              {/* Project description */}
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/60 sm:mt-6 sm:text-[15px] sm:leading-8">
                {project.description}
              </p>

              {/* Technology stack */}
              <div className="mt-7">
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                  Tech Stack
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium text-white/70 transition-colors hover:border-[#b65c3a]/60 hover:text-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Additional project links */}
              {"links" in project &&
                project.links &&
                project.links.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-xs font-medium text-white/65 transition-colors hover:border-[#b65c3a] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b65c3a]"
                      >
                        {link.label}
                        <ArrowUpRight size={13} />
                      </a>
                    ))}
                  </div>
                )}
            </div>

            {/* Project footer */}
            <div className="mt-8 border-t border-white/10 pt-6 sm:mt-10">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex w-fit items-center gap-3 rounded-full bg-[#b65c3a] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c96d49] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d98b6d] focus-visible:ring-offset-2 focus-visible:ring-offset-[#171717]"
                >
                  View  project

                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <ArrowUpRight size={14} />
                  </span>
                </a>

                {/* Project indicators */}
                <div
                  className="flex flex-wrap items-center gap-1.5"
                  aria-label="Choose a project"
                >
                  {projects.map((item, index) => (
                    <button
                      key={item.title}
                      type="button"
                      aria-label={`View ${item.title}`}
                      aria-current={index === projectIndex ? "true" : undefined}
                      onClick={() => setProjectIndex(index)}
                      className={`h-1.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d98b6d] focus-visible:ring-offset-2 focus-visible:ring-offset-[#171717] ${
                        index === projectIndex
                          ? "w-8 bg-[#b65c3a]"
                          : "w-1.5 bg-white/25 hover:bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    )}

    {/* Bottom summary */}
    <div className="hidden mt-7 flex-col gap-3 text-xs leading-6 text-white/40 sm:flex sm:flex-row sm:items-center sm:justify-between">
      <span className ="capitalize tracking-[0.12em]">
        Selected projects across web development, e-commerce, and custom applications.
      </span>
  
      <span className="uppercase tracking-[0.12em]">
        React · Next.js · PHP · Magento · WordPress
      </span>  
    </div>

  </div>
</section>
  );
}
