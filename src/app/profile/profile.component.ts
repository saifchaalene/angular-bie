import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService, CurrentUser } from '../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,

  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  cid: number | null = null;

  user: CurrentUser | null = null;
  isLoading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userService.getCurrentUser2().subscribe({
      next: (res) => {
        console.log('✅ User:', res);
        this.user = res.data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('❌ Error fetching user:', err);
        this.isLoading = false;
      }
    });
  }
}
