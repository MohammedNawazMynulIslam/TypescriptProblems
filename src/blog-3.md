**Generics: Reusable Code Without Sacrificing Type Safety**

You want one function that works everywhere. You also want zero `any` types. Generics make both possible.

Generics treat **types like function parameters**. Instead of hardcoding `User` or `string`, you declare a placeholder `<T>`. The compiler tracks `T` from input to output, preserving the exact shape of whatever data you pass in.

**How it stays strictly typed:**
• **Inference:** Pass `Product[]` → `T` becomes `Product`. No manual annotations.
• **Propagation:** Parameters, returns, and internals all share the same `T`. The type contract never breaks.
• **Constraints:** `T extends { id: string }` enforces required fields while accepting infinite matching shapes.

```ts
function first<T>(items: T[]): T | undefined { return items[0]; }
const user = first([{ name: "Alice" }]);
const id   = first([1, 2, 3]);
```

**Why it matters:** One implementation. Infinite type-safe variations. Zero duplication. Full IDE autocomplete. Compile-time guarantees.

Generics aren’t just syntax—they’re the backbone of scalable, strictly typed codebases. Write once. Reuse everywhere. Stay safe.