import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';

import { HomeComponent } from './component/home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiService } from './service/api/api.service';
import { DemoInterceptor } from './interceptor/demo.interceptor';
import { LazyModule } from './lazy/lazy.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    LazyModule
  ],
  providers: [
    ApiService,
    { provide: HTTP_INTERCEPTORS, useClass: DemoInterceptor, multi: true }],
  bootstrap: [AppComponent]
})

export class AppModule { }
