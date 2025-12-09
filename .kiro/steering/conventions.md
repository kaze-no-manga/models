# Conventions - Models Package

## Naming

- **Interfaces**: PascalCase (e.g., `Manga`, `Chapter`)
- **Schemas**: camelCase + `Schema` suffix (e.g., `mangaSchema`)
- **GraphQL Types**: PascalCase (match interfaces)
- **Files**: kebab-case.ts

## Type Patterns

```typescript
// Interface
export interface Manga {
  id: string
  title: string
}

// Zod Schema
export const mangaSchema = z.object({
  id: z.string().uuid(),
  title: z.string().min(1),
})

// Type inference
export type MangaInput = z.infer<typeof mangaSchema>
```

## Versioning

- Major: Breaking type changes
- Minor: New optional fields
- Patch: Documentation, non-breaking fixes
