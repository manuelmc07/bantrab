import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Constants } from './constants';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private snackBar: MatSnackBar) {}

  public showToast(type: any, message: any): void {
    this.snackBar.open(message, Constants.TOAST_ALERT, {
      duration: 2000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: type === Constants.TOAST_TYPE_ERROR ? ['toast-error'] : ['toast-success'],
    });
  }

  public showNotificationToast(message: any, lang: any): void {
    this.snackBar.open(
      message,
      lang === 'es'
      ? Constants.TOAST_ALERT_ES
      : Constants.TOAST_ALERT_EN, {
      duration: 10000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: ['toast-notification'],
    });
  }
}
