import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
/**
 * Combine class name inputs into a single, deduplicated Tailwind-aware class string.
 * @param {...any} inputs - Class name values accepted by `clsx` (strings, arrays, objects, etc.).
 * @returns {string} The merged class string with Tailwind utilities deduplicated and conflicts resolved.
 */
export function cn() {
    var inputs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        inputs[_i] = arguments[_i];
    }
    return twMerge(clsx(inputs));
}