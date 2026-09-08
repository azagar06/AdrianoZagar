import { BadgeCheck, ShieldCheck } from "lucide-react";
import { certifications } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Certifications() {
  return (
    <section id="certifications">
      <div className="mx-auto max-w-content px-6 py-24">
        <SectionHeading index="LOG — 04" title="Certifications" />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="flex items-start gap-4 rounded-lg border border-line-strong bg-amber-dim/40 p-5"
            >
              <BadgeCheck
                className="mt-0.5 shrink-0 text-amber"
                size={20}
                strokeWidth={1.75}
              />
              <div>
                <p className="font-display text-sm font-semibold text-ink">
                  {cert.title}
                </p>

                {cert.date && (
                  <p className="mt-1 font-mono text-xs tracking-wide text-ink-faint">
                    ISSUED · {cert.date.toUpperCase()}
                  </p>
                )}

                {cert.credentialId && (
                  <p className="mt-1 font-mono text-xs tracking-wide text-ink-faint">
                    ID · {cert.credentialId}
                  </p>
                )}

                {cert.verifyUrl && (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 flex items-center gap-1.5 font-mono text-xs tracking-wide text-signal transition-colors hover:text-signal-ink"
                  >
                    <ShieldCheck size={13} />
                    VERIFY CREDENTIAL
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
