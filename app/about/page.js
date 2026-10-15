import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const stats = [
  { value: "1.9+ ", label: "Years of experience" },
  { value: "10+", label: "Projects worked on" },
  { value: "15+", label: "Technologies explored" },
];

const skillGroups = [
  {
    number: "01",
    title: "Frontend Engineering",
    description:
      "Creating responsive, intuitive interfaces with a focus on visual consistency, usability, and performance.",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Next.js", "Tailwind CSS", "Bootstrap"],
  },
  {
    number: "02",
    title: "Backend & APIs",
    description:
      "Connecting interfaces with reliable application logic, REST APIs, authentication, and database-driven functionality.",
    skills: ["PHP", "CodeIgniter 4", "MySQL", "REST API Integration"],
  },
  {
    number: "03",
    title: "CMS & E-commerce",
    description:
      "Building and customizing content-driven websites and online stores to meet specific business requirements.",
    skills: ["WordPress", "Magento 2", "Hyvä Theme", "Shopify"],
  },
  {
    number: "04",
    title: "Development Workflow",
    description:
      "Using practical development tools to manage code, test integrations, and deliver maintainable web solutions.",
    skills: ["Git", "GitHub", "Postman", "Vercel", "Responsive Design"],
  },
];

const principles = [
  {
    number: "01",
    title: "Purpose before pixels",
    description:
      "I start by understanding the goal of a website or feature, then translate it into a clear and useful user experience.",
  },
  {
    number: "02",
    title: "Quality in every detail",
    description:
      "From responsive layouts to API integration, I focus on the details that make a website feel complete and dependable.",
  },
  {
    number: "03",
    title: "Built to evolve",
    description:
      "I value clean code, maintainable components, and solutions that can grow as project requirements change.",
  },
];

