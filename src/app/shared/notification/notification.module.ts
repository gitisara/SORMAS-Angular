import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';

import { NotificationComponent } from './notification.component';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [NotificationComponent],
  exports: [NotificationComponent],
})
export class NotificationModule {}
