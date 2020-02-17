import * as _ from "lodash";

export const AVAILABLE_PAIRS = [
  ['BTC', 'BRL'],
  ['BTC', 'USD'],
];

export enum PRECISION {
  P0 = 'P0',
  R0 = 'R0'
};

// GENERATED (should not be changed manually)

export const AVAILABLE_SYMBOLS = _.map(AVAILABLE_PAIRS, p => `t${p[0]}${p[1]}`);
