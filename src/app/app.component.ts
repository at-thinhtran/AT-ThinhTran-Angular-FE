import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-ThinhTran';

  fullname = '';
  emailaddress = '';
  password = '';
  conpassword = '';
  housenumber = '';
  street = '';
  city = '';

  required(requiredForm) {
    console.log(requiredForm);
  }
}
