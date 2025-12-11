import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import { buildSchema } from 'graphql';
import { describe, expect, it } from 'vitest';

const userSchema = readFileSync(
  join(import.meta.dirname, '../../../lib/graphql/domains/user.graphql'),
  'utf-8',
);
const baseSchema = readFileSync(
  join(import.meta.dirname, '../../../lib/graphql/base.graphql'),
  'utf-8',
);

describe('User Domain Schema', () => {
  it('should be valid GraphQL', () => {
    expect(() => {
      buildSchema(`${baseSchema}\n${userSchema}`);
    }).not.toThrow();
  });

  it('should contain User type', () => {
    const schema = buildSchema(`${baseSchema}\n${userSchema}`);
    const userType = schema.getType('User');
    expect(userType).toBeDefined();
    expect(userType?.name).toBe('User');
  });

  it('should contain UserPreferences type', () => {
    const schema = buildSchema(`${baseSchema}\n${userSchema}`);
    const prefsType = schema.getType('UserPreferences');
    expect(prefsType).toBeDefined();
  });

  it('should extend Query with getProfile', () => {
    const schema = buildSchema(`${baseSchema}\n${userSchema}`);
    const queryType = schema.getQueryType();
    const getProfileField = queryType?.getFields().getProfile;
    expect(getProfileField).toBeDefined();
    expect(getProfileField?.type.toString()).toBe('User!');
  });

  it('should extend Mutation with updatePreferences', () => {
    const schema = buildSchema(`${baseSchema}\n${userSchema}`);
    const mutationType = schema.getMutationType();
    const updatePrefsField = mutationType?.getFields().updatePreferences;
    expect(updatePrefsField).toBeDefined();
  });

  it('should contain all required enums', () => {
    const schema = buildSchema(`${baseSchema}\n${userSchema}`);
    expect(schema.getType('ImageWidth')).toBeDefined();
    expect(schema.getType('Theme')).toBeDefined();
  });
});
