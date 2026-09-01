export const CARD_TYPES = Object.freeze({
  MONSTRUO: 'MONSTRUO',
  MAGICA: 'MAGICA',
  TRAMPA: 'TRAMPA',
  ARMA: 'ARMA',
  ARMADURA: 'ARMADURA',
  RELIQUIA: 'RELIQUIA'
});

export function isCardType(value) {
  return Object.values(CARD_TYPES).includes(value);
}
