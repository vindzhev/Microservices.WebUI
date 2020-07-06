import { Component, OnInit } from '@angular/core';
import { OpenIdConnectService } from '../../shared/open-id-connect.service';

@Component({
  selector: 'ins-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(public openIdConnectService: OpenIdConnectService) { }

  ngOnInit(): void {
  }

}
