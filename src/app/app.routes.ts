import { Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { TestApiComponent } from './components/test-api/test-api.component';
import { ContactComponent } from './components/contact/contact.component';


export const routes: Routes = [
  { path: 'profile/:cid', component: ContactComponent }, 

  { path: 'test', component:  TestApiComponent},
  //{ path: 'contact/:id', component: ContactComponent },

];
