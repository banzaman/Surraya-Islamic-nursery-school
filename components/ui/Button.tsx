"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize    = "sm" | "md" | "lg";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:       ButtonVariant;
  size?:          ButtonSize;
  fullWidth?:     boolean;
  loading?:       boolean;
  href?:          string;
  external?:      boolean;
  icon?:          React.ReactNode;
  iconPosition?:  "left" | "right";
  className?:     string;
  children:       React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--color-forest)] text-white hover:bg-[var(--color-forest-deep)] shadow-md hover:shadow-lg active:scale-[0.98]",
  secondary:
    "bg-[var(--color-gold)] text-[var(--color-forest-deep)] font-semibold hover:bg-[var(--color-gold-bright)] shadow-md active:scale-[0.98]",
  outline:
    "border-2 border-[var(--color-forest)] text-[var(--color-forest)] bg-transparent hover:bg-[var(--color-forest-light)] active:scale-[0.98]",
  ghost:
    "text-[var(--color-forest)] bg-transparent hover:bg-[var(--color-forest-light)] active:scale-[0.98]",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm gap-1.5",
  md: "px-6 py-3 text-base gap-2",
  lg: "px-8 py-4 text-lg gap-2.5",
};

export function Button({
  variant      = "primary",
  size         = "md",
  fullWidth    = false,
  loading      = false,
  href,
  external     = false,
  icon,
  iconPosition = "left",
  className,
  children,
  disabled,
  ...props
}: Props) {
  const classes = cn(
    "inline-flex items-center justify-center font-semibold rounded-lg",
    "transition-all duration-200 cursor-pointer select-none",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] focus-visible:ring-offset-2",
    variantStyles[variant],
    sizeStyles[size],
    fullWidth && "w-full",
    (disabled || loading) && "opacity-60 pointer-events-none",
    className,
  );

  const content = (
    <>
      {loading && (
        <svg className="animate-spin h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
        </svg>
      )}
      {!loading && icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {!loading && icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} disabled={disabled || loading} {...props}>
      {content}
    </button>
  );
}
