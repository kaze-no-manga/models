import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import { buildSchema } from 'graphql';
import { describe, expect, it } from 'vitest';

describe('Schema Integration', () => {
  it('should merge all domains into valid schema', () => {
    const baseSchema = readFileSync(
      join(import.meta.dirname, '../../lib/graphql/base.graphql'),
      'utf-8',
    );
    const userSchema = readFileSync(
      join(import.meta.dirname, '../../lib/graphql/domains/user.graphql'),
      'utf-8',
    );
    const contentSchema = readFileSync(
      join(import.meta.dirname, '../../lib/graphql/domains/content.graphql'),
      'utf-8',
    );
    const librarySchema = readFileSync(
      join(import.meta.dirname, '../../lib/graphql/domains/library.graphql'),
      'utf-8',
    );

    const mergedSchema = [baseSchema, userSchema, contentSchema, librarySchema].join('\n');

    expect(() => {
      buildSchema(mergedSchema);
    }).not.toThrow();
  });

  it('should have all types from all domains', () => {
    const baseSchema = readFileSync(
      join(import.meta.dirname, '../../lib/graphql/base.graphql'),
      'utf-8',
    );
    const userSchema = readFileSync(
      join(import.meta.dirname, '../../lib/graphql/domains/user.graphql'),
      'utf-8',
    );
    const contentSchema = readFileSync(
      join(import.meta.dirname, '../../lib/graphql/domains/content.graphql'),
      'utf-8',
    );
    const librarySchema = readFileSync(
      join(import.meta.dirname, '../../lib/graphql/domains/library.graphql'),
      'utf-8',
    );

    const mergedSchema = [baseSchema, userSchema, contentSchema, librarySchema].join('\n');
    const schema = buildSchema(mergedSchema);

    // User domain
    expect(schema.getType('User')).toBeDefined();
    expect(schema.getType('UserPreferences')).toBeDefined();

    // Content domain
    expect(schema.getType('Manga')).toBeDefined();
    expect(schema.getType('Chapter')).toBeDefined();

    // Library domain
    expect(schema.getType('LibraryEntry')).toBeDefined();
    expect(schema.getType('ReadingHistory')).toBeDefined();
  });

  it('should have extended Query and Mutation types', () => {
    const baseSchema = readFileSync(
      join(import.meta.dirname, '../../lib/graphql/base.graphql'),
      'utf-8',
    );
    const userSchema = readFileSync(
      join(import.meta.dirname, '../../lib/graphql/domains/user.graphql'),
      'utf-8',
    );
    const contentSchema = readFileSync(
      join(import.meta.dirname, '../../lib/graphql/domains/content.graphql'),
      'utf-8',
    );
    const librarySchema = readFileSync(
      join(import.meta.dirname, '../../lib/graphql/domains/library.graphql'),
      'utf-8',
    );

    const mergedSchema = [baseSchema, userSchema, contentSchema, librarySchema].join('\n');
    const schema = buildSchema(mergedSchema);

    const queryFields = schema.getQueryType()?.getFields();
    const mutationFields = schema.getMutationType()?.getFields();

    // Should have fields from all domains
    expect(Object.keys(queryFields || {})).toContain('getProfile');
    expect(Object.keys(queryFields || {})).toContain('searchManga');
    expect(Object.keys(queryFields || {})).toContain('getLibrary');

    expect(Object.keys(mutationFields || {})).toContain('updatePreferences');
    expect(Object.keys(mutationFields || {})).toContain('createManga');
    expect(Object.keys(mutationFields || {})).toContain('addToLibrary');
  });
});
