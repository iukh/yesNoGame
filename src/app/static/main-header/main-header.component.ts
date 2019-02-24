import { Component, OnInit, Input } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.less']
})
export class MainHeaderComponent implements OnInit {
  isAdmin: boolean;
  constructor(private cookieService: CookieService,
              private router: Router,
              private userService: UserService) {
    this.isAdmin = this.userService.isCurrentUserAdmin.subscribe(suc => this.isAdmin = suc);
  }
  ngOnInit() {
  }
  logout() {
    this.router.navigate(['/auth']);
    this.cookieService.deleteAll();
    console.log(this.cookieService.getAll());
  }
}
