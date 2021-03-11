import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

import { NotificationMode, NotificationType } from 'src/app/app.constants';
import { Notification } from '../notification.model';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private subject = new Subject<Notification>();
  private subjectAction = new Subject<any>();
  private defaultId = 'default-alert';

  onNotification(id = this.defaultId): Observable<Notification> {
    return this.subject.asObservable().pipe(filter((x) => x && x.id === id));
  }

  onCloseNotification(): Observable<any> {
    return this.subjectAction.asObservable();
  }

  notify(alert: Notification): void {
    // eslint-disable-next-line no-param-reassign
    alert.id = alert.id || this.defaultId;
    this.subject.next(alert);
  }

  clear(id = this.defaultId): void {
    this.subject.next(new Notification({ id }));
  }

  // Convinience methods for alert style notification
  alertSuccess(message: string, options?: any): void {
    this.notify(
      new Notification({
        ...options,
        type: NotificationType.Success,
        mode: NotificationMode.Alert,
        message,
      })
    );
  }

  alertError(message: string, options?: any): void {
    this.notify(
      new Notification({
        ...options,
        type: NotificationType.Error,
        mode: NotificationMode.Alert,
        icon: 'highlight_off',
        message,
      })
    );
  }

  alertInfo(message: string, options?: any): void {
    this.notify(
      new Notification({
        ...options,
        type: NotificationType.Info,
        mode: NotificationMode.Alert,
        message,
      })
    );
  }

  alertWarn(message: string, options?: any): void {
    this.notify(
      new Notification({
        ...options,
        type: NotificationType.Warning,
        mode: NotificationMode.Alert,
        message,
      })
    );
  }

  // Convinience methods for banner style notification
  bannerSuccess(message: string, options?: any): void {
    this.notify(
      new Notification({
        ...options,
        type: NotificationType.Success,
        mode: NotificationMode.Banner,
        message,
      })
    );
  }

  bannerError(message: string, options?: any): void {
    this.notify(
      new Notification({
        ...options,
        type: NotificationType.Error,
        mode: NotificationMode.Banner,
        message,
      })
    );
  }

  bannerInfo(message: string, options?: any): void {
    this.notify(
      new Notification({
        ...options,
        type: NotificationType.Info,
        mode: NotificationMode.Banner,
        message,
      })
    );
  }

  bannerWarn(message: string, options?: any): void {
    this.notify(
      new Notification({
        ...options,
        type: NotificationType.Warning,
        mode: NotificationMode.Banner,
        message,
      })
    );
  }

  actionRequired(action: any): void {
    this.subjectAction.next(action);
  }
}
