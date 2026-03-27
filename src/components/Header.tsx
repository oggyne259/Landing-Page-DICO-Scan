"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import AppLogo from "@/components/ui/AppLogo";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#comparison", label: "Khác biệt" },
    { href: "#outcomes", label: "Kết quả" },
    { href: "#how-it-works", label: "Cách hoạt động" },
    { href: "#testimonials", label: "Đánh giá" },
    { href: "#ve-dico-scan", label: "Về DICO Scan" },
    { href: "#download", label: "Tải app" },
  ];

  return (
    <nav className={`fixed inset-x-0 top-0 z-[100] transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}>
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div
          className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-300 ${
            scrolled ? "brand-card" : "bg-white/70 border border-white/80 backdrop-blur-sm"
          }`}
        >
          <Link href="/" className="group inline-flex items-center gap-2.5">
            <AppLogo
              src="/assets/images/app_logo.png"
              size={34}
              iconName="QrCodeIcon"
              className="transition-transform duration-300 group-hover:scale-105"
            />
            <span className="font-display text-xl font-extrabold tracking-tight text-primary">
              DICO<span className="text-accent">Scan</span>
            </span>
          </Link>

          <div className="font-sub flex items-center gap-7 text-sm font-semibold text-fg-muted max-[920px]:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative transition-colors duration-200 hover:text-primary"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          <a
            href="#download"
            className="brand-cta inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold shadow-card-lg transition-all duration-300 active:scale-95 max-[920px]:hidden"
          >
            Tải miễn phí
          </a>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-lg transition-colors duration-200 hover:bg-primary/10 md:hidden"
            aria-label="Toggle menu"
          >
            <span className={`h-0.5 w-5 rounded-full bg-primary transition-all duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-5 rounded-full bg-primary transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-5 rounded-full bg-primary transition-all duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>

        {menuOpen && (
          <div className="brand-card mt-2 flex flex-col gap-3 rounded-2xl px-5 py-4 md:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-sub py-1 text-sm font-semibold text-fg-muted transition-colors duration-200 hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="#download"
              onClick={() => setMenuOpen(false)}
              className="brand-cta mt-1 flex items-center justify-center rounded-xl px-5 py-3 text-sm font-bold"
            >
              Tải miễn phí
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
