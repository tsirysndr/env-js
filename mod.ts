// deno-lint-ignore-file no-var no-explicit-any
declare var Bun: any;
declare var process: any;

/**
 * Get the environment variable value
 *
 * @example
 * ```ts
 * import * as env from "jsr:@tsirysndr/env-js";
 * console.log(env.get("HOME")); // /home/user
 */
export function get(key: string): string | undefined {
  if (Object.keys(globalThis).includes("Bun")) {
    return Bun.env[key];
  }

  if (Object.keys(globalThis).includes("process")) {
    return process.env[key];
  }

  if (Object.keys(globalThis).includes("Deno")) {
    return Deno.env.get(key);
  }

  return undefined;
}

/**
 * Verify if the environment variable exists
 *
 * @example
 * ```ts
 * import * as env from "jsr:@tsirysndr/env-js";
 * console.log(env.has("HOME")); // true
 * ```
 */
export function has(key: string): boolean {
  if (Object.keys(globalThis).includes("Bun")) {
    return !!Bun.env[key];
  }

  if (Object.keys(globalThis).includes("process")) {
    return !!process.env[key];
  }

  if (Object.keys(globalThis).includes("Deno")) {
    return Deno.env.has(key);
  }

  return false;
}

/**
 * Convert the environment variables to an object
 *
 * @example
 * ```ts
 * import * as env from "jsr:@tsirysndr/env-js";
 * console.log(env.toObject());
 * ```
 */
export function toObject(): Record<string, string> {
  if (Object.keys(globalThis).includes("Bun")) {
    return Bun.env;
  }

  if (Object.keys(globalThis).includes("process")) {
    return process.env;
  }

  if (Object.keys(globalThis).includes("Deno")) {
    return Deno.env.toObject();
  }

  return {};
}
