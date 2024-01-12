import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // if (this.authService.isAdmin()) {
    //   return true;
    // } else {
    //   this.router.navigate(['/forbidden']);
    //   return false;
    // }

    let id = this.authService.getCurrentUserId();
    if (id == undefined) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }

}
