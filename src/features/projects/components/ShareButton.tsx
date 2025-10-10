"use client";
import { useState } from "react";

export default function ShareButton() {
  const [copied, setCopied] = useState(false);

  async function handleShare() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy link:", err);
    }
  }

  return (
    <button
      onClick={handleShare}
      className="relative bg-[url('/articleBlob.svg')] bg-no-repeat bg-center w-[130px] h-[40px] text-[14px] text-wine font-semibold flex items-center justify-center transition-transform duration-150 motion-safe:hover:scale-[1.06] will-change-transform">
      {copied ? "copied!" : "share"}
    </button>
  );
}
