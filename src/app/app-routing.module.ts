import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './component/login/login.component';
import { NewsComponent } from './component/news/news.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'account',
    loadChildren: () => import('../app/account/account.module').then(m => m.AccountModule)
  },
  {
    path: 'login',
    loadChildren: () => import('../app/component/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'news',
    loadChildren: () => import('../app/component/news/news.module').then(m => m.NewsModule)
  },
  {
    path: 'news/:id',
    component: NewsComponent
  },
  {
    path: 'lazy',
    loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule)
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