const projects = [
  {
    name: "Journal System",
    type: "Publishing platform",
    description:
      "A journal publishing platform featuring modern and classic themes, built with React.js, CodeIgniter 4, and MySQL.",
    technologies: "React.js · CodeIgniter 4 · MySQL",
    links: [
      {
        label: "Modern theme",
        href: "https://default-theme.openjournalcloud.com/",
      },
      {
        label: "Classic theme",
        href: "https://classic-theme.openjournalcloud.com/",
      },
    ],
  },
  {
    name: "Pharmacy System",
    type: "Web application",
    description:
      "A pharmacy application featuring a Next.js frontend and PHP API integration.",
    technologies: "Next.js · PHP · API Integration",
    links: [
      {
        label: "View website",
        href: "https://pharmacy1-weld.vercel.app/",
      },
    ],
  },
  {
    name: "Rise Commerce",
    type: "E-commerce",
    description:
      "An e-commerce website using Magento 2 and Hyvä theme technologies.",
    technologies: "Magento 2 · Hyvä Theme",
    links: [
      {
        label: "Visit website",
        href: "https://risecommerce.com/",
      },
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-[#FCF8F3] pt-[76px] text-[#20201E]">
        {/* INTRODUCTION */}
<section className="relative overflow-hidden py-8 md:py-16">
  <div className="container-page relative">


    <div className="grid items-center gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20">

      {/* LEFT — PROFILE IMAGE */}
      <div className="relative mx-auto w-full lg:mx-0">
        {/* Decorative frame */}
        <div className="absolute -left-3 -top-3 h-24 w-24 rounded-tl-[28px] border-l border-t border-[#B65C3A]/60 sm:-left-5 sm:-top-5 sm:h-32 sm:w-32" />

        <div className="relative overflow-hidden rounded-[28px] border border-[#E6D8CC] bg-[#F0E5DA] shadow-[0_24px_65px_rgba(60,40,25,0.10)]">
          <img
            src="/images/about.png"
            alt="Rajat Mishra, Full Stack Web Developer"
            className="block h-auto max-h-[570px] w-full object-contain"
          />

          {/* Subtle image overlay */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#241B16]/10 to-transparent" />
        </div>

        {/* Floating experience badge */}
        <div className="absolute -bottom-6 right-3 rounded-2xl border border-[#E9DDD2] bg-[#FCF8F3] p-4 shadow-[0_12px_35px_rgba(40,30,20,0.09)] sm:-right-5 sm:p-5">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F0DFD3]">
              <span className="display-font text-xl text-[#A65A3C]">
                1.9+ 
              </span>  
            </div>
            <div>
              <p className="text-[16px] capitalize font-semibold text-[#20201E]">
                Years of experience
              
              </p>
              <p className="mt-1 text-[16px] capitalize text-[#81766D]">
                Learning. Building. Improving.
              </p>
            </div>
          </div>
        </div>

        {/* Small decorative corner */}
        <div className="absolute -bottom-3 -left-3 -z-10 h-24 w-24 rounded-bl-[28px] border-b border-l border-[#B65C3A]/40 sm:-bottom-5 sm:-left-5 sm:h-32 sm:w-32" />
      </div>

      {/* RIGHT — ABOUT CONTENT */}
      <div className="pt-2 lg:pt-0">
        {/* Availability / role */}
<div className="inline-flex items-center gap-3 rounded-full border border-[#E6D5C8] bg-white/70 px-4 py-2.5 shadow-[0_4px_18px_rgba(70,45,25,0.04)] backdrop-blur-sm transition-all duration-300 hover:border-[#B65C3A]/40 hover:shadow-[0_6px_22px_rgba(182,92,58,0.08)]">
  <span className="relative flex h-2.5 w-2.5 items-center justify-center">
    <span className="absolute h-full w-full animate-ping rounded-full bg-[#B65C3A]/30" />
    <span className="relative h-2 w-2 rounded-full bg-[#B65C3A]" />
  </span>

  <span className="text-[13px] font-semibold tracking-[0.02em] text-[#51443B] sm:text-sm">
    Full Stack Web Developer
  </span>
</div>

        {/* Heading */}
  <h1 className="display-font mt-7 text-[1.9rem] capitalize leading-tight tracking-[-0.045em] sm:text-4xl lg:text-[3rem]">
  I build websites{" "}
  <span className="font-serif font-normal italic text-[#B65C3A]">
    with purpose.
  </span>
</h1>

        {/* Short introduction */}
        <p className="mt-7 max-w-xl md:text-[16px]  text-[15px] capitalize text-justify leading-8 text-[#655D56]  sm:leading-9">
          I’m Rajat Mishra, a Full Stack Web Developer with 1.9+ years
          of professional experience creating responsive websites and
          web applications that combine thoughtful design with reliable
          functionality.
        </p>

        <p className="mt-4 max-w-xl text-justify capitalize text-[15px] leading-7 text-[#81766D] sm:leading-8">
          Working with React.js, Next.js, PHP, CodeIgniter 4, MySQL,
          WordPress, and Magento 2, I bring frontend interfaces and
          backend functionality together to deliver practical digital
          solutions. I care about clean code, intuitive experiences,
          and the small details that make a product feel complete.
        </p>



  
      </div>
    </div>

  </div>
</section>

{/* MY APPROACH */}
<section className="relative overflow-hidden border-y border-[#E9DED4] bg-[#F5EDE5] py-12">
  <div className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-[#E8D2C2]/40 blur-3xl" />

  <div className="container-page relative">
    {/* Section heading */}
    <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-16">
      <div>
        <div className="flex items-center gap-3">
          <span className="h-px w-9 bg-[#B65C3A]" />
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#A65A3C]">
            My approach
          </p>
        </div>

        <h2 className="display-font mt-5 max-w-xl  capitalize text-3xl leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl">
          Good development starts with
          <span className="font-serif font-normal capitalize italic text-[#B65C3A]">
            {" "}the right thinking.
          </span>
        </h2>
      </div>

      <div className="lg:pb-1">
        <p className="max-w-xl text-[15px] capitalize leading-8 text-[#68615B] sm:text-base sm:leading-8">
          I believe a great website is more than a collection of features.
          It should solve a real problem, feel intuitive to use, and work
          reliably across devices. That is the thinking I bring to every
          project, from the first idea to the final implementation.
        </p>
      </div>
    </div>

    {/* Highlight statement */}
    <div className="mt-10 rounded-2xl border border-[#E5D6C9] bg-[#FCF8F3] p-6 sm:mt-12 sm:p-9 lg:p-10">
      <div className="grid gap-5 sm:grid-cols-[auto_1fr] sm:items-start sm:gap-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F0DFD3] text-xl text-[#A65A3C]">
          ✳
        </div>

        <div>
          <p className="display-font text-xl capitalize leading-relaxed sm:text-2xl">
            Thoughtful design. Clean code.{" "}
            <span className="font-serif capitalize italic text-[#B65C3A]">
              Meaningful results.
            </span>
          </p>

          <p className="mt-3 max-w-3xl text-sm capitalize leading-7 text-[#766C64] sm:text-base">
            Whether I am building a responsive interface, connecting an API,
            or customizing an e-commerce platform, my goal is to make every
            part work together as one cohesive digital experience.
          </p>
        </div>
      </div>
    </div>

    {/* Core principles */}
    <div className="mt-5 capitalize  grid gap-4 md:grid-cols-3">
      {[
        {
          number: "01",
          title: "Understand the problem",
          description:
            "Start with clear requirements and focus on what the user actually needs.",
          icon: "◎",
        },
        {
          number: "02",
          title: "Build with intention",
          description:
            "Create responsive interfaces and dependable functionality with maintainable code.",
          icon: "↗",
        },
        {
          number: "03",
          title: "Refine every detail",
          description:
            "Improve usability, consistency, and performance to deliver a polished result.",
          icon: "✳",
        },
      ].map((item) => (
        <article
          key={item.number}
          className="group rounded-2xl border border-[#E6D9CE] bg-white/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#CFA38E] hover:bg-white hover:shadow-[0_16px_40px_rgba(55,35,20,0.06)] sm:p-7"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold tracking-[0.18em] text-[#B65C3A]">
              {item.number}
            </span>

            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F4E8DE] text-xl text-[#A65A3C] transition-colors group-hover:bg-[#B65C3A] group-hover:text-white">
              {item.icon}
            </span>
          </div>

          <h3 className="display-font mt-6 text-xl tracking-tight sm:text-2xl">
            {item.title}
          </h3>

          <p className="mt-3 text-sm leading-7 text-[#766C64]">
            {item.description}
          </p>
        </article>
      ))}
    </div>
  </div>
</section>


{/* SELECTED WORK */}
<section className="relative overflow-hidden py-12">
  <div className="pointer-events-none absolute -right-40 top-32 h-80 w-80 rounded-full bg-[#EEDDD0]/35 blur-3xl" />

  <div className="container-page relative">
    {/* Section heading */}
    <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
      <div className="max-w-2xl">
        <div className="flex items-center gap-3">
          <span className="h-px w-9 bg-[#B65C3A]" />
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#A65A3C]">
            Selected work
          </p>
        </div>

        <h2 className="capitalize display-font mt-5 text-3xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          Ideas into
          <span className=" capitalize font-serif font-normal italic text-[#B65C3A]">
            {" "}real products.
          </span>
        </h2>
      </div>

      <a
        href="/project"
        className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full border border-[#DCCFC3] bg-white/60 px-5 py-3 text-sm font-semibold text-[#292521] transition-all duration-300 hover:border-[#B65C3A] hover:bg-[#B65C3A] hover:text-white"
      >
        Explore all projects
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          ↗
        </span>
      </a>
    </div>

    {/* Project cards */}
    <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <article
          key={project.name}
          className="group relative flex min-w-0 flex-col overflow-hidden rounded-[24px] border border-[#E6D9CE] bg-[#FFFCF8] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#CFA38E] hover:shadow-[0_22px_55px_rgba(55,35,20,0.09)]"
        >
          {/* Visual project header */}
          <div className="relative flex min-h-[175px] flex-col justify-between overflow-hidden border-b border-[#E8DCD1] bg-[#F2E6DB] p-6 sm:p-7">
            <div className="pointer-events-none absolute -right-8 -top-10 h-40 w-40 rounded-full border border-[#B65C3A]/15 transition-transform duration-500 group-hover:scale-125" />

            <div className="pointer-events-none absolute -bottom-16 -right-5 h-48 w-48 rounded-full border border-[#B65C3A]/20" />

            <div className="relative flex items-start justify-between gap-3">
              <span className="rounded-full border border-[#D9C3B2] bg-[#FCF8F3]/80 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#92553D]">
                {project.type}
              </span>

              <span className="display-font text-3xl text-[#B65C3A]/50 transition-colors group-hover:text-[#B65C3A]">
                0{index + 1}
              </span>
            </div>

            <div className="relative mt-8 flex items-end justify-between gap-3">
              <h3 className="display-font max-w-[85%] text-2xl leading-tight tracking-tight text-[#28221E] sm:text-3xl">
                {project.name}
              </h3>

              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#D9C3B2] bg-[#FCF8F3]/70 text-lg text-[#A65A3C] transition-all duration-300 group-hover:border-[#B65C3A] group-hover:bg-[#B65C3A] group-hover:text-white">
                ↗
              </span>
            </div>
          </div>

          {/* Project details */}
          <div className="flex flex-1 flex-col p-6 sm:p-7">
            <p className="text-sm leading-7 text-[#71675F]">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="mt-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#A65A3C]">
                Built with
              </p>

              <p className="mt-2 text-xs leading-6 text-[#766C64]">
                {project.technologies}
              </p>
            </div>

            {/* Project links */}
            <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-[#E9DED4] pt-5 mt-6">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-2 text-sm font-semibold text-[#A65A3C] transition-colors hover:text-[#20201E]"
                >
                  {link.label}
                  <span className="transition-transform duration-200 group-hover/link:translate-x-1 group-hover/link:-translate-y-0.5">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>

  </div>
</section>



      </main>

      <Footer />
    </>
  );
}