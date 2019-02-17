import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.less']
})
export class AuthComponent implements OnInit {
  isLoginFormActive = false;
  constructor() { }

  ngOnInit() {
  }
  setLoginButtonClicked(value: boolean) {
    this.isLoginFormActive = value;
  }

}
