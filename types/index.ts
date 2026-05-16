// ─── Navigation ──────────────────────────────────────────
export interface NavLink {
  label: string;
  href: string;
}

// ─── UI Components ───────────────────────────────────────
export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
export type ButtonSize    = "sm" | "md" | "lg";

export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  loading?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit" | "reset";
}

// ─── Content Types ───────────────────────────────────────
export interface Stat {
  value: string;
  label: string;
}

export interface Pillar {
  icon: string;
  title: string;
  description: string;
}

export interface PaymentCard {
  title: string;
  description: string;
  badge: string | null;
  highlight: boolean;
}

export interface SocialLink {
  platform: string;
  href: string;
  icon: string;
}

// ─── Section Component Props ─────────────────────────────
export interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export interface CardProps {
  className?: string;
  children: React.ReactNode;
  hover?: boolean;
  bordered?: boolean;
  padding?: "sm" | "md" | "lg";
}
