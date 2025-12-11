import { existsSync } from 'node:fs';
import { join } from 'node:path';

import { describe, expect, it } from 'vitest';

describe('Build Pipeline', () => {
  const libPath = join(import.meta.dirname, '../lib');

  it('should have compiled JavaScript files', () => {
    expect(existsSync(join(libPath, 'index.js'))).toBe(true);
    expect(existsSync(join(libPath, 'graphql/index.js'))).toBe(true);
    expect(existsSync(join(libPath, 'graphql/types.js'))).toBe(true);
  });

  it('should have TypeScript declaration files', () => {
    expect(existsSync(join(libPath, 'index.d.ts'))).toBe(true);
    expect(existsSync(join(libPath, 'graphql/index.d.ts'))).toBe(true);
    expect(existsSync(join(libPath, 'graphql/types.d.ts'))).toBe(true);
  });

  it('should have GraphQL schema files', () => {
    expect(existsSync(join(libPath, 'graphql/base.graphql'))).toBe(true);
    expect(existsSync(join(libPath, 'graphql/domains/user.graphql'))).toBe(true);
    expect(existsSync(join(libPath, 'graphql/domains/content.graphql'))).toBe(true);
    expect(existsSync(join(libPath, 'graphql/domains/library.graphql'))).toBe(true);
  });

  it('should have merged schema file after build', () => {
    // This file should be created by postbuild script
    expect(existsSync(join(libPath, 'graphql/schema.graphql'))).toBe(true);
  });

  it('should have scripts directory', () => {
    expect(existsSync(join(import.meta.dirname, '../scripts/merge-schema.ts'))).toBe(true);
  });
});
