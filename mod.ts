// deno-lint-ignore-file no-var no-explicit-any
declare var Bun: any;
declare var process: any;

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
