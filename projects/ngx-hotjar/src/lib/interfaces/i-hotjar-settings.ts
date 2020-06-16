/**
 * Ngx Htjar Confguration Parameters.
 */
export interface IHotjarSettings {
  /** Hotjar tracking code, aka, SITE ID */
  trackingCode: string;
  /** Script Versrion, default 6 */
  version?: number;
  /** When ennable, trace all miss `hj()` call. */
  ennableTracing?: boolean;
  /** Override default URI */
  uri?: string;
}
