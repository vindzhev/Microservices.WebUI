import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { OpenIdConnectService } from '../shared/open-id-connect.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'ins-signin-oidc',
  templateUrl: './signin-oidc.component.html',
  styleUrls: ['./signin-oidc.component.scss']
})
export class SigninOidcComponent implements OnInit {

  constructor(private router: Router, private openIdConnectService: OpenIdConnectService) { }

  ngOnInit(): void {
    this.openIdConnectService.userLoaded$.subscribe((userLoaded) => {
      if (userLoaded) {
        this.router.navigate(['./']);
      } else if (!environment.production) {
        console.log('Anerror happened: user wasnt loaded');
      }
    });

    this.openIdConnectService.handleCallBack();
  }

}
