import test from 'node:test';
import assert from 'node:assert/strict';
import { CARD_TYPES, isCardType } from '../src/core/CardTypes.js';

test('exactly six canonical card types exist', () => {
  assert.deepEqual(Object.values(CARD_TYPES), [
    'MONSTRUO', 'MAGICA', 'TRAMPA', 'ARMA', 'ARMADURA', 'RELIQUIA'
  ]);
});

test('card type validation is strict', () => {
  assert.equal(isCardType('MONSTRUO'), true);
  assert.equal(isCardType('monstruo'), false);
  assert.equal(isCardType(''), false);
});
