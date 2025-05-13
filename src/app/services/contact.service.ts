import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, catchError, throwError, map } from 'rxjs';
import { Contact } from '../models/contact.model';

interface JoomlaJsonResponse {
  success: boolean;
  message?: string;
  data?: Contact;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private baseUrl = 'http://test82mac.bie-paris.local/administrator/index.php';

  constructor(private http: HttpClient) {}

  getContactById(id: number): Observable<Contact> {
    const params = new HttpParams()
      .set('option', 'com_bie_members')
      .set('task', 'contact.getContact')
      .set('format', 'json')
      .set('id', id.toString());

    return this.http
      .get<JoomlaJsonResponse>(this.baseUrl, { params, withCredentials: true })
      .pipe(
        map((response) => {
          if (response.success && response.data) {
            return response.data;
          }
          throw new Error(response.message || 'Unknown error');
        }),
        catchError((err) => {
          console.error('Failed to fetch contact', err);
          return throwError(() => new Error('Failed to fetch contact'));
        })
      );
  }
}
