import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService, CurrentUser } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  cid: number | null = null;

  user: CurrentUser = {
    id: 0,
    name: '',
    username: '',
    email: '',
    logged_in: false
  };

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const cidParam = params['cid'];
      this.cid = cidParam ? +cidParam : null;
    });

    this.userService.getCurrentUser().subscribe({
      next: res => {
        if (res.success) {
          this.user = res.data;
          console.log('logged-in user:', this.user);
        }
      },
      error: err => {
        console.error('offfffff', err);
      }
    });
  }
}
