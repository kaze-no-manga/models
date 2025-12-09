# @kaze/models

> Shared TypeScript types, Zod schemas, and GraphQL definitions for Kaze no Manga

## Overview

This package contains all shared data models, type definitions, validation schemas, and GraphQL types used across the Kaze no Manga ecosystem.

## Features

- 📘 **TypeScript Interfaces**: Strongly-typed data models
- ✅ **Zod Schemas**: Runtime validation and type inference
- 🔷 **GraphQL Types**: Generated from SDL schemas
- 🔄 **Type Safety**: End-to-end type safety across all services

## Installation

```bash
npm install @kaze/models
```

## Usage

### TypeScript Interfaces

```typescript
import { Manga, Chapter, User, LibraryEntry } from '@kaze/models'

const manga: Manga = {
  id: '123',
  title: 'One Piece',
  altTitles: ['ワンピース'],
  // ...
}
```

### Zod Schemas

```typescript
import { mangaSchema, chapterSchema } from '@kaze/models/schemas'

// Validate data
const result = mangaSchema.safeParse(data)
if (result.success) {
  console.log(result.data) // Typed as Manga
} else {
  console.error(result.error)
}

// Type inference
type MangaInput = z.infer<typeof mangaSchema>
```

### GraphQL Types

```typescript
import { Query, Mutation, MangaResolvers } from '@kaze/models/graphql'

// Use in resolvers
const resolvers: MangaResolvers = {
  Query: {
    getManga: async (_, { id }) => {
      // Return type is automatically typed
    }
  }
}
```

## Core Models

### User

```typescript
interface User {
  id: string                    // Cognito ID
  email: string
  name?: string
  avatar?: string
  preferences: UserPreferences
  createdAt: Date
  updatedAt: Date
}

interface UserPreferences {
  notifications: {
    email: boolean
    push: boolean
    maxPerDay: number
  }
  reader: {
    imageWidth: 'fit' | 'full'
    spacing: number
    theme: 'light' | 'dark' | 'auto'
  }
}
```

### Manga

```typescript
interface Manga {
  id: string
  title: string
  altTitles: string[]
  description?: string
  coverImage?: string
  status: MangaStatus
  genres: string[]
  authors: string[]
  year?: number
  sources: MangaSource[]
  createdAt: Date
  updatedAt: Date
}

type MangaStatus = 'ongoing' | 'completed' | 'hiatus' | 'cancelled'

interface MangaSource {
  sourceId: string              // Reference to Source entity
  sourceMangaId: string         // ID on the source platform
  url: string
  priority: number              // For automatic source selection
  lastChecked: Date
}
```

### Source

```typescript
interface Source {
  id: string
  name: string                  // 'MangaPark', 'OmegaScans'
  baseUrl: string
  status: SourceStatus
  priority: number
  createdAt: Date
  updatedAt: Date
}

type SourceStatus = 'active' | 'deprecated' | 'unavailable'
```

### Chapter

```typescript
interface Chapter {
  id: string
  mangaId: string
  sourceId: string
  number: number                // Supports decimals (5.5, 5.1)
  title?: string
  releaseDate?: Date
  images: ChapterImage[]
  createdAt: Date
  updatedAt: Date
}

interface ChapterImage {
  url: string                   // S3 URL after download
  originalUrl: string           // Original source URL
  page: number
  width?: number
  height?: number
}
```

### Library Entry

```typescript
interface LibraryEntry {
  userId: string
  mangaId: string
  status: ReadingStatus
  rating?: number               // 1-10
  notes?: string
  currentChapterId?: string
  currentChapterNumber?: number
  lastReadAt?: Date
  addedAt: Date
  updatedAt: Date
}

type ReadingStatus = 'reading' | 'completed' | 'plan_to_read' | 'dropped' | 'on_hold'
```

### Reading History

```typescript
interface ReadingHistory {
  id: string
  userId: string
  mangaId: string
  chapterId: string
  chapterNumber: number
  completed: boolean
  readAt: Date
}
```

### Notification

```typescript
interface Notification {
  id: string
  userId: string
  mangaId: string
  chapterId: string
  type: NotificationType
  title: string
  message: string
  read: boolean
  sentAt: Date
  readAt?: Date
}

type NotificationType = 'new_chapter' | 'manga_completed' | 'source_changed'
```

## GraphQL Schema

### Queries

```graphql
type Query {
  # Manga
  searchManga(query: String!): [Manga!]!
  getManga(id: ID!): Manga
  getChapters(mangaId: ID!): [Chapter!]!
  
  # Library
  getLibrary: [LibraryEntry!]!
  getReadingHistory(limit: Int): [ReadingHistory!]!
  
  # User
  getProfile: User!
  getNotifications(unreadOnly: Boolean): [Notification!]!
}
```

### Mutations

```graphql
type Mutation {
  # Library
  addToLibrary(mangaId: ID!): LibraryEntry!
  updateLibraryEntry(mangaId: ID!, input: LibraryEntryInput!): LibraryEntry!
  removeFromLibrary(mangaId: ID!): Boolean!
  
  # Progress
  updateProgress(mangaId: ID!, chapterId: ID!): LibraryEntry!
  markChapterAsRead(chapterId: ID!): ReadingHistory!
  
  # User
  updatePreferences(input: UserPreferencesInput!): User!
  markNotificationAsRead(id: ID!): Notification!
}
```

## Validation Schemas

All models have corresponding Zod schemas for runtime validation:

```typescript
import { z } from 'zod'

export const mangaSchema = z.object({
  id: z.string().uuid(),
  title: z.string().min(1).max(500),
  altTitles: z.array(z.string()).default([]),
  description: z.string().max(5000).optional(),
  status: z.enum(['ongoing', 'completed', 'hiatus', 'cancelled']),
  genres: z.array(z.string()),
  authors: z.array(z.string()),
  year: z.number().int().min(1900).max(2100).optional(),
  // ...
})

export const chapterSchema = z.object({
  id: z.string().uuid(),
  mangaId: z.string().uuid(),
  number: z.number().positive(),
  title: z.string().max(500).optional(),
  // ...
})
```

## Code Generation

GraphQL types are automatically generated from SDL schemas:

```bash
# Generate TypeScript types from GraphQL schema
npm run codegen
```

Configuration in `codegen.yml`:

```yaml
schema: './src/graphql/schema.graphql'
generates:
  ./src/graphql/types.ts:
    plugins:
      - typescript
      - typescript-resolvers
```

## Package Structure

```
models/
├── src/
│   ├── types/
│   │   ├── user.ts
│   │   ├── manga.ts
│   │   ├── chapter.ts
│   │   ├── library.ts
│   │   └── index.ts
│   ├── schemas/
│   │   ├── user.schema.ts
│   │   ├── manga.schema.ts
│   │   ├── chapter.schema.ts
│   │   ├── library.schema.ts
│   │   └── index.ts
│   ├── graphql/
│   │   ├── schema.graphql
│   │   ├── types.ts (generated)
│   │   └── index.ts
│   └── index.ts
├── codegen.yml
├── package.json
└── README.md
```

## Development

```bash
# Install dependencies
npm install

# Generate GraphQL types
npm run codegen

# Build package
npm run build

# Run tests
npm test

# Publish (private)
npm publish
```

## Versioning

This package follows [Semantic Versioning](https://semver.org/):

- **Major**: Breaking changes to types or schemas
- **Minor**: New types or optional fields
- **Patch**: Bug fixes or documentation updates

## License

MIT License - see [LICENSE](LICENSE) for details.

---

**Part of the [Kaze no Manga](https://github.com/kaze-no-manga) project**
