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
  if (Deno) {
    return Deno.env.get(key);
  }

  if (Bun) {
    return Bun.env[key];
  }

  if (process) {
    return process.env[key];
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
  if (Deno) {
    return Deno.env.has(key);
  }

  if (Bun) {
    return !!Bun.env[key];
  }

  if (process) {
    return !!process.env[key];
  }
  return false;
}
