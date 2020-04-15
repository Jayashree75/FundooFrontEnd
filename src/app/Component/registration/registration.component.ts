import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../Services/userservice/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  hide;
  registration: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,
    private registrationService: UserService,
    private router: Router) { }

  ngOnInit() {
    this.registration = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      type: ['', [Validators.required]]
    });
  }
  get f() { return this.registration.controls; }

  registrationForm() {
    console.log('values in Registration form', this.registration.value);
    this.registrationService.Registration(this.registration.value).subscribe(response => {
      console.log("Registration response", response);
    }, error => {
      console.log("Registration response", error);
    })
  }
  navigate() {
    console.log("navigate")
    this.router.navigate(['/login'])
  }
}
