import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

const params = new URLSearchParams(window.location.search);
const cid = params.get('cid');

if (cid) {
  console.log('[main.ts] Joomla popup mode detected — routing to /profile/' + cid);
  window.history.replaceState({}, '', '/profile/' + cid);
}

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error('[main.ts] Bootstrap error:', err));
