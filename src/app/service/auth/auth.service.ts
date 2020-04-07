import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService, ENDPOINT } from '../api/api.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isAuthorized = false;
  private userAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();


  // fazerLogin(user: User){

  //   if (user.nome === 'thinh@email.com' &&
  //     user.senha === '123456') {

  //     this.userAutenticado = true;

  //     this.mostrarMenuEmitter.emit(true);

  //     this.router.navigate(['/']);

  //   } else {
  //     this.userAutenticado = false;

  //     this.mostrarMenuEmitter.emit(false);
  //   }
  // }

  // userEstaAutenticado(){
  //   return this.userAutenticado;
  // }

  constructor(private apiService: ApiService, private router: Router) { }

  getAllUser() {
    this.apiService.get(ENDPOINT.users, { page: 2 }).subscribe(e => {
      console.log(e);
    })
    this.apiService.getAssets('assets/data/db.json').subscribe(e => {
      console.log(e);
    })
  }

  addUser(object: Object) {
    this.apiService.post(ENDPOINT.users, object).subscribe(e => {
      console.log(e);
    })
  }

  login() {
    this.isAuthorized = true;
  }

  logout() {
    this.isAuthorized = false;
  }
}
