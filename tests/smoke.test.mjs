import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';

const read = path => fs.readFile(new URL(`../${path}`, import.meta.url), 'utf8');

test('single clean entrypoint exists', async () => {
  const index = await read('index.html');
  assert.match(index, /NÉMESIS: REINOS DEL CAOS/);
  assert.match(index, /\.\/src\/app\/main\.js/);
  assert.doesNotMatch(index, /game\.js/i);
});

test('legacy project names are absent from entrypoint', async () => {
  const index = await read('index.html');
  assert.doesNotMatch(index, /v19|runtime-clean|duelmaster/i);
});
