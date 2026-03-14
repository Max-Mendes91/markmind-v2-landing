import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Safely serialize a value to JSON for use inside a <script> tag */
export const safeJsonLd = (value: unknown): string =>
  JSON.stringify(value).replace(/</g, "\\u003c")

/** Format an ISO date string to a human-readable format (e.g. "March 1, 2026") */
export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
