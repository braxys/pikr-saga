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
      onClick={handleCopy}
      className="flex items-center gap-2 text-sm text-paragraph hover:text-accent transition"
    >
      {copied ? (
        <>
          <Check size={16} />
          Link disalin
        </>
      ) : (
        <>
          <LinkIcon size={16} />
          Salin link
        </>
      )}
    </button>
  );
}
