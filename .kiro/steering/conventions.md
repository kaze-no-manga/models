# Conventions - Models Package

## Naming

- **Interfaces**: PascalCase (e.g., `Manga`, `Chapter`)
- **GraphQL Types**: PascalCase (match interfaces)
- **Files**: kebab-case.ts

## Type Patterns

```typescript
// Interface (generated from GraphQL)
export interface Manga {
  id: string
  title: string
}

// GraphQL Type
type Manga {
  id: ID!
  title: String!
}
```

## Versioning

- Major: Breaking type changes
- Minor: New optional fields
- Patch: Documentation, non-breaking fixes
