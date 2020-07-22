import { Component } from '@angular/core';

import { Observable } from 'rxjs/internal/Observable';

import { CategoryService } from '@core/services';
import { AuthenticationService } from '@core/authentication/authentication.service';

@Component({
  selector: 'ins-navigation',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  categories$: Observable<string[]>;

  constructor(public authenticationService: AuthenticationService, private categoryService: CategoryService) {
    this.categories$ = this.categoryService.getCategories();
  }
}
