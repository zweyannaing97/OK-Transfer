import { ConfirmAlertComponentComponent } from './../../../modal/confirm-alert-component/confirm-alert-component.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router,Event, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(public router: Router,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.logout();
  }

  logout(){
    const dialogRef = this.dialog.open(ConfirmAlertComponentComponent, {
      width: '550px',
      data: {
        message: 'Do you sure want to logout?',
        confirmButtonText: 'YES',
        cancelButtonText: 'NO',
        image: 'assets/img/logout_confirm.png'
      }
      });

      dialogRef.afterClosed().subscribe(result => {
        if(result) {
          this.router.navigate(['/auth/login']);
        }
        else {
        }
    });
  }
}
