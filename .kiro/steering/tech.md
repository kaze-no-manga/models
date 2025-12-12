# Technology Stack - Models Package

## Core Technologies

- **Language**: TypeScript 5.x (strict mode)
- **GraphQL**: GraphQL ^16.0.0
- **Codegen**: @graphql-codegen/cli ^5.0.0
- **Build**: TypeScript compiler
- **Package**: NPM public (@kaze/models)

## Dependencies

### Production
- `graphql` - GraphQL type system

### Development
- `typescript`
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
    ".": "./lib/index.js",
    "./graphql": "./lib/graphql/index.js",
    "./graphql/domains": "./lib/graphql/domains/index.js"
  }
}
```
