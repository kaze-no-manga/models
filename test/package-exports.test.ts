import { existsSync } from 'node:fs';
import { join } from 'node:path';

import { describe, expect, it } from 'vitest';

describe('Package Exports', () => {
  it('should export GraphQL generated enums from index', async () => {
    const exports = await import('../lib/index.js');

    // Should have GraphQL generated enums
    expect(exports).toHaveProperty('ImageWidth');
    expect(exports).toHaveProperty('Theme');
    expect(exports).toHaveProperty('MangaStatus');
    expect(exports).toHaveProperty('ReadingStatus');
  });

  it('should export GraphQL types from graphql module', async () => {
    const exports = await import('../lib/graphql/index.js');

    // Should re-export types
    expect(exports).toHaveProperty('ImageWidth');
    expect(exports).toHaveProperty('MangaStatus');
  });

  it('should have generated types file with type definitions', async () => {
    // This will fail if codegen hasn't run
    const types = await import('../lib/graphql/types.js');

    // Check for actual exported types (not runtime values)
    expect(typeof types).toBe('object');
    expect(types).toHaveProperty('ImageWidth');
    expect(types).toHaveProperty('MangaStatus');
  });

  it('should export TypeScript declaration files', () => {
    // Check that .d.ts files exist alongside .js files
    const libPath = join(import.meta.dirname, '../lib');
    const indexDts = join(libPath, 'index.d.ts');
    const typesDts = join(libPath, 'graphql/types.d.ts');

    expect(existsSync(indexDts)).toBe(true);
    expect(existsSync(typesDts)).toBe(true);
  });
});
