// user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, tap, catchError, throwError } from 'rxjs';
import { CsrfService } from './csrf.service';

export interface CurrentUser {
  id: number;
  name: string;
  username: string;
  email: string;
  logged_in: boolean;
}

@Injectable({ providedIn: 'root' })
export class UserService {
  private apiUrl = 'http://test82mac.bie-paris.local/administrator/index.php?option=com_bie_members&task=user.getCurrent&format=json';

  constructor(private http: HttpClient, private csrf: CsrfService) {}

  getCurrentUser(): Observable<{ success: boolean; data: CurrentUser }> {
    const tokenKey = this.csrf.getTokenKey();
    const token = this.csrf.getToken();

    const params = new HttpParams().set(tokenKey, token);

    console.log('[UserService] Sending GET to:', this.apiUrl);
    console.log('[UserService] Params:', params.toString());

    return this.http.get<{ success: boolean; data: CurrentUser }>(this.apiUrl, {
      withCredentials: true,
      params
    }).pipe(
      tap(res => console.log('[UserService] Response:', res)),
      catchError(error => {
        console.error('[UserService] Error:', error);
        return throwError(() => error);
      })
    );
  }
}
