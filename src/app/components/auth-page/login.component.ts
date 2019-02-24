import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  userData: FormGroup;
  isCustomerExist = true;
  constructor(private fb: FormBuilder,
              private userService: UserService,
              private cookieService: CookieService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.userData = this.fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required]
    });
  }
  isControlInvalid(controlName: string): boolean {
    const control = this.userData.controls[controlName];
    const result = control.invalid && control.touched;
    return result;
  }
  onSubmit() {
    const controls = this.userData.controls;
    if (this.userData.invalid) {
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());
      return;
    }
    this.loginUser(this.userData.value);
  }
  loginUser(user: User) {
    console.log(user);
    return this.userService.loginUser({
          username: user.email,
          password: user.password
        }).subscribe(
          suc => {
            console.log(suc);
            this.cookieService.set('userId',suc._id);
            this.cookieService.set('isAdmin',`${suc.isAdmin}`);
            if (suc.isAdmin) {
              this.router.navigate(['/admin']);
              this.userService.changeUserStatus(true);
            } else {
              this.router.navigate(['/home']);
              this.userService.changeUserStatus(false);
            }
          },
          err => {
            console.log('ERROR!!!'),
            this.isCustomerExist = false;
          }
        );
  }
}
