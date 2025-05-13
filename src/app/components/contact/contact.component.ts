import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactId!: number;
  contact?: Contact;
  loading = true;
  error = '';

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    const cidParam = this.route.snapshot.paramMap.get('cid');
    console.log('[ContactComponent] Received cid param:', cidParam);
  
    this.contactId = Number(cidParam);
  
    if (isNaN(this.contactId)) {
      this.error = 'Invalid contact ID';
      this.loading = false;
      console.error('[ContactComponent] contactId is NaN');
      return;
    }
  
    this.contactService.getContactById(this.contactId).subscribe({
      next: (data) => {
        console.log('[ContactComponent] Fetched contact data:', data);
        this.contact = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('[ContactComponent] Error fetching contact:', err);
        this.error = err.message;
        this.loading = false;
      }
    });
  }
  
}
