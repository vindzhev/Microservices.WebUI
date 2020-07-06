import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { OpenIdConnectService } from '../open-id-connect.service';

@Injectable({
  providedIn: 'root'
})
export class RequireAuthenticatedUserRouteGuardService implements CanActivate {

  constructor(private router: Router, private openIdConnectService: OpenIdConnectService) { }

  canActivate() {
    if (this.openIdConnectService.userAvailable) {
      return true;
    } else {
      this.openIdConnectService.triggerSignIn();
      return false;
    }
  }
}
