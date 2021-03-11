export interface DialogAction {
  type: 'CANCEL' | 'PRIMARY' | 'SECONDARY';
  text: string;
  action: string;
}
