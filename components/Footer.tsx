import { Linkedin, Youtube, Github } from "lucide-react";
import { profile } from "@/data/portfolio";
import EmailButton from "./EmailButton";

const contacts = [
  { label: "LinkedIn", href: profile.linkedin, icon: Linkedin },
  { label: "GitHub", href: profile.github, icon: Github },
  { label: "YouTube", href: profile.youtube, icon: Youtube },
];

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-content flex-col items-center gap-5 px-6 py-12 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="font-mono text-xs tracking-wide text-ink-faint">
          © {new Date().getFullYear()} {profile.name}
        </p>

        <div className="flex items-center gap-2">
          {contacts.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              title={label}
              className="flex h-9 w-9 items-center justify-center rounded-full text-ink-soft transition-colors hover:bg-signal-dim hover:text-signal"
            >
              <Icon size={16} strokeWidth={1.75} />
            </a>
          ))}
          <EmailButton size="small" bordered={false} />
        </div>
      </div>
    </footer>
  );
}
