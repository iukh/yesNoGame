import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.less']
})
export class MainHeaderComponent implements OnInit {
  isAdmin: string;
  constructor(private cookieService: CookieService) { }
  ngOnInit() {
    this.isAdmin =  this.cookieService.get('isAdmin');
    console.log(this.isAdmin);
  }
}
