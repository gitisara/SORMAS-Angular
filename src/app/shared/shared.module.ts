import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material.module';
import { LayoutComponent } from './layout/layout.component';
import { LocaleSelectComponent } from './locale-select/locale-select.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MenuComponent } from './layout/menu/menu.component';
// import { NotificationModule } from './notifications/notification.module';

@NgModule({
  declarations: [LayoutComponent, NotFoundComponent, LocaleSelectComponent, MenuComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    // NotificationModule,
  ],
  exports: [
    LayoutComponent,
    NotFoundComponent,
    LocaleSelectComponent,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    // NotificationModule,
  ],
})
export class SharedModule {}
