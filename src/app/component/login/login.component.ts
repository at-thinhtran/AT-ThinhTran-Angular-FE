import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth/auth.service';

// import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // user: User = new User();

  constructor(private authService: AuthService) { }

  ngOnInit() {

  }

  // fazerLogin(){
  //   //console.log(this.usuario);
  //   this.authService.fazerLogin(this.user);
  // }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}
