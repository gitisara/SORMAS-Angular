export const VIRTUAL_SCROLL_TABLE_VISIBLE_ROWS_COUNT = 8;
export const VIRTUAL_SCROLL_PAGE_SIZE = 8;
export const NOTIFICATION_AUTO_CLOSE_DELAY = 3000;
export const DIALOG_MIN_WIDTH = 360;
export const DIALOG_MAX_WIDTH = 500;
export const DIALOG_ICON_CLOSE = 'highlight_off';

export enum IconsMap {
  PENDING = 'pending_actions',
  DONE = 'done',
  DISCARDED = 'cancel_presentation',
  'notification-success' = '',
  'notification-info' = '',
  'notification-warning' = '',
  'notification-error' = 'warning_amber',
}

export enum NotificationMode {
  Alert,
  Banner,
}

export enum NotificationType {
  Success = 'notification-success',
  Error = 'notification-error',
  Info = 'notification-info',
  Warning = 'notification-warning',
}
