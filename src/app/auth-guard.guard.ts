import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private cookieService: CookieService, private router: Router) { }
  canActivate(): boolean {
    if (this.cookieService.get('userId')) {
      return true;
    } else {
      this.router.navigate(['/auth']);
      return false;
    }
  }
}
