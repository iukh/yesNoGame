import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'test-project';
  userRole = false;
  changeUserStatus(value) {
    this.userRole = value;
    console.log('event here' + value);
  }
}
