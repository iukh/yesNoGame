import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {Validators} from '@angular/forms';
import {User} from '../../models/user';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.less']
})
export class MainHeaderComponent implements OnInit {
  isAdmin: string;
  constructor(private cookieService: CookieService,
              private router: Router) { }
  ngOnInit() {
    this.isAdmin =  this.cookieService.get('isAdmin');
    console.log(this.isAdmin);
  }
  logout() {
    this.router.navigate(['/auth']);
    this.cookieService.deleteAll();
    console.log(this.cookieService.getAll());
  }
}
