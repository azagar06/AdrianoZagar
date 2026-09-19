import { Code2, PenTool, Cpu, Wrench } from "lucide-react";
import { skills } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

const icons = [Code2, PenTool, Cpu, Wrench];

export default function Skills() {
  return (
    <section id="skills" className="border-b border-line bg-paper-dim">
      <div className="mx-auto max-w-content px-6 py-24">
        <SectionHeading index="LOG — 03" title="Skills" />

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((category, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={category.label} className="bg-paper p-6">
                <Icon className="text-signal" size={20} strokeWidth={1.75} />
                <h3 className="mt-4 font-display text-sm font-semibold tracking-wide text-ink">
                  {category.label}
                </h3>
                <ul className="mt-3 flex flex-col gap-1.5">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-sm text-ink-soft">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
