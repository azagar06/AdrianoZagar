"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "@/data/portfolio";

const links = [
  { href: "/#about", label: "ABOUT" },
  { href: "/#experience", label: "EXPERIENCE" },
  { href: "/#projects", label: "PROJECTS" },
  { href: "/#skills", label: "SKILLS" },
  { href: "/#certifications", label: "CERTIFICATIONS" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-40 w-full border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-6">
        <a
          href="/#top"
          className="font-mono text-sm font-medium tracking-wide text-ink"
        >
          {profile.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
          <span className="text-signal">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs tracking-widest text-ink-soft transition-colors hover:text-signal"
            >
              {link.label}
            </a>
          ))}
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-ink px-4 py-2 font-mono text-xs tracking-widest text-ink transition-colors hover:border-signal hover:text-signal"
          >
            RESUME
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="text-ink md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-line bg-paper px-6 pb-4 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2 font-mono text-xs tracking-widest text-ink-soft hover:text-signal"
            >
              {link.label}
            </a>
          ))}
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 font-mono text-xs tracking-widest text-signal"
          >
            RESUME ↗
          </a>
        </nav>
      )}
    </header>
  );
}
