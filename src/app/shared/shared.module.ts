import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TableVirtualScrollModule } from 'ng-table-virtual-scroll';

import { MaterialModule } from '../material.module';

import { LayoutComponent } from './layout/layout.component';
import { LocaleSelectComponent } from './locale-select/locale-select.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TableComponent } from './table/table.component';
import { PropertyGetterPipe } from './pipes/property-getter/property-getter.pipe';
import { MenuComponent } from './layout/menu/menu.component';
import { NotificationModule } from './notification';
import { DialogModule } from './dialog';

@NgModule({
  declarations: [
    LayoutComponent,
    NotFoundComponent,
    LocaleSelectComponent,
    TableComponent,
    PropertyGetterPipe,
    MenuComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    TableVirtualScrollModule,
    NotificationModule,
    DialogModule,
  ],
  exports: [
    LayoutComponent,
    NotFoundComponent,
    LocaleSelectComponent,
    TableComponent,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NotificationModule,
  ],
})
export class SharedModule {}
