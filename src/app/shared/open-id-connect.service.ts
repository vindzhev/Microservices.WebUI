import { Injectable } from '@angular/core';
import { UserManager, User } from 'oidc-client';
import { environment } from '../../environments/environment';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenIdConnectService {

  private currentUser: User;
  private userManager: UserManager = new UserManager(environment.openIdConnectSettings);

  userLoaded$ = new ReplaySubject<boolean>(1);

  constructor() {
    this.userManager.clearStaleState();

    this.userManager.events.addUserLoaded((user) => {
      if (!environment.production) {
        console.log('User loaded.', user);
      }

      this.currentUser = user;
      this.userLoaded$.next(true);
    });

    this.userManager.events.addUserUnloaded(() => {
      if (!environment.production) {
        console.log('User unloaded');
      }

      this.currentUser = null;
      this.userLoaded$.next(false);
    });

  }

  get userAvailable(): boolean {
    return this.currentUser != null;
  }

  get user(): User {
    return this.currentUser;
  }

  triggerSignIn() {
    this.userManager.signinRedirect().then(() => {
      if (!environment.production) {
        console.log('Redirection to signin riggered.');
      }
    });
  }

  triggerSignOut() {
    this.userManager.signoutRedirect().then((response) => {
      if (!environment.production) {
        console.log('Redirection to sign out triggered', response);
      }
    });
  }

  handleCallBack() {
    this.userManager.signinRedirectCallback().then((user: User) => {
      if (!environment.production) {
        console.log('Callback after signin handled', user);
      }
    });
  }

  handleSilentCallback() {
    this.userManager.signinSilentCallback().then((user: User) => {
      this.currentUser = user;
      if (!environment.production) {
        console.log('Callback after silent signin handled.', user);
      }
    });
  }
}
