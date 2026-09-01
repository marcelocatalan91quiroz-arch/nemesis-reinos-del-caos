import { CARD_TYPES } from '../core/CardTypes.js';
import { createUid } from '../core/UidFactory.js';

const status = document.getElementById('status');

if (!status) {
  throw new Error('APP_STATUS_ROOT_MISSING');
}

const bootProbe = Object.freeze({
  game: 'NÉMESIS: REINOS DEL CAOS',
  cardTypes: Object.keys(CARD_TYPES).length,
  probeUid: createUid('boot')
});

status.textContent = `Núcleo listo · ${bootProbe.cardTypes} tipos · ${bootProbe.probeUid}`;
window.NEMESIS_REINOS_DEL_CAOS = bootProbe;
