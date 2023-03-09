import { Component, OnInit } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { active } from 'd3';

@Component({
  selector: 'app-create-user-role-permission',
  templateUrl: './create-user-role-permission.component.html',
  styleUrls: ['./create-user-role-permission.component.scss']
})
export class CreateUserRolePermissionComponent implements OnInit {

  constructor() { }
  hide=true;
  ngOnInit(): void {
  }

  url = '../../../../assets/img/images/profile.png';
  onSelectFile(e:any){
    if (e.target.files) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result;
      };
    }
  }

}

