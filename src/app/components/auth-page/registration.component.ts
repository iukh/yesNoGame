import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormBuilder, Validators, FormControl, ValidationErrors } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.less']
})
export class RegistrationComponent implements OnInit {
  userData: FormGroup;
  user: User;
  constructor(private fb: FormBuilder,
              private userService: UserService,
              private router: Router,
              private cookieService: CookieService) { }
  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.userData = this.fb.group({
      name: [null, Validators.required],
      email: [null, Validators.required],
      password: [null, [Validators.required, this.passwordValidator]]
    });
  }
  onSubmit() {
    const controls = this.userData.controls;
    if (this.userData.invalid) {
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());
      return;
    }
    this.addUser(this.userData.value);
  }
  isControlInvalid(controlName: string): boolean {
    const control = this.userData.controls[controlName];
    const result = control.invalid && control.touched;
    return result;
  }
  private passwordValidator(controlPassword: FormControl): ValidationErrors {
    const control = controlPassword.value;
    if (controlPassword.touched) {
      if (control.length < 6 && control.length > 0) {
        console.log('wrong password');
        return { invalidPassword: 'The password must contain at least 6 symbols'};
      } else {
      }
    }
    return null;
  }
  addUser (user) {
    return this.userService.addUser(user).subscribe(
      suc => {
        console.log('SUCCESS')
        this.user = suc;
        this.cookieService.set('userId', suc._id);
        this.cookieService.set('isAdmin', `${suc.isAdmin}`);
        console.log(this.user);
        this.userService.changeUserStatus(false);
        this.router.navigate(['/home']);
      },
      err => {
        console.log('ERROR');
        console.log(err);
      });
  }
}
