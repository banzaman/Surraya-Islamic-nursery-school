import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?:  string;
  title:     string;
  subtitle?: string;
  centered?: boolean;
  light?:    boolean;   // true = white text (for dark backgrounds)
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered  = true,
  light     = false,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        centered && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-3 text-sm font-semibold uppercase tracking-widest",
            light
              ? "text-[var(--color-gold-bright)]"
              : "text-[var(--color-forest-mid)]",
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight",
          light ? "text-white" : "text-[var(--color-forest-deep)]",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base sm:text-lg leading-relaxed",
            light ? "text-white/75" : "text-[var(--color-slate)]",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
