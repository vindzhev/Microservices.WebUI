import { Component, OnInit } from '@angular/core';
import { OpenIdConnectService } from '../shared/open-id-connect.service';

@Component({
  selector: 'ins-redirect-silent-renew',
  templateUrl: './redirect-silent-renew.component.html',
  styleUrls: ['./redirect-silent-renew.component.scss']
})
export class RedirectSilentRenewComponent implements OnInit {

  constructor(private openIdConnectService: OpenIdConnectService) { }

  ngOnInit(): void {
    this.openIdConnectService.handleSilentCallback();
  }

}
