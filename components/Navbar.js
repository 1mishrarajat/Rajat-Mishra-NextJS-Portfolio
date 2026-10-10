"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ["About", "Services", "Projects", "Experience", "Contact"];

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-black/5 bg-[#f8f5ef]/90 backdrop-blur-xl">
      <div className="container-page relative flex h-[76px] items-center justify-between">

        {/* Logo */}
        <a href="/" className="group z-10 flex shrink-0 items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-[#171717] text-sm font-bold text-white transition-transform duration-300 group-hover:rotate-6">
            RM
          </span>
          <span className="hidden text-sm font-semibold tracking-tight text-[#171717] sm:block">
            Rajat Mishra
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`/${item.toLowerCase()}`}
              className="transition-colors duration-300 hover:text-[#b65c3a]"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="/contact"
          className="hidden items-center gap-2 rounded-full bg-[#171717] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#b65c3a] md:flex"
        >
          Let's talk
          <ArrowUpRight size={16} />
        </a>

        {/* Centered Animated Badge — Mobile Only */}
        <div className="absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 md:hidden">
          <div className="available-badge group relative inline-flex items-center gap-2.5 whitespace-nowrap rounded-full border border-[#b65c3a]/20 bg-gradient-to-r from-[#fffaf5] via-[#fff4eb] to-[#fffaf5] px-4 py-2.5 shadow-[0_5px_20px_rgba(182,92,58,0.12),inset_0_1px_0_rgba(255,255,255,0.9)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#b65c3a]/40 hover:shadow-[0_8px_28px_rgba(182,92,58,0.20)]">

            {/* Animated status indicator */}
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="absolute inset-0 animate-ping rounded-full bg-emerald-500/50" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-emerald-500/15" />
            </span>

            <span className="text-[15px] font-semibold tracking-[-0.02em] text-[#8f452d]">
              Available for work
            </span>

            {/* Subtle animated shine */}
            <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
              <span className="badge-shine absolute -left-1/2 top-0 h-full w-1/3 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/70 to-transparent" />
            </span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-black/10 text-[#171717] transition-colors duration-300 hover:bg-[#eee5da] md:hidden"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="animate-menu border-t border-black/5 bg-[#f8f5ef]/95 px-5 py-5 backdrop-blur-xl md:hidden">
          <nav aria-label="Mobile navigation" className="container-page flex flex-col gap-4 text-base">
            {navItems.map((item) => (
              <a
                key={item}
                onClick={() => setMenuOpen(false)}
                href={`/${item.toLowerCase()}`}
                className="border-b border-black/10 pb-3 transition-colors duration-300 hover:text-[#b65c3a]"
              >
                {item}
              </a>
            ))}

            <a
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#171717] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#b65c3a]"
            >
              Let's talk <ArrowUpRight size={16} />
            </a>
          </nav>
        </div>
      )}

      {/* Badge & menu animations */}
      <style jsx>{`
        .available-badge {
          animation: badge-float 3.5s ease-in-out infinite;
        }

        .badge-shine {
          animation: badge-shine 4s ease-in-out infinite;
        }

        .animate-menu {
          animation: menu-enter 0.25s ease-out both;
        }

        @keyframes badge-float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }

        @keyframes badge-shine {
          0%, 65%, 100% {
            left: -50%;
          }
          35% {
            left: 130%;
          }
        }

        @keyframes menu-enter {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .available-badge,
          .badge-shine,
          .animate-menu {
            animation: none;
          }
        }
      `}</style>
    </header>
  );
}