import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  users: Array<any> = [];

  constructor(private userService: UserService ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    return this.userService.getAll().subscribe(user => this.users = user);
  }

}
