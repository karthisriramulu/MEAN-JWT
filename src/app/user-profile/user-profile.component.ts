import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../shared/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  userDetails:any;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userService.getUserProfile().subscribe(
      (res:any) => {
        this.userDetails = res['user'];
      },
      err => {}
    )
  }

  onLogout() {
    this.userService.deleteToken();
    this.router.navigateByUrl('/login');
  }

}
