# @kaze/models

[![npm version](https://img.shields.io/npm/v/@kaze-no-manga/models.svg?style=flat)](https://www.npmjs.com/package/@kaze-no-manga/models)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![Coverage Badge](https://img.shields.io/badge/coverage-100%25-brightgreen?style=flat)

> Shared TypeScript types and GraphQL definitions for Kaze no Manga

## Overview

This package contains all shared data models, type definitions, and GraphQL types used across the Kaze no Manga ecosystem.

## Features

- 📘 **TypeScript Interfaces**: Strongly-typed data models generated from GraphQL
- 🔷 **GraphQL Types**: Complete schema definitions
- 🔄 **Type Safety**: End-to-end type safety across all services

## Installation

```bash
npm install @kaze/models
```

## Usage

### TypeScript Types

```typescript
import { Manga, Chapter, User, LibraryEntry } from '@kaze/models'

const manga: Manga = {
  id: '123',
  title: 'One Piece',
  altTitles: ['ワンピース'],
  // ...
}
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
  slug: string
  title: string
  altTitles: string[]
  description?: string
  cover?: string
  status: MangaStatus
  genres: string[]
  authors: string[]
  year?: number
  totalChapters?: number
  isNsfw: boolean
  sourceName: string            // Global source identifier
  sourceId: string              // ID on the source platform
  createdAt: Date
  updatedAt: Date
}

type MangaStatus = 'ongoing' | 'completed' | 'hiatus' | 'cancelled'
```

### Chapter

```typescript
interface Chapter {
  id: string
  mangaId: string
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
  lastReadAt?: Date
  createdAt: Date
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

## GraphQL Schema

### Queries

```graphql
type Query {
  # Manga
  searchManga(query: String!): [Manga!]!
  getManga(id: ID!): Manga
  mangaBySlug(slug: String!): Manga
  getChapters(mangaId: ID!): [Chapter!]!
  
  # Library
  library(userId: ID!): [LibraryEntry!]!
  readingHistory(userId: ID!, limit: Int): [ReadingHistory!]!
  
  # User
  getProfile: User!
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
  updateReadingProgress(mangaId: ID!, chapterId: ID!): LibraryEntry!
  markChapterAsRead(chapterId: ID!): ReadingHistory!
  
  # User
  updatePreferences(input: UserPreferencesInput!): User!
}
```

## Code Generation

GraphQL types are automatically generated from SDL schemas:

```bash
# Generate TypeScript types from GraphQL schema
npm run codegen
```

## Package Structure

```
models/
├── lib/
│   ├── graphql/
│   │   ├── domains/
│   │   │   ├── user.graphql
│   │   │   ├── content.graphql
│   │   │   └── library.graphql
│   │   ├── schema.graphql (generated)
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

# Publish
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
