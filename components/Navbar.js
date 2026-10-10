"use client";

import { ArrowUpRight, Check, ChevronLeft, ChevronRight, ArrowLeft, ArrowRight, Code2, ExternalLink, Github, Layers3, Mail, Menu, Sparkles, X } from "lucide-react";
import { useState } from "react";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-black/5 bg-[#f8f5ef]/85 backdrop-blur-xl">
        <div className="container-page flex h-[76px] items-center justify-between">
          <a href="/" className="group flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-[#171717] text-sm font-bold text-white">
              RM
            </span>
            <span className="hidden text-sm font-semibold tracking-tight sm:block">
              Rajat Mishra
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            {["About", "Services", "Projects", "Experience", "Contact"].map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase()}`}
                className="transition-opacity hover:opacity-50"
              >
                {item}
              </a>
            ))}
          </nav>

          <a
            href="/contact"
            className="hidden items-center gap-2 rounded-full bg-[#171717] px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 md:flex"
          >
            Let&apos;s talk <ArrowUpRight size={16} />
          </a>

          <button
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen(!menuOpen)}
            className="grid h-10 w-10 place-items-center rounded-full border border-black/10 md:hidden"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {menuOpen && (  
          <div className="border-t border-black/5 bg-[#f8f5ef] px-5 py-5 md:hidden">
            <nav className="container-page flex flex-col gap-4 text-lg">
              {["About", "Services", "Projects", "Experience", "Contact"].map((item) => (
                <a
                  key={item}
                  onClick={() => setMenuOpen(false)}
                  href={`/${item.toLowerCase()}`}
                  className="border-b border-black/10 pb-3"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>
  );
}
