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
      onClick={handleShare}
      className="flex items-center gap-2 text-sm text-paragraph hover:text-accent transition"
    >
      <Share2 size={16} />
      Bagikan
    </button>
  );
}
