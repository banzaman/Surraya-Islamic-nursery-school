import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, Heart } from "lucide-react";
import { SITE, FOOTER_LINKS } from "@/lib/constants";

// Inline SVG brand icons (lucide-react removed brand icons)
const SocialIcon = ({ platform }: { platform: string }) => {
  const paths: Record<string, string> = {
    TikTok: "M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z",
    Instagram: "M16 2H8a6 6 0 0 0-6 6v8a6 6 0 0 0 6 6h8a6 6 0 0 0 6-6V8a6 6 0 0 0-6-6zm4 14a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8zm-8-8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm5-6.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z",
    Twitter:  "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z",
    YouTube:  "M22.54 6.42a2.78 2.78 0 0 0-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.45A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.97C5.12 20 12 20 12 20s6.88 0 8.59-.45a2.78 2.78 0 0 0 1.95-1.97A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98l5.75 3.02-5.75 3.02z",
  };
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" aria-hidden="true">
      <path d={paths[platform] ?? ""} />
    </svg>
  );
};

const SOCIAL = [
  { platform: "Instagram", href: "https://www.instagram.com/surraya_islamic_school_/" },
  { platform: "TikTok",    href: "https://www.tiktok.com/@surraya.islamic.n" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{ background: "var(--color-forest-deep)", color: "rgba(255,255,255,0.85)" }}
      aria-label="Site footer"
    >
      {/* ── Main grid ───────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Col 1 — Brand */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-3 no-underline mb-4"
              aria-label={`${SITE.name} — Home`}
            >
              <Image
                src="/logo.png"
                alt={SITE.name}
                width={52}
                height={52}
                className="h-13 w-13 shrink-0 object-contain"
              />
              <span className="font-serif text-xl text-white leading-tight">
                Surraya
                <span className="block text-xs font-sans font-medium tracking-widest uppercase opacity-60">
                  Islamic Nursery
                </span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed opacity-70 mb-5">
              {SITE.tagline}. Nurturing children with faith, knowledge, and purpose.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {SOCIAL.map((s) => (
                  <a
                    key={s.platform}
                    href={s.href}
                    aria-label={s.platform}
                    className="social-icon flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SocialIcon platform={s.platform} />
                  </a>
                ))}
              </div>
          </div>

          {/* Col 2 — School links */}
          <div>
            <h3 className="font-sans text-xs font-bold uppercase tracking-widest mb-4 text-white/40">
              School
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.school.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "rgba(255,255,255,0.65)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Support links */}
          <div>
            <h3 className="font-sans text-xs font-bold uppercase tracking-widest mb-4 text-white/40">
              Support
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "rgba(255,255,255,0.65)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact + Newsletter */}
          <div>
            <h3 className="font-sans text-xs font-bold uppercase tracking-widest mb-4 text-white/40">
              Get in Touch
            </h3>
            <address className="not-italic space-y-3 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
              <p className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 shrink-0" style={{ color: "var(--color-gold)" }} />
                <a
                  href={SITE.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  {SITE.address}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone size={14} className="shrink-0" style={{ color: "var(--color-gold)" }} />
                <span className="hover:text-white transition-colors">
                  Contact: 0703329154, +256 757 797 639
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Mail size={14} className="shrink-0" style={{ color: "var(--color-gold)" }} />
                <a href={`mailto:${SITE.email}`} className="hover:text-white transition-colors">
                  {SITE.email}
                </a>
              </p>
            </address>

          </div>
        </div>
      </div>

      {/* ── Bottom bar ──────────────────────────────────── */}
      <div
        className="border-t mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
        style={{ borderColor: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.40)" }}
      >
        <p>
          &copy; {year} {SITE.name}. All rights reserved.
        </p>
        <p className="flex items-center gap-1">
          Made with{" "}
          <Heart size={11} className="text-[var(--color-gold)]" aria-hidden="true" />{" "}
          in Kampala
        </p>
      </div>
    </footer>
  );
}
