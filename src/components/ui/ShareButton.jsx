"use client";

import { Share2 } from "lucide-react";

export default function ShareButton() {
  async function handleShare() {
    const shareData = {
      title: document.title,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert("Link berita berhasil disalin!");
      }
    } catch (error) {
      // User membatalkan menu share
      if (error.name !== "AbortError") {
        console.error("Gagal membagikan berita:", error);
      }
    }
  }

  return (
    <button
      type="button"
      onClick={handleShare}
      className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white px-4 py-2.5 text-sm font-semibold text-primary transition hover:border-accent/30 hover:bg-accent/5 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <Share2 aria-hidden="true" size={16} />
      Bagikan
    </button>
  );
}
