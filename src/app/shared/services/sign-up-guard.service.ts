import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {CreateAccountService} from '../../auth/create-account/create-account.service';

@Injectable({
  providedIn: 'root'
})
export class SignUpGuardService implements CanActivate {

  constructor(private createAccountService: CreateAccountService,
              private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log(this.createAccountService.activated);
    if (this.createAccountService.activated) {
      return true;
    } else {
      this.router.navigate(['/create-account/launch']).then();
      return false;
    }

  }
}
