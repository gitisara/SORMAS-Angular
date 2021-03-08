import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs';

import {
  NotificationMode,
  NotificationType,
  NOTIFICATION_AUTO_CLOSE_DELAY,
} from 'src/app/app.constants';
import { Notification } from './notification.model';
import { NotificationCardComponent } from './_components/notification-card/notification-card.component';
import { NotificationService } from './_services/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit, OnDestroy {
  @Input() id = 'default-alert';
  @Input() autoCloseDelay = NOTIFICATION_AUTO_CLOSE_DELAY;
  @Input() mode: NotificationMode = NotificationMode.Alert;

  alerts: Notification[] = [];
  alertSubscription!: Subscription;
  routeSubscription!: Subscription;

  constructor(
    private router: Router,
    private alertService: NotificationService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.alertSubscription = this.alertService.onAlert(this.id).subscribe((alert) => {
      if (!alert.message) {
        this.alerts = [];
        return;
      }

      if (alert.mode === NotificationMode.Banner) {
        this.pushBanner(alert);
        return;
      }

      this.pushAlert(alert);
    });

    this.routeSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.alertService.clear(this.id);
      }
    });
  }

  ngOnDestroy(): void {
    this.alertSubscription.unsubscribe();
    this.routeSubscription.unsubscribe();
  }

  removeAlert(alert: Notification): void {
    if (!this.alerts.includes(alert)) {
      return;
    }

    this.alerts = this.alerts.filter((x) => x !== alert);
  }

  cssClass(alert: Notification): string {
    if (!alert) {
      return '';
    }

    const classes = ['alert', 'alert-dismissable'];

    const alertTypeClass = {
      [NotificationType.Success]: 'alert-success',
      [NotificationType.Error]: 'alert-error',
      [NotificationType.Info]: 'alert-info',
      [NotificationType.Warning]: 'alert-warning',
    };

    classes.push(alertTypeClass[alert.type]);

    return classes.join(' ');
  }

  pushAlert(alert: Notification): void {
    const dialogRef = this.dialog.open(NotificationCardComponent, {
      data: {
        ...alert,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      // eslint-disable-next-line no-console
      console.log(`Dialog result: ${result}`);
    });
  }

  pushBanner(alert: Notification): void {
    this.alerts.push(alert);

    if (alert.autoClose) {
      setTimeout(() => this.removeAlert(alert), this.autoCloseDelay);
    }
  }
}
