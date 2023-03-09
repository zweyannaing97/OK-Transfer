import { Component, OnInit } from '@angular/core';
import { UserTypeConstant } from 'src/app/core/constants/userType.constants';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  doctorType = UserTypeConstant.DOCTOR;
  patientType = UserTypeConstant.PATIENT;
  selectedUserType = this.patientType;

  constructor() { }

  ngOnInit(): void {
  }

  onChangeUserType(userType: any) {
    this.selectedUserType = userType;
  }
}
