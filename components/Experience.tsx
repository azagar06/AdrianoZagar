import { experience } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="border-b border-line bg-paper-dim">
      <div className="mx-auto max-w-content px-6 py-24">
        <SectionHeading index="LOG — 01" title="Experience" />

        <div className="relative pl-10 sm:pl-12">
          <div
            aria-hidden="true"
            className="absolute bottom-2 left-[9px] top-2 w-px bg-line-strong sm:left-[11px]"
          />

          <ol className="flex flex-col gap-14">
            {experience.map((job) => (
              <li key={`${job.company}-${job.start}`} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-10 top-1.5 h-4 w-4 rounded-full border-2 border-signal bg-paper sm:-left-12"
                />

                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-display text-xl font-semibold text-ink">
                    {job.role}{" "}
                    <span className="font-body font-normal text-ink-soft">
                      · {job.company}
                    </span>
                  </h3>
                  <p className="font-mono text-xs tracking-wide text-ink-faint">
                    {job.start} — {job.end} · {job.location}
                  </p>
                </div>

                <ul className="mt-4 flex flex-col gap-2">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="relative pl-4 text-sm leading-relaxed text-ink-soft"
                    >
                      <span className="absolute left-0 top-[0.6em] h-1 w-1 -translate-y-1/2 bg-signal" />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {job.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-line-strong px-2.5 py-1 font-mono text-[10px] tracking-wide text-ink-soft"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
