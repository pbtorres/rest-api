import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/users/services/user.service';
import { User } from '../model/User';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user!:User;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    const routParams = this.route.snapshot.paramMap;
    const userId = Number(routParams.get("id"));

    this.getOne(userId);
  }

  getOne(userId: number) {
    return this.userService.getOne(userId).subscribe(user => {
      this.user = user;
    });
  }

}
