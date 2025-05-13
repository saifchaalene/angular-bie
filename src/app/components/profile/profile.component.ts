import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService, CurrentUser } from '../../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,

  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user = {
    name: 'Troisième Secrétaire',
    employer: 'Afghanistan',
    gender: 'Female',
    email: 'n.efatsarwari@mfa.af',
    phone: '+33 1 45 25 05 29',
    mobile: '+33 6 03 65 23 23',
    workAddress: `AMBASSADE D'AFGHANISTAN\n32 avenue Raphaël\nPARIS, 75016\nFrance`,
    language: 'French',
    emailFormat: 'Both',
    image: 'assets/id_card.jpg', 
    contactId: 8904,
    contactType: 'Individual'
  };
  cid: number | null = null;

  user2: CurrentUser | null = null;
  isLoading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userService.getCurrentUser2().subscribe({
      next: (res) => {
        console.log('✅ User:', res);
        this.user2 = res.data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error(' Error fetching user:', err);
        this.isLoading = false;
      }
    });
  }
}
