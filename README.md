# env-js

This is a simple package to get the environment variables, it works in different runtimes like [Deno](https://deno.com/), [Bun](https://bun.sh/) and [Node.js](https://nodejs.org/).

## 🚀 Usage

```typescript
import * as env from 'jsr:@tsirysndr/env-js';

console.log(env.get('HOME'));
console.log(env.has('HOME'));
```
