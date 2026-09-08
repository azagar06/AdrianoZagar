import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ProjectDetailData } from "@/data/portfolio";

export default function ProjectDetail({ project }: { project: ProjectDetailData }) {
  return (
    <main className="min-h-screen bg-paper">
      <Nav />

      <article className="pt-16">
        {/* Header */}
        <div className="border-b border-line">
          <div className="mx-auto max-w-content px-6 py-16">
            <Link
              href={project.backHref}
              className="mb-8 flex w-fit items-center gap-1.5 font-mono text-xs tracking-widest text-ink-soft transition-colors hover:text-signal"
            >
              <ArrowLeft size={13} />
              BACK TO PROJECTS
            </Link>

            <p className="mb-4 font-mono text-xs tracking-[0.2em] text-signal">
              {project.author.toUpperCase()} · {project.stackLine.toUpperCase()}
            </p>

            <h1 className="text-balance font-display text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
              {project.title}
            </h1>

            <div className="mt-8 rounded-lg border border-line-strong bg-paper-dim p-6">
              <p className="font-mono text-xs tracking-widest text-signal">
                OBJECTIVE
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {project.objective}
              </p>
            </div>
          </div>
        </div>

        {/* Hero image */}
        <div className="border-b border-line bg-paper-dim">
          <div className="mx-auto max-w-content px-6 py-16">
            <div className="mx-auto max-w-md overflow-hidden rounded-lg border border-line">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.heroImage.src}
                alt={project.heroImage.caption}
                className="w-full"
              />
            </div>
            <p className="mt-3 text-center font-mono text-xs tracking-wide text-ink-faint">
              {project.heroImage.caption}
            </p>
          </div>
        </div>

        {/* Development workflow */}
        <div className="border-b border-line">
          <div className="mx-auto max-w-content px-6 py-16">
            <p className="mb-2 font-mono text-xs tracking-[0.2em] text-signal">
              LOG — 01
            </p>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              Development Workflow
            </h2>

            <ol className="mt-8 flex flex-col gap-5">
              {project.workflow.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-signal font-mono text-xs text-signal">
                    {i + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-ink-soft">
                    <span className="font-semibold text-ink">{step.title}: </span>
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {project.workflowImages.map((img) => (
                <figure key={img.src}>
                  <div className="overflow-hidden rounded-lg border border-line">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={img.src} alt={img.caption} className="w-full" />
                  </div>
                  <figcaption className="mt-2 text-center font-mono text-xs tracking-wide text-ink-faint">
                    {img.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>

        {/* Engineering challenges */}
        <div className="border-b border-line bg-paper-dim">
          <div className="mx-auto max-w-content px-6 py-16">
            <p className="mb-2 font-mono text-xs tracking-[0.2em] text-signal">
              LOG — 02
            </p>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              Engineering Challenges &amp; Solutions
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {project.challenges.map((item) => (
                <div
                  key={item.title}
                  className="rounded-lg border border-line bg-paper p-5"
                >
                  <h3 className="font-display text-sm font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Extra images */}
        <div className="border-b border-line">
          <div className="mx-auto max-w-content px-6 py-16">
            <p className="mb-2 font-mono text-xs tracking-[0.2em] text-signal">
              LOG — 03
            </p>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              {project.extraSectionTitle}
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {project.extraImages.map((img) => (
                <figure key={img.src}>
                  <div className="overflow-hidden rounded-lg border border-line bg-paper-dim">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={img.src} alt={img.caption} className="w-full" />
                  </div>
                  <figcaption className="mt-2 text-center font-mono text-xs tracking-wide text-ink-faint">
                    {img.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-content px-6 py-12">
          <Link
            href={project.backHref}
            className="flex w-fit items-center gap-1.5 font-mono text-xs tracking-widest text-ink-soft transition-colors hover:text-signal"
          >
            <ArrowLeft size={13} />
            BACK TO PROJECTS
          </Link>
        </div>
      </article>

      <Footer />
    </main>
  );
}
