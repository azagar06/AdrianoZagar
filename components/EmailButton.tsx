"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, Copy, Check } from "lucide-react";
import { profile } from "@/data/portfolio";

export default function EmailButton({
  size = "default",
  bordered = true,
}: {
  size?: "default" | "small";
  bordered?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard API unavailable — the email is still visible to copy manually
    }
  };

  const buttonSize = size === "small" ? "h-9 w-9" : "h-11 w-11";
  const iconSize = size === "small" ? 16 : 18;

  return (
    <div ref={wrapperRef} className="relative">
      <button
        type="button"
        aria-label="Show email address"
        aria-expanded={open}
        title="Email"
        onClick={() => setOpen((v) => !v)}
        className={`flex ${buttonSize} items-center justify-center rounded-full text-ink-soft transition-colors hover:bg-signal-dim hover:text-signal ${
          bordered ? "border border-line-strong text-ink" : ""
        }`}
      >
        <Mail size={iconSize} strokeWidth={1.75} />
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="Email address"
          className="absolute left-1/2 top-full z-20 mt-2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-lg border border-line bg-paper px-3 py-2 shadow-lg"
        >
          <span className="font-mono text-xs text-ink">{profile.email}</span>
          <button
            type="button"
            onClick={handleCopy}
            aria-label="Copy email address"
            title="Copy"
            className="flex h-6 w-6 items-center justify-center rounded-full text-ink-soft transition-colors hover:bg-signal-dim hover:text-signal"
          >
            {copied ? (
              <Check size={13} className="text-signal" />
            ) : (
              <Copy size={13} />
            )}
          </button>
        </div>
      )}
    </div>
  );
}
