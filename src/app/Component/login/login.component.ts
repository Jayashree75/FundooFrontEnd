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
  email;
  password;
  hide;
  submitted = false;
  constructor(private formBuilder: FormBuilder,
    private loginService: UserService,
    private router: Router,
    private snackbar: MatSnackBar, ) { }

  ngOnInit() {
    this.login = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  get f() { return this.login.controls; }

  loginForm() {
    this.loginService.Login(this.login.value).subscribe(response => {
      localStorage.setItem('token', response['token']);
      console.log(response)
      localStorage.setItem('userId', response.data.userId);
      localStorage.setItem('firstName', response.data.firstName);
      localStorage.setItem('fullName', response.data.firstName + " " + response.data.lastName);
      localStorage.setItem('email', response.data.email);
      localStorage.setItem('type', response.data.type);
      localStorage.setItem('Profile', response.data.priofilepic);
      this.snackbar.open("User Logged in Successfully", '', {
        duration: 2000,
      });
      this.router.navigate([''])

    }, error => {
      console.log("login response", error);
    })
  }
  navigate() {
    this.router.navigate(['/Registration'])
  }
  navigatepage() {
    this.router.navigate(['/ForgetPassword'])
  }
}


