export type TypeStatus = 'standard' | 'error' | 'success' | 'warning' | 'primary';

export interface KemetAlertInterface {
  opened: boolean,
  reveal: boolean,
  closable: boolean,
  borderStatus: string,
  hidden: boolean,
  overlay: string,
  status: TypeStatus,
}
