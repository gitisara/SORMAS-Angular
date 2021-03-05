export class Notification {
  id!: string;
  type!: NotificationType;
  message!: string;

  constructor(init?: Partial<Notification>) {
    Object.assign(this, init);
  }
}

export enum NotificationType {
  Success,
  Error,
  Info,
  Warning,
}
