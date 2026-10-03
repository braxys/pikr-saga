"use client";

import { useState } from "react";
import { Link as LinkIcon, Check } from "lucide-react";

export default function CopyLinkButton() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(window.location.href);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Gagal menyalin link:", error);
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-live="polite"
      className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white px-4 py-2.5 text-sm font-semibold text-primary transition hover:border-accent/30 hover:bg-accent/5 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      {copied ? (
        <>
          <Check aria-hidden="true" size={16} />
          Link disalin
        </>
      ) : (
        <>
          <LinkIcon aria-hidden="true" size={16} />
          Salin link
        </>
      )}
    </button>
  );
}
