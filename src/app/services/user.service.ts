import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CurrentUser {
  id: number;
  name: string;
  username: string;
  email: string;
  logged_in: boolean;
}

@Injectable({ providedIn: 'root' })
export class UserService {
  private apiUrl = '/administrator/index.php?option=com_bie_members&task=user.getCurrent&format=json';

  constructor(private http: HttpClient) {}

  getCurrentUser(): Observable<{ success: boolean; data: CurrentUser }> {
    return this.http.get<{ success: boolean; data: CurrentUser }>(this.apiUrl, {
      withCredentials: true  
    });
  }
}
