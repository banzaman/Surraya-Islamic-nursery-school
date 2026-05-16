import { clsx, type ClassValue } from "clsx";

/** Merge Tailwind class names safely */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/** Format a number with commas */
export function formatNumber(n: number): string {
  return n.toLocaleString("en-US");
}

/** Clamp a value between min and max */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/** Delay helper for staggered animations */
export function staggerDelay(index: number, base = 0.1): number {
  return index * base;
}
