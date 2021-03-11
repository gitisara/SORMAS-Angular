import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs';

import { NotificationMode, NOTIFICATION_AUTO_CLOSE_DELAY, IconsMap } from 'src/app/app.constants';
import { DialogService } from '../dialog/_services/dialog.service';
import { Notification } from './notification.model';
import { NotificationService } from './_services/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit, OnDestroy {
  @Input() id = 'default-alert';
  @Input() autoCloseDelay = NOTIFICATION_AUTO_CLOSE_DELAY;

  alerts: Notification[] = [];
  alertSubscription!: Subscription;
  routeSubscription!: Subscription;

  constructor(
    private router: Router,
    private alertService: NotificationService,
    private dialogService: DialogService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.alertSubscription = this.alertService.onNotification(this.id).subscribe((alert) => {
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

  pushAlert(alert: Notification): void {
    this.dialogService.open({
      dialogType: alert.type,
      title: alert.subject,
      titleIcon: IconsMap[alert.type],
      message: alert.message,
      actions: alert.actions,
    });

    this.dialogService.confirmed().subscribe((action) => {
      this.alertService.actionRequired(action);
    });
  }

  pushBanner(banner: Notification): void {
    this.alerts.unshift(banner);

    if (banner.autoClose) {
      setTimeout(() => this.removeAlert(banner), this.autoCloseDelay);
    }
  }

  getClass(notification: Notification): string {
    const classes = ['banner'];

    classes.push(notification.type);

    return classes.join(' ');
  }
}
