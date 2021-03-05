/* eslint-disable no-console */
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

import { Notification, NotificationType } from './notification.model';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private subject = new Subject<Notification>();
  private defaultId = 'default-notification';

  // enable subscribing to alerts observable
  onAlert(id = this.defaultId): Observable<Notification> {
    return this.subject.asObservable().pipe(filter((x) => x && x.id === id));
  }

  // convenience methods
  success(message: string, options?: any) {
    this.alert(new Notification({ ...options, type: NotificationType.Success, message }));
  }

  error(message: string, options?: any) {
    this.alert(new Notification({ ...options, type: NotificationType.Error, message }));
  }

  info(message: string, options?: any) {
    this.alert(new Notification({ ...options, type: NotificationType.Info, message }));
  }

  warn(message: string, options?: any) {
    this.alert(new Notification({ ...options, type: NotificationType.Warning, message }));
  }

  alert(alert: Notification) {
    console.log('ALERT => of type => ', alert);
    // eslint-disable-next-line no-param-reassign
    alert.id = alert.id || this.defaultId;
    this.subject.next(alert);
  }

  clear(id = this.defaultId) {
    this.subject.next(new Notification({ id }));
  }
}
