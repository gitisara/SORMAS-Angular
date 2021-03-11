import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DIALOG_ICON_CLOSE } from '../../app.constants';
import { DialogAction } from './_services/dialogAction';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  iconClose = DIALOG_ICON_CLOSE;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      title: string;
      titleIcon: string;
      message: string;
      actions: DialogAction[];
    },
    private mdDialogRef: MatDialogRef<DialogComponent>
  ) {}

  public confirmAction(type: string): void {
    this.close(type);
  }

  public close(value: any): void {
    this.mdDialogRef.close(value);
  }
}
