import { Component } from '@angular/core';
import { NotificationMode } from '../app.constants';
import { NotificationService } from '../shared/notification';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  notificationMode = NotificationMode;

  constructor(public notificationService: NotificationService) {
    this.notificationService.onCloseNotification().subscribe((action) => {
      // eslint-disable-next-line no-console
      console.log(action);
    });
  }
}
