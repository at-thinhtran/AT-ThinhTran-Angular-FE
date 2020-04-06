import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isAuthorized = false;
  private userAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

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


  login() {
    this.isAuthorized = true;
  }

  logout() {
    this.isAuthorized = false;
  }
}
