import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './auth/auth.guard';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {SignUpComponent} from './user/sign-up/sign-up.component';
import {SigninComponent} from './user/signin/signin.component';
import {UserComponent} from './user/user.component';

const routes: Routes = [
  { 
    path: 'signup', component: UserComponent,
    children: [{ path: '', component: SignUpComponent }] 
  },
  { 
    path: 'login', component: UserComponent,
    children: [{ path: '', component: SigninComponent }] 
  },
  { 
    path: 'userprofile', component: UserProfileComponent, canActivate: [AuthGuard]
  },
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
