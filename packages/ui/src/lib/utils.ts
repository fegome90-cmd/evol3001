import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Compose multiple class values into a single optimized CSS class string.
 *
 * Accepts any number of class value inputs (strings, arrays, objects, etc.), ignores falsy values, and merges conflicting Tailwind-style classes into a final space-separated class list.
 *
 * @param inputs - Class value inputs to compose and merge
 * @returns The resulting merged class string
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
