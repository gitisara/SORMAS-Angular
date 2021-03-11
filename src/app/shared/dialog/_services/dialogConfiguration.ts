import { DialogAction } from './dialogAction';

export interface DialogConfiguration {
  message: string;
  title?: string;
  titleIcon?: string;
  actions?: DialogAction[];
  maxWidth?: number;
  minWidth?: number;
  dialogType?: string;
}
