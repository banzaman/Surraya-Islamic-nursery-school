"use client";

import { Mail } from "lucide-react";

export function NewsletterForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex gap-2"
      aria-label="Newsletter signup"
    >
      <label htmlFor="footer-email" className="sr-only">Email address</label>
      <input
        id="footer-email"
        type="email"
        placeholder="your@email.com"
        required
        className="flex-1 min-w-0 rounded-lg px-3 py-2 text-sm outline-none"
        style={{
          background: "rgba(255,255,255,0.12)",
          border: "1px solid rgba(255,255,255,0.2)",
          color: "white",
        }}
      />
      <button
        type="submit"
        className="shrink-0 px-3 py-2 rounded-lg text-sm font-semibold transition-colors"
        style={{
          background: "var(--color-gold)",
          color: "var(--color-forest-deep)",
        }}
        aria-label="Subscribe to newsletter"
      >
        <Mail size={15} />
      </button>
    </form>
  );
}
