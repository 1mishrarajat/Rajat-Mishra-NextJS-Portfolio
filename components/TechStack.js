
const skills = [
  "HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Next.js",
  "Tailwind CSS", "Bootstrap", "PHP", "CodeIgniter 4", "MySQL",
  "WordPress", "Shopify", "Magento 2", "Hyvä", "REST APIs", "Git & GitHub",
];
export default function TechStack() {
  return (
<section
  id="skills"
  className="relative overflow-hidden border-y border-[#e6ddd2] bg-[#fffaf5] py-12"
>
  {/* Decorative background */}
  <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#b65c3a]/[0.05] blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

    {/* Section Header */}
    <div className="mb-10">
      <div>
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-10 bg-[#b65c3a]/60 sm:w-14" />
          <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#b65c3a] sm:text-xs">
            05 / Technology Stack
          </span>
        </div>

        <h2 className="display-font text-4xl leading-tight tracking-[-0.045em] text-[#171717] sm:text-5xl lg:text-6xl">
          Technologies I
          <span className="ml-2 font-serif font-medium italic text-[#b65c3a]">
            work with.
          </span>
        </h2>
      </div>
    </div>

    {/* Technology Categories */}
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {[
        {
          number: "01",
          title: "Frontend Development",
          technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "React.js",
            "Next.js",
            "Tailwind CSS",
            "Bootstrap 5",
          ],
        },
        {
          number: "02",
          title: "Backend Development",
          technologies: [
            "PHP",
            "Laravel",
            "CodeIgniter 4",
          ],
        },
        {
          number: "03",
          title: "CMS & E-Commerce",
          technologies: [
            "WordPress",
            "Magento 2",
            "Hyvä Theme",
          ],
        },
        {
          number: "04",
          title: "Database Management",
          technologies: [
            "MySQL",
          ],
        },
        {
          number: "05",
          title: "Development Tools",
          technologies: [
            "Git",
            "GitHub",
            "Postman",
          ],
        },
        {
          number: "06",
          title: "Hosting & Deployment",
          technologies: [
            "Hostinger",
            "MilesWeb",
          ],
        },
      ].map((item) => (
        <article
          key={item.number}
          className="group relative flex min-h-[220px] flex-col overflow-hidden rounded-2xl border border-[#ded5ca] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#b65c3a]/40 hover:shadow-[0_16px_40px_rgba(40,30,20,0.07)] sm:p-7"
        >
          {/* Top accent */}
          <div className="absolute left-0 top-0 h-1 w-0 bg-[#b65c3a] transition-all duration-500 group-hover:w-full" />

          {/* Card number */}
          <div className="flex items-center justify-between">
            <span className="font-serif text-2xl italic text-[#b65c3a]/70">
              {item.number}
            </span>

            <span
              aria-hidden="true"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#e4dbd1] text-sm text-[#8b8176] transition-all duration-300 group-hover:rotate-45 group-hover:border-[#b65c3a] group-hover:bg-[#b65c3a] group-hover:text-white"
            >
              ↗
            </span>
          </div>

          {/* Category title */}
          <h3 className="mt-5 text-lg font-semibold tracking-tight text-[#171717] sm:text-xl">
            {item.title}
          </h3>

          {/* Technology tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {item.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-[#e5ddd3] bg-[#faf7f2] px-3 py-2 text-sm font-medium text-[#625a52] transition-colors duration-300 group-hover:border-[#d9c4b4]"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Bottom accent */}
          <div className="mt-auto pt-5">
            <div className="h-px w-full bg-[#eee7de]" />
          </div>
        </article>
      ))}
    </div>

  </div>
</section>
  );
}
