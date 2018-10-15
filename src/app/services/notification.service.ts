import { Injectable } from '@angular/core';
import { MatSnackBar,MatSnackBarConfig } from "@angular/material";


@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor( private snackbar: MatSnackBar) { }

  config : MatSnackBarConfig = {
    duration : 3000,
    horizontalPosition : 'right',
    verticalPosition : 'top'
  }
  
  success(msg){
    this.config['panelClass'] = ['success','notification'];
    this.snackbar.open(msg,"",this.config);
  }

}

