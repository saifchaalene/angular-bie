import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
  { path: 'profile/:cid', component: ProfileComponent }, 
  { path: '', redirectTo: 'profile/1', pathMatch: 'full' }, 
  { path: '**', redirectTo: 'profile/1' } 
];
