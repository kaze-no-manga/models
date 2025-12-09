# Zod Schemas - Models Package

## Schema Patterns

### Basic Schema
```typescript
export const mangaSchema = z.object({
  id: z.string().uuid(),
  title: z.string().min(1).max(500),
  altTitles: z.array(z.string()).default([]),
  status: z.enum(['ongoing', 'completed', 'hiatus', 'cancelled']),
})
```

### Input Schemas
```typescript
// For mutations - omit generated fields
export const createMangaSchema = mangaSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
})

export type CreateMangaInput = z.infer<typeof createMangaSchema>
```

### Validation Rules
- IDs: `.uuid()`
- Emails: `.email()`
- URLs: `.url()`
- Dates: `.date()` or `.string().datetime()`
- Enums: `.enum([...])` not `.union([...])`

## Error Messages
```typescript
z.string().min(1, 'Title is required')
z.string().email('Invalid email format')
```
