import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService, ENDPOINT } from '../api/api.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isAuthorized = false;

  constructor() { }

  login() {
    this.isAuthorized = true;
  }

  logout() {
    this.isAuthorized = false;
  }
}
