import { NotificationMode, NotificationType } from 'src/app/app.constants';

export class Notification {
  id!: string;
  type!: NotificationType;
  subject?: string;
  message!: string;
  mode: NotificationMode = NotificationMode.Alert;
  autoClose = true;
  fade = true;

  constructor(init?: Partial<Notification>) {
    Object.assign(this, init);
  }
}
