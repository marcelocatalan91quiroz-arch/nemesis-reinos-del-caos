let sequence = 0;

export function createUid(prefix = 'card') {
  if (typeof prefix !== 'string' || prefix.trim() === '') {
    throw new TypeError('UID_PREFIX_REQUIRED');
  }
  sequence += 1;
  return `${prefix.trim().toLowerCase()}-${String(sequence).padStart(6, '0')}`;
}

export function resetUidFactoryForTests() {
  sequence = 0;
}
