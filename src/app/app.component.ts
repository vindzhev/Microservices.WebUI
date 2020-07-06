import { Component, OnInit } from '@angular/core';
import { OpenIdConnectService } from './shared/open-id-connect.service';

@Component({
  selector: 'ins-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PortalWeb';

  constructor() { }
}
