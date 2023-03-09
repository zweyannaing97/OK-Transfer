import { Component, OnInit, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class ChangePasswordComponent implements OnInit {
  hide=true;
  hide1=true;
  hide2=true;
  constructor() { }

  ngOnInit(): void {
  }

}
