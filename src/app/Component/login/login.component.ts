import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../Services/userservice/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,
    private loginService: UserService,
    private router: Router,
    private snackbar: MatSnackBar) { }

  ngOnInit() {
    this.login = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  get f() { return this.login.controls; }

  loginForm() {
    console.log('values in login form', this.login.value);
    this.loginService.Login(this.login.value).subscribe(response => {
      console.log("login response", response['token']);
      localStorage.setItem("token", response['token']);
      this.snackbar.open("User Logged in Successfully", '', {
        duration: 2000,
      });
      this.router.navigate(['/dashboard'])

    }, error => {
      console.log("login response", error);
    })
  }
  navigate() {
    console.log("navigate")
    this.router.navigate(['/Registration'])
  }
  navigatepage() {
    console.log("navigatepage")
    this.router.navigate(['/ForgetPassword'])
  }
}


