import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Prefix a /public path with the deployment basePath.
 * next/image and next/link handle this themselves; plain <img> tags do not.
 */
export function assetPath(path: string): string {
  // next.config.mjs inlines this: "/Portfolio" on Pages, "" on Vercel.
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  if (!path.startsWith("/")) return path;
  return `${base}${path}`;
}
