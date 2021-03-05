import { Component, OnInit, OnDestroy, Input } from '@angular/core';
// import { Router, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs';

import { Notification, NotificationType } from './notification.model';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit, OnDestroy {
  @Input() id = 'default-alert';
  @Input() fade = true;

  alerts: Notification[] = [];
  alertSubscription!: Subscription;
  // routeSubscription: Subscription;

  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
    // subscribe to new alert notifications
    this.alertSubscription = this.notificationService.onAlert(this.id).subscribe((alert) => {
      // clear alerts when an empty alert is received
      console.log(alert);
      if (!alert.message) {
        // filter out alerts without 'keepAfterRouteChange' flag
        // this.alerts = this.alerts.filter((x) => x.keepAfterRouteChange);
        // remove 'keepAfterRouteChange' flag on the rest
        // this.alerts.forEach((x) => delete x.keepAfterRouteChange);
        this.alerts = [];
        return;
      }
      // add alert to array
      this.alerts.push(alert);
      // auto close alert if required
      // if (alert.autoClose) {
      //   setTimeout(() => this.removeAlert(alert), 3000);
      // }
    });
    // clear alerts on location change
    // this.routeSubscription = this.router.events.subscribe((event) => {
    //   if (event instanceof NavigationStart) {
    //     this.notificationService.clear(this.id);
    //   }
    // });
  }
  ngOnDestroy() {
    this.alertSubscription.unsubscribe();
    // this.routeSubscription.unsubscribe();
  }
  removeAlert(alert: Notification) {
    // check if already removed to prevent error on auto close
    if (!this.alerts.includes(alert)) return;
    this.alerts = this.alerts.filter((x) => x !== alert);
    // if (this.fade) {
    //   // fade out alert
    //   this.alerts.find((x) => x === alert).fade = true;
    //   // remove alert after faded out
    //   setTimeout(() => {
    //     this.alerts = this.alerts.filter((x) => x !== alert);
    //   }, 250);
    // } else {
    //   // remove alert
    //   this.alerts = this.alerts.filter((x) => x !== alert);
    // }
  }
  cssClass(alert: Notification): string {
    if (!alert) return '';
    const classes = ['alert', 'alert-dismissable'];
    const alertTypeClass = {
      [NotificationType.Success]: 'alert-success',
      [NotificationType.Error]: 'alert-danger',
      [NotificationType.Info]: 'alert-info',
      [NotificationType.Warning]: 'alert-warning',
    };
    classes.push(alertTypeClass[alert.type]);
    // if (alert.fade) {
    //   classes.push('fade');
    // }
    return classes.join(' ');
  }
}
