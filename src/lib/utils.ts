import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges multiple class names intelligently.
 * - Uses `clsx` to conditionally join class names.
 * - Uses `twMerge` to avoid conflicting Tailwind classes.
 */
export function cn(...inputs: string[]) {
  return twMerge(clsx(inputs));
}
