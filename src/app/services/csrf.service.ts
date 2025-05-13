import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CsrfService {
  getTokenKey(): string {
    const key = document.querySelector('meta[name="csrf-token-key"]')?.getAttribute('content');
    console.log('[CSRF] Token Key:', key || 'csrf.token');
    return key || 'csrf.token';
  }

  getToken(): string {
    const token = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
    console.log('[CSRF] Token Value:', token || '1');
    return token || '1';
  }
}
