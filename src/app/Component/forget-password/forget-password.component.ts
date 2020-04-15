import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
import { UserService } from '../../Services/userservice/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  submitted;
  email;
  forgetForm: FormGroup;
  hide = true;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private forgetpasswordservice: UserService,
    private snackbar: MatSnackBar
  ) { }

  gotoLogin() {
    console.log("navigate")
    this.router.navigate(['/login'])
  }

  ngOnInit() {
    this.forgetForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('([a-z0-9](.?[a-z0-9]){3,}@g(oogle)?mail.com)$')]]
    });
  }

  get f() { return this.forgetForm.controls; }

  forget() {
    console.log('values in login form', this.forgetForm.value);
    this.forgetpasswordservice.ForgetPassword(this.forgetForm.value).subscribe(response => {
      console.log("forget response", response);
      this.snackbar.open("Password Link has been sent to the registered Email", '', {
        duration: 2000,
      });
    }, error => {
      console.log("forget response", error);
    })
  }
}


