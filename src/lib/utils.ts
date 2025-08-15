// lib/utils.ts
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility to combine class names (like className={`...`} + conditional classes)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}
