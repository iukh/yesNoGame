import { Component, OnInit, SecurityContext } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.less']
})
export class UserDetailsComponent implements OnInit {
  users: User[];
  constructor(private userService: UserService,
              private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    return this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }
  deleteUser(user: User) {
    this.users = this.users.filter(a => a !== user);
    this.userService.deleteUser(user).subscribe();
  }
}
