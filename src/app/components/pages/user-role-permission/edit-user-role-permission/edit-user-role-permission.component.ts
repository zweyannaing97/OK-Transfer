import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-user-role-permission',
  templateUrl: './edit-user-role-permission.component.html',
  styleUrls: ['./edit-user-role-permission.component.scss']
})
export class EditUserRolePermissionComponent implements OnInit {

  selected = 'User';
  hide=true;
  constructor() { }

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

