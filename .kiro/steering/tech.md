# Technology Stack - Models Package

## Core Technologies

- **Language**: TypeScript 5.x (strict mode)
- **Validation**: Zod ^3.0.0
- **GraphQL**: GraphQL ^16.0.0
- **Codegen**: @graphql-codegen/cli ^5.0.0
- **Build**: tsup
- **Package**: NPM private (@kaze/models)

## Dependencies

### Production
- `zod` - Runtime validation
- `graphql` - GraphQL type system

### Development
- `typescript`
- `tsup`
- `@graphql-codegen/cli`
- `@graphql-codegen/typescript`
- `@graphql-codegen/typescript-resolvers`

## Build Process

1. Generate GraphQL types from SDL
2. Compile TypeScript to CJS + ESM
3. Generate type declarations

## Package Exports

```json
{
  "exports": {
    ".": "./dist/index.js",
    "./types": "./dist/types/index.js",
    "./schemas": "./dist/schemas/index.js",
    "./graphql": "./dist/graphql/index.js"
  }
}
```
