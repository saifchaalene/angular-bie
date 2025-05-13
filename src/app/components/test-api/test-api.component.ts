import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JoomlaApiService } from '../../services/joomla-api.service';

@Component({
  selector: 'app-test-api',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-api.component.html',
  styleUrls: ['./test-api.component.scss']
})
export class TestApiComponent implements OnInit {
  userList: any[] = [];

  constructor(private joomlaApi: JoomlaApiService) {}

  ngOnInit(): void {
    this.joomlaApi.getUsers().subscribe({
      next: (res: any) => {
        console.log('✅ Response:', res);
        this.userList = res.data; 
      },
      error: (err) => {
        console.error(' ERROR (401 likely):', err);
      }
    });
  }
}
