import { NotificationMode, NotificationType } from 'src/app/app.constants';

export class Notification {
  id!: string;
  type!: NotificationType;
  subject?: string;
  message!: string;
  mode: NotificationMode = NotificationMode.Alert;
  actions?: [];
  autoClose = true;
  fade?: boolean;

  constructor(init?: Partial<Notification>) {
    Object.assign(this, init);
  }
}
