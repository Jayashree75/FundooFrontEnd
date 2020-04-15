import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../Services/userservice/user.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
  submitted;
  password;
  resetForm: FormGroup;
  hide = true;
  token: string;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private resetpasswordservice: UserService) { }


  ngOnInit() {
    this.token = this.route.snapshot.params['token'];
    console.log(this.token);
    this.resetForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

  }
  get f() { return this.resetForm.controls; }

  reset() {
    console.log('values in login form', this.resetForm.value);
    this.resetpasswordservice.Reset(this.resetForm.value, this.token).subscribe(response => {
      console.log("reset response", response);
      this.router.navigate(['/login'])
    }, error => {
      console.log("reset response", error);
    })
  }
}
