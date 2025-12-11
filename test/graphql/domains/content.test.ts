import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import { buildSchema, type GraphQLObjectType } from 'graphql';
import { describe, expect, it } from 'vitest';

const contentSchema = readFileSync(
  join(import.meta.dirname, '../../../lib/graphql/domains/content.graphql'),
  'utf-8',
);
const baseSchema = readFileSync(
  join(import.meta.dirname, '../../../lib/graphql/base.graphql'),
  'utf-8',
);

describe('Content Domain Schema', () => {
  it('should be valid GraphQL', () => {
    expect(() => {
      buildSchema(`${baseSchema}\n${contentSchema}`);
    }).not.toThrow();
  });

  it('should contain Manga type with all required fields', () => {
    const schema = buildSchema(`${baseSchema}\n${contentSchema}`);
    const mangaType = schema.getType('Manga') as GraphQLObjectType;
    expect(mangaType).toBeDefined();

    const fields = mangaType.getFields();
    expect(fields.id).toBeDefined();
    expect(fields.slug).toBeDefined();
    expect(fields.title).toBeDefined();
    expect(fields.sourceName).toBeDefined();
    expect(fields.sourceId).toBeDefined();
    expect(fields.isNsfw).toBeDefined();
  });

  it('should contain Chapter type', () => {
    const schema = buildSchema(`${baseSchema}\n${contentSchema}`);
    const chapterType = schema.getType('Chapter') as GraphQLObjectType;
    expect(chapterType).toBeDefined();

    const fields = chapterType.getFields();
    expect(fields.number).toBeDefined();
    expect(fields.images).toBeDefined();
  });

  it('should contain ChapterImage type', () => {
    const schema = buildSchema(`${baseSchema}\n${contentSchema}`);
    const imageType = schema.getType('ChapterImage');
    expect(imageType).toBeDefined();
  });

  it('should extend Query with content operations', () => {
    const schema = buildSchema(`${baseSchema}\n${contentSchema}`);
    const queryType = schema.getQueryType();
    const fields = queryType?.getFields();

    expect(fields?.searchManga).toBeDefined();
    expect(fields?.manga).toBeDefined();
    expect(fields?.mangaBySlug).toBeDefined();
    expect(fields?.chapters).toBeDefined();
  });

  it('should contain MangaStatus enum', () => {
    const schema = buildSchema(`${baseSchema}\n${contentSchema}`);
    const statusEnum = schema.getType('MangaStatus');
    expect(statusEnum).toBeDefined();

    if (statusEnum && 'getValues' in statusEnum) {
      const values = statusEnum.getValues();
      expect(values.find((v) => v.name === 'ONGOING')).toBeDefined();
      expect(values.find((v) => v.name === 'COMPLETED')).toBeDefined();
    }
  });
});
