import test from 'node:test';
import assert from 'node:assert/strict';
import { createUid, resetUidFactoryForTests } from '../src/core/UidFactory.js';

test('UIDs are deterministic and unique inside a process', () => {
  resetUidFactoryForTests();
  const ids = Array.from({ length: 1000 }, () => createUid('card'));
  assert.equal(new Set(ids).size, 1000);
  assert.equal(ids[0], 'card-000001');
  assert.equal(ids.at(-1), 'card-001000');
});

test('UID factory rejects empty prefixes', () => {
  resetUidFactoryForTests();
  assert.throws(() => createUid(''), /UID_PREFIX_REQUIRED/);
});
