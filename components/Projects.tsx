import Link from "next/link";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="border-b border-line">
      <div className="mx-auto max-w-content px-6 py-24">
        <SectionHeading index="LOG — 02" title="Projects" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const CardTag = project.href ? Link : "div";
            const cardProps = project.href ? { href: project.href } : {};

            return (
              <CardTag
                key={project.title}
                {...(cardProps as any)}
                className={`group flex flex-col justify-between rounded-lg border border-line p-6 transition-colors hover:border-signal ${
                  project.href ? "cursor-pointer" : ""
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-lg font-semibold text-ink">
                      {project.title}
                    </h3>
                    {project.status && (
                      <span className="shrink-0 rounded-full border border-amber px-2.5 py-1 font-mono text-[10px] tracking-wide text-amber">
                        {project.status.toUpperCase()}
                      </span>
                    )}
                    {project.href && (
                      <span
                        aria-hidden="true"
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line-strong text-ink-soft transition-colors group-hover:border-signal group-hover:bg-signal-dim group-hover:text-signal"
                      >
                        <ArrowUpRight size={14} strokeWidth={2} />
                      </span>
                    )}
                  </div>

                  {project.date && (
                    <p className="mt-1 font-mono text-[10px] tracking-wide text-ink-faint">
                      {project.date.toUpperCase()}
                    </p>
                  )}

                  {project.bullets ? (
                    <ul className="mt-3 flex flex-col gap-1.5">
                      {project.bullets.map((point) => (
                        <li
                          key={point}
                          className="relative pl-4 text-sm leading-relaxed text-ink-soft"
                        >
                          <span className="absolute left-0 top-[0.6em] h-1 w-1 -translate-y-1/2 bg-signal" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    project.description && (
                      <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                        {project.description}
                      </p>
                    )
                  )}

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-signal-dim px-2.5 py-1 font-mono text-[10px] tracking-wide text-signal-ink"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {(project.github || project.demo) && (
                  <div className="mt-6 flex items-center gap-4 border-t border-line pt-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 font-mono text-xs tracking-wide text-ink-soft transition-colors hover:text-signal"
                      >
                        <Github size={14} />
                        CODE
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 font-mono text-xs tracking-wide text-ink-soft transition-colors hover:text-signal"
                      >
                        <ExternalLink size={14} />
                        DEMO
                      </a>
                    )}
                  </div>
                )}

                {project.href && (
                  <div className="mt-6 flex items-center gap-1.5 border-t border-line pt-4 font-mono text-xs tracking-wide text-signal">
                    VIEW PROJECT
                    <ArrowUpRight size={13} />
                  </div>
                )}
              </CardTag>
            );
          })}
        </div>
      </div>
    </section>
  );
}
