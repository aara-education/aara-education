"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const links = [
  { name: "Home", href: "#hero" },
  { name: "Courses", href: "#courses" },
  { name: "Colleges", href: "#colleges" },
  { name: "Compass", href: "#compass" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);

    const element = document.querySelector(id);

    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/85 backdrop-blur-xl shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          {/* Logo */}

          <button
            onClick={() => scrollTo("#hero")}
            className="flex items-center gap-3"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 text-xl font-black text-white shadow-lg">
              A
            </div>

            <div className="text-left">
              <p className="text-xl font-black tracking-tight">
                Aara Education
              </p>

              <p className="-mt-1 text-xs text-slate-500">
                Your Future Starts Here
              </p>
            </div>
          </button>

          {/* Desktop */}

          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className="font-medium text-slate-600 transition hover:text-emerald-600"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* CTA */}

          <div className="hidden lg:block">
            <button
              onClick={() => scrollTo("#compass")}
              className="flex items-center gap-2 rounded-2xl bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:scale-105 hover:bg-emerald-700"
            >
              Start Compass
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Mobile */}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}

      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-24 lg:hidden">

          <div className="flex flex-col px-8">

            {links.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className="border-b py-5 text-left text-lg"
              >
                {link.name}
              </button>
            ))}

            <button
              onClick={() => scrollTo("#compass")}
              className="mt-8 rounded-2xl bg-emerald-600 py-4 font-semibold text-white"
            >
              Start Compass
            </button>

          </div>

        </div>
      )}
    </>
  );
}