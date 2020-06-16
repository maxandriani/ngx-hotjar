/**
 * Hotjar Library
 */
export interface HjFn extends Function {
  (...args: Array<any>): void;
  q: Array<any>;
}
