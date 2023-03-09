import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  otp_form_valid: boolean = false;
  form!:FormGroup
  otp_page:boolean = false;

  constructor( private _formBuilder: FormBuilder, private route: Router ) { }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      mobileNumber: ['', Validators.required],
    });
  }

  formValidation(){
    if (this.form.invalid) {
     this.otp_form_valid = false;
    }
    else{
      this.otp_form_valid = true;
    }
  }

  otpSubmit(){
    this.route.navigate(['/ChangePassword']);
  }

  cancelOTP() {
    this.route.navigate(['/auth/login']);
  }

}
