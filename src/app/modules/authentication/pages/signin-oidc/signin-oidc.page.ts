import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from '@environments/environment';
import { AuthenticationService } from '@core/authentication/authentication.service';

@Component({
  template: '<p>Processing request...</p>'
})
// tslint:disable-next-line: component-class-suffix
export class SigninOidcPage implements OnInit {
  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.authenticationService.userLoaded$.subscribe((userLoaded) => {
      if (userLoaded) {
        this.router.navigate(['./']);
      } else if (!environment.production) {
        console.log('Anerror happened: user wasnt loaded');
      }
    });

    this.authenticationService.handleCallBack();
  }
}
