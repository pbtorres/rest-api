import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './model/User';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users!: User[];

  constructor( 
    private userService: UserService,
    private route: Router,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.userService.getAll().subscribe(user => {
      this.users = user;
    });
  }

  deleteById(userId: number) {
    this.userService.deleteById(userId).subscribe(() => {
      this.snackbar.open("Delete success", "OK", {
        verticalPosition: "top",
        horizontalPosition: "center",
        duration: 3000
      });
      this.getAll();
    });
  }

}
