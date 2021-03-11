import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { DIALOG_MIN_WIDTH, DIALOG_MAX_WIDTH } from '../../../app.constants';
import { DialogComponent } from '../dialog.component';
import { DialogConfiguration } from './dialogConfiguration';

@Injectable({ providedIn: 'root' })
export class DialogService {
  constructor(private dialog: MatDialog) {}
  dialogRef!: MatDialogRef<DialogComponent>;

  public open(options: DialogConfiguration): void {
    this.dialogRef = this.dialog.open(DialogComponent, {
      minWidth: options.minWidth ?? DIALOG_MIN_WIDTH,
      maxWidth: options.maxWidth ?? DIALOG_MAX_WIDTH,
      panelClass: options.dialogType ?? '',
      data: {
        title: options.title,
        titleIcon: options.titleIcon,
        message: options.message,
        actions: options.actions,
      },
    });
  }

  public confirmed(): Observable<any> {
    return this.dialogRef.afterClosed();
  }
}
