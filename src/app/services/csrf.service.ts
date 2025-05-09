// csrf.service.ts
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CsrfService {
  /** Get the CSRF token name from Joomla meta tag */
  getTokenKey(): string {
    const key = document.querySelector('meta[name="csrf-token-key"]')?.getAttribute('content');
    console.log('[CSRF] Token Key:', key || 'csrf.token');
    return key || 'csrf.token';
  }

  /** Get the CSRF token value from Joomla meta tag */
  getToken(): string {
    const token = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
    console.log('[CSRF] Token Value:', token || '1');
    return token || '1';
  }
}
