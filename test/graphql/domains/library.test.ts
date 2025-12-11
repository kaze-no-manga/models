import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import { buildSchema, type GraphQLObjectType } from 'graphql';
import { describe, expect, it } from 'vitest';

const librarySchema = readFileSync(
  join(import.meta.dirname, '../../../lib/graphql/domains/library.graphql'),
  'utf-8',
);
const baseSchema = readFileSync(
  join(import.meta.dirname, '../../../lib/graphql/base.graphql'),
  'utf-8',
);

describe('Library Domain Schema', () => {
  it('should be valid GraphQL', () => {
    expect(() => {
      buildSchema(`${baseSchema}\n${librarySchema}`);
    }).not.toThrow();
  });

  it('should contain LibraryEntry type', () => {
    const schema = buildSchema(`${baseSchema}\n${librarySchema}`);
    const entryType = schema.getType('LibraryEntry') as GraphQLObjectType;
    expect(entryType).toBeDefined();

    const fields = entryType.getFields();
    expect(fields.userId).toBeDefined();
    expect(fields.mangaId).toBeDefined();
    expect(fields.status).toBeDefined();
  });

  it('should contain ReadingHistory type', () => {
    const schema = buildSchema(`${baseSchema}\n${librarySchema}`);
    const historyType = schema.getType('ReadingHistory');
    expect(historyType).toBeDefined();
  });

  it('should extend Query with library operations', () => {
    const schema = buildSchema(`${baseSchema}\n${librarySchema}`);
    const queryType = schema.getQueryType();
    const fields = queryType?.getFields();

    expect(fields?.library).toBeDefined();
    expect(fields?.libraryEntry).toBeDefined();
    expect(fields?.readingHistory).toBeDefined();
  });

  it('should extend Mutation with library operations', () => {
    const schema = buildSchema(`${baseSchema}\n${librarySchema}`);
    const mutationType = schema.getMutationType();
    const fields = mutationType?.getFields();

    expect(fields?.addToLibrary).toBeDefined();
    expect(fields?.updateLibraryEntry).toBeDefined();
    expect(fields?.removeFromLibrary).toBeDefined();
  });

  it('should contain ReadingStatus enum', () => {
    const schema = buildSchema(`${baseSchema}\n${librarySchema}`);
    const statusEnum = schema.getType('ReadingStatus');
    expect(statusEnum).toBeDefined();

    if (statusEnum && 'getValues' in statusEnum) {
      const values = statusEnum.getValues();
      expect(values.find((v) => v.name === 'READING')).toBeDefined();
      expect(values.find((v) => v.name === 'PLAN_TO_READ')).toBeDefined();
    }
  });
});
