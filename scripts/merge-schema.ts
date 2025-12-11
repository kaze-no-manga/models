import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const rootDir = join(import.meta.dirname, '..');

// Read all domain schemas
const baseSchema = readFileSync(join(rootDir, 'lib/graphql/base.graphql'), 'utf-8');
const userSchema = readFileSync(join(rootDir, 'lib/graphql/domains/user.graphql'), 'utf-8');
const contentSchema = readFileSync(join(rootDir, 'lib/graphql/domains/content.graphql'), 'utf-8');
const librarySchema = readFileSync(join(rootDir, 'lib/graphql/domains/library.graphql'), 'utf-8');

// Merge schemas
const mergedSchema = [
  '# Generated schema - DO NOT EDIT MANUALLY',
  '# Run `npm run merge-schema` to regenerate',
  '',
  baseSchema,
  '',
  userSchema,
  '',
  contentSchema,
  '',
  librarySchema,
].join('\n');

// Write merged schema
writeFileSync(join(rootDir, 'lib/graphql/schema.graphql'), mergedSchema);

console.log('✅ Schema merged successfully!');
console.log('📁 Output: lib/graphql/schema.graphql');
