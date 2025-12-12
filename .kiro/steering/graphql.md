# GraphQL Schema - Models Package

## Schema Structure
```graphql
# Types
type Manga {
  id: ID!
  title: String!
  altTitles: [String!]!
  sourceName: String!    # Global source identifier
  sourceId: String!      # ID on source platform
}

# Inputs
input CreateMangaInput {
  title: String!
  altTitles: [String!]
  sourceName: String!
  sourceId: String!
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

## Lean Approach
- No separate Source model - embedded in Manga
- Focus on essential fields only
- Avoid over-engineering

## Codegen
Run `npm run codegen` after schema changes.
