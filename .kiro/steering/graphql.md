# GraphQL Schema - Models Package

## Schema Structure
```graphql
# Types
type Manga {
  id: ID!
  title: String!
  altTitles: [String!]!
}

# Inputs
input CreateMangaInput {
  title: String!
  altTitles: [String!]
}

# Queries
type Query {
  getManga(id: ID!): Manga
}

# Mutations
type Mutation {
  createManga(input: CreateMangaInput!): Manga!
}
```

## Conventions
- Types: PascalCase
- Fields: camelCase
- Inputs: `{Action}{Type}Input`
- Non-null: Use `!` for required fields
- Lists: `[Type!]!` (non-null list of non-null items)

## Codegen
Run `npm run codegen` after schema changes.
