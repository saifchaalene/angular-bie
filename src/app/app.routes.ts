import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { TestApiComponent } from './test-api/test-api.component';


export const routes: Routes = [
  { path: 'profile/:cid', component: ProfileComponent }, 

  { path: 'test', component:  TestApiComponent},
];
