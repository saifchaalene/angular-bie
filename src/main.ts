import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// 🧠 Check Joomla URL params before Angular boot
const params = new URLSearchParams(window.location.search);
const cid = params.get('cid');

if (cid) {
  console.log('[main.ts] Joomla popup mode detected — routing to /profile/' + cid);
  // Replace browser URL so Angular picks the correct route
  window.history.replaceState({}, '', '/profile/' + cid);
}

// 🚀 Bootstrap Angular
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error('[main.ts] Bootstrap error:', err));
