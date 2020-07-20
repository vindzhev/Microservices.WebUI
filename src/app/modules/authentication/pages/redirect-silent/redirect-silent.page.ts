import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '@core/authentication/authentication.service';


@Component({
  template: '<p>redirect-silent-renew works!</p>',
})
// tslint:disable-next-line: component-class-suffix
export class RedirectSilentPage implements OnInit {

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.authenticationService.handleSilentCallback();
  }

}
