

export default function Footer() {
  return (
<footer className="bg-[#f0e9df] px-5 text-[#171717]">
  <div className="container-page border-t border-[#171717]/10 py-4">
    <div className="flex flex-col gap-[24px] sm:flex-row sm:items-center sm:justify-between">
      {/* Copyright */}
      <div className="text-center sm:text-left">
        <p className="text-sm font-semibold text-[#171717]">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>

      {/* Quick links */}
      <nav
        aria-label="Footer navigation"
        className=" hidden flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-[15px] text-[#655d55] sm:flex"
      >
        <a href="/" className="transition-colors hover:text-[#b65c3a]">
          Home
        </a>
        <a href="/about" className="transition-colors hover:text-[#b65c3a]">
          About
        </a>
        <a href="/project" className="transition-colors hover:text-[#b65c3a]">
          Projects
        </a>
        <a href="/experience" className="transition-colors hover:text-[#b65c3a]">
          Experience
        </a>
        <a href="/contact" className="transition-colors hover:text-[#b65c3a]">
          Contact
        </a>
      </nav>

      {/* Built with */}
      <p className="hidden md:block text-center text-[15px] capitalize text-[#71685f] sm:text-right">
        Designed & built with{" "}
        <span className="font-semibold text-[#b65c3a]">Next.js</span>
        {" "}+{" "}
        <span className="font-semibold text-[#b65c3a]">Tailwind CSS</span>
      </p>
    </div>
  </div>
</footer>
  );
}
