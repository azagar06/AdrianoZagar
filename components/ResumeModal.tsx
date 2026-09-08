"use client";

import { useEffect } from "react";
import { X, Download } from "lucide-react";
import { profile } from "@/data/portfolio";

export default function ResumeModal({
  onClose,
}: {
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Resume preview"
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/60 px-4 py-8"
      onClick={onClose}
    >
      <div
        className="flex h-full w-full max-w-3xl flex-col overflow-hidden rounded-lg border border-line bg-paper shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-3">
          <p className="font-mono text-xs tracking-widest text-ink-soft">
            RESUME — {profile.name.toUpperCase()}
          </p>
          <div className="flex items-center gap-2">
            <a
              href={profile.resumeUrl}
              download
              className="flex items-center gap-1.5 rounded-full border border-ink px-3 py-1.5 font-mono text-xs tracking-widest text-ink transition-colors hover:border-signal hover:text-signal"
            >
              <Download size={13} />
              DOWNLOAD
            </a>
            <button
              type="button"
              aria-label="Close resume preview"
              onClick={onClose}
              className="rounded-full p-1.5 text-ink-soft transition-colors hover:bg-paper-dim hover:text-ink"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        <div className="flex-1 bg-paper-dim">
          <object
            data={profile.resumeUrl}
            type="application/pdf"
            className="h-full w-full"
          >
            <div className="flex h-full flex-col items-center justify-center gap-3 p-10 text-center">
              <p className="text-sm text-ink-soft">
                Add <code className="font-mono text-signal">resume.pdf</code> to
                the <code className="font-mono text-signal">/public</code>{" "}
                folder to preview it here.
              </p>
              <a
                href={profile.resumeUrl}
                download
                className="font-mono text-xs tracking-widest text-signal underline underline-offset-4"
              >
                Try downloading directly ↗
              </a>
            </div>
          </object>
        </div>
      </div>
    </div>
  );
}
