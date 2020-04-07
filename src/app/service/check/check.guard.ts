import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ProfileComponent } from '../../account/profile/profile.component';

@Injectable({
  providedIn: 'root'
})
export class CheckGuard implements CanDeactivate<ProfileComponent> {

  canDeactivate(
    component: ProfileComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (component.isTyping) {
      return confirm('Your data will lose if you change page!');
    }
    return true;
  }

}
