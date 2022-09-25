import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './model/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users!: User[];

  constructor( 
    private userService: UserService 
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.userService.getAll().subscribe(user => {
      this.users = user;
    });
  }

}
