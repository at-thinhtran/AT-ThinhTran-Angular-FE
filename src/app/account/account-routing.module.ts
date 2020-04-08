import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { from } from 'rxjs';
import { AccountComponent } from './account/account.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { CheckGuard } from '../service/check/check.guard';
import { ProfileResolver } from './profile/profile.resolve';
import { AuthGuard } from '../service/auth/auth.guard';

const routes: Routes = [
  {
    path: 'account',
    component: AccountComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'profile',
        component: ProfileComponent,
        canDeactivate: [CheckGuard],
        resolve: [ProfileResolver]
      }
    ]
  }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class AccountRoutingModule { }
