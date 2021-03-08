import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Notification } from '../../notification.model';

@Component({
  selector: 'app-notification-card',
  templateUrl: './notification-card.component.html',
  styleUrls: ['./notification-card.component.scss'],
})
export class NotificationCardComponent {
  alertTitle;
  alertContent;

  constructor(@Inject(MAT_DIALOG_DATA) public alert: Notification) {
    this.alertTitle = alert.subject;
    this.alertContent = alert.message;
  }
}
