"use client";

import { motion, type Variants, type Easing } from "framer-motion";
import { cn } from "@/lib/utils";

type AnimationVariant = "fadeUp" | "fadeIn" | "fadeLeft" | "fadeRight" | "scaleUp";

const VARIANTS: Record<AnimationVariant, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 32 },
    show:   { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    show:   { opacity: 1 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -28 },
    show:   { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 28 },
    show:   { opacity: 1, x: 0 },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.93 },
    show:   { opacity: 1, scale: 1 },
  },
};

interface AnimatedSectionProps {
  children:    React.ReactNode;
  variant?:    AnimationVariant;
  delay?:      number;
  duration?:   number;
  ease?:       Easing;
  className?:  string;
  once?:       boolean;
  margin?:     string;
  as?:         "div" | "section" | "article" | "aside" | "li";
}

export function AnimatedSection({
  children,
  variant   = "fadeUp",
  delay     = 0,
  duration  = 0.55,
  ease      = "easeOut",
  className,
  once      = true,
  margin    = "-60px",
  as:Tag    = "div",
}: AnimatedSectionProps) {
  return (
    <motion.div
      className={cn(className)}
      variants={VARIANTS[variant]}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin }}
      transition={{ delay, duration, ease }}
    >
      {children}
    </motion.div>
  );
}

// ── Stagger container — wraps children that stagger in sequence ──
interface StaggerContainerProps {
  children:   React.ReactNode;
  stagger?:   number;
  delay?:     number;
  className?: string;
}

export function StaggerContainer({
  children,
  stagger   = 0.1,
  delay     = 0,
  className,
}: StaggerContainerProps) {
  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        show:   { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  );
}

// ── Stagger child — use inside StaggerContainer ──────────────────
interface StaggerChildProps {
  children:   React.ReactNode;
  variant?:   AnimationVariant;
  className?: string;
}

export function StaggerChild({
  children,
  variant   = "fadeUp",
  className,
}: StaggerChildProps) {
  return (
    <motion.div className={cn(className)} variants={VARIANTS[variant]}>
      {children}
    </motion.div>
  );
}
