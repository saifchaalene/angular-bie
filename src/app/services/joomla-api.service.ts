import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JoomlaApiService {
  private apiBase = 'http://test82mac.bie-paris.local/api/index.php/v1';

  constructor(private http: HttpClient) {}

  getUsers() {
    const headers = new HttpHeaders({
      'X-Joomla-Token': 'c2hhMjU2OjQwMDpiYTkwZmZiMDY4ZmQ5NDFjZDlmM2RkMGNiNTM3YTU4NmY3M2RlNWY3ZjM1ZWI4MDFhMjdjNDE1MGVlYWQ4ZjJm',  
    });

    return this.http.get(`${this.apiBase}/users`, { headers });
  }
}
