import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

import { NotificationType } from 'src/app/app.constants';
import { Notification } from '../notification.model';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private subject = new Subject<Notification>();
  private defaultId = 'default-alert';

  onAlert(id = this.defaultId): Observable<Notification> {
    return this.subject.asObservable().pipe(filter((x) => x && x.id === id));
  }

  success(message: string, options?: any): void {
    this.alert(new Notification({ ...options, type: NotificationType.Success, message }));
  }

  error(message: string, options?: any): void {
    this.alert(new Notification({ ...options, type: NotificationType.Error, message }));
  }

  info(message: string, options?: any): void {
    this.alert(new Notification({ ...options, type: NotificationType.Info, message }));
  }

  warn(message: string, options?: any): void {
    this.alert(new Notification({ ...options, type: NotificationType.Warning, message }));
  }

  alert(alert: Notification): void {
    // eslint-disable-next-line no-param-reassign
    alert.id = alert.id || this.defaultId;
    this.subject.next(alert);
  }

  clear(id = this.defaultId): void {
    this.subject.next(new Notification({ id }));
  }
}
