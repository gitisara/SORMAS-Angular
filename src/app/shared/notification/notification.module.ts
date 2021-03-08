import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';

import { NotificationComponent } from './notification.component';
import { NotificationCardComponent } from './_components/notification-card/notification-card.component';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [NotificationComponent, NotificationCardComponent],
  exports: [NotificationComponent, NotificationCardComponent],
})
export class NotificationModule {}
