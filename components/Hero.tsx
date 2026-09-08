"use client";

import { useState } from "react";
import { Linkedin, Youtube, Github, FileText } from "lucide-react";
import { profile } from "@/data/portfolio";
import ResumeModal from "./ResumeModal";
import EmailButton from "./EmailButton";

const contacts = [
  { label: "LinkedIn", href: profile.linkedin, icon: Linkedin },
  { label: "GitHub", href: profile.github, icon: Github },
  { label: "YouTube", href: profile.youtube, icon: Youtube },
];

export default function Hero() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-line pt-16"
    >
      <div className="mx-auto max-w-content px-6 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="mb-5 font-mono text-xs tracking-[0.2em] text-signal">
            {profile.title.toUpperCase()} — {profile.location.toUpperCase()}
          </p>

          <h1 className="text-balance font-display text-5xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl">
            {profile.name}
          </h1>

          <p className="mt-6 max-w-xl leading-relaxed text-ink-soft">
            {profile.bio}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => setResumeOpen(true)}
              className="flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-mono text-xs font-medium tracking-widest text-paper transition-colors hover:bg-signal"
            >
              <FileText size={15} />
              VIEW RESUME
            </button>

            <div className="flex items-center gap-2">
              {contacts.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  title={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-line-strong text-ink transition-colors hover:border-signal hover:bg-signal-dim hover:text-signal"
                >
                  <Icon size={18} strokeWidth={1.75} />
                </a>
              ))}
              <EmailButton />
            </div>
          </div>
        </div>
      </div>

      {resumeOpen && <ResumeModal onClose={() => setResumeOpen(false)} />}
    </section>
  );
}
