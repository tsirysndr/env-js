import { assertEquals } from './deps.ts';
import { get, has } from './mod.ts';

Deno.test(function getTest() {
  Deno.env.set("DEMO", "123");
  assertEquals(get("DEMO"), "123"); 
});

Deno.test(function hasTest() {
  Deno.env.set("DEMO", "123");
  assertEquals(has("DEMO"), true);
})
