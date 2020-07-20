import { Component } from '@angular/core';

import { AuthenticationService } from '@core/authentication/authentication.service';

@Component({
  selector: 'ins-navigation',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(public authenticationService: AuthenticationService) { }
}
