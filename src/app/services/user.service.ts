// user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders , HttpParams } from '@angular/common/http';
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
  private apiUrl = '/administrator/index.php?option=com_bie_members&task=user.getCurrent&format=json';
  private adminUrl = 'http://test82mac.bie-paris.local/administrator/index.php';

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


  getCurrentUser2(): Observable<{ success: boolean; data: CurrentUser }> {
    const csrfKey = '3524554c9ccecb839595a93a4315c327';
    const csrfValue = '1';
  
    const fullUrl =
      'http://test82mac.bie-paris.local/administrator/index.php?option=com_bie_members&task=user.getCurrent&format=json';
  
    const headers = new HttpHeaders({
      'Accept': 'application/json'
    });
  
    const params = new HttpParams().set(csrfKey, csrfValue);
  
    console.log('[UserService] Sending GET to:', fullUrl);
    console.log('[UserService] Params:', params.toString());
  
    return this.http.get<{ success: boolean; data: CurrentUser }>(fullUrl, {
      headers,
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
