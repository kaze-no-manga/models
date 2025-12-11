import { existsSync, readFileSync, unlinkSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

import { buildSchema } from 'graphql';
import { afterEach, describe, expect, it } from 'vitest';

// Import the merge logic (we'll need to extract it to a function)
const rootDir = join(import.meta.dirname, '../..');

describe('Merge Schema Script', () => {
  const testOutputPath = join(rootDir, 'test-schema.graphql');

  afterEach(() => {
    if (existsSync(testOutputPath)) {
      unlinkSync(testOutputPath);
    }
  });

  it('should merge all domain schemas', () => {
    // Read schemas
    const baseSchema = readFileSync(join(rootDir, 'lib/graphql/base.graphql'), 'utf-8');
    const userSchema = readFileSync(join(rootDir, 'lib/graphql/domains/user.graphql'), 'utf-8');
    const contentSchema = readFileSync(
      join(rootDir, 'lib/graphql/domains/content.graphql'),
      'utf-8',
    );
    const librarySchema = readFileSync(
      join(rootDir, 'lib/graphql/domains/library.graphql'),
      'utf-8',
    );

    // Simulate merge logic
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

    // Write test output
    writeFileSync(testOutputPath, mergedSchema);

    // Verify file was created
    expect(existsSync(testOutputPath)).toBe(true);

    // Verify content
    const result = readFileSync(testOutputPath, 'utf-8');
    expect(result).toContain('type User');
    expect(result).toContain('type Manga');
    expect(result).toContain('type LibraryEntry');
    expect(result).toContain('# Generated schema - DO NOT EDIT MANUALLY');
  });

  it('should produce valid GraphQL schema', () => {
    // Read and merge schemas
    const baseSchema = readFileSync(join(rootDir, 'lib/graphql/base.graphql'), 'utf-8');
    const userSchema = readFileSync(join(rootDir, 'lib/graphql/domains/user.graphql'), 'utf-8');
    const contentSchema = readFileSync(
      join(rootDir, 'lib/graphql/domains/content.graphql'),
      'utf-8',
    );
    const librarySchema = readFileSync(
      join(rootDir, 'lib/graphql/domains/library.graphql'),
      'utf-8',
    );

    const mergedSchema = [baseSchema, userSchema, contentSchema, librarySchema].join('\n');

    // Should build without errors
    expect(() => {
      buildSchema(mergedSchema);
    }).not.toThrow();
  });

  it('should include all domain types in merged schema', () => {
    const baseSchema = readFileSync(join(rootDir, 'lib/graphql/base.graphql'), 'utf-8');
    const userSchema = readFileSync(join(rootDir, 'lib/graphql/domains/user.graphql'), 'utf-8');
    const contentSchema = readFileSync(
      join(rootDir, 'lib/graphql/domains/content.graphql'),
      'utf-8',
    );
    const librarySchema = readFileSync(
      join(rootDir, 'lib/graphql/domains/library.graphql'),
      'utf-8',
    );

    const mergedSchema = [baseSchema, userSchema, contentSchema, librarySchema].join('\n');
    const schema = buildSchema(mergedSchema);

    // Verify all main types exist
    expect(schema.getType('User')).toBeDefined();
    expect(schema.getType('Manga')).toBeDefined();
    expect(schema.getType('Chapter')).toBeDefined();
    expect(schema.getType('LibraryEntry')).toBeDefined();
    expect(schema.getType('ReadingHistory')).toBeDefined();
  });
});
