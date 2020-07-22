import { Component } from '@angular/core';

import { Observable } from 'rxjs/internal/Observable';

import { ProductsService } from '@products/index';
import { InsuranceProduct } from '@shared/models';
import { delay } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './products.page.html',
    styleUrls: ['./products.page.scss']
})
// tslint:disable-next-line: component-class-suffix
export class ProductsPage {
    isDataLoading = false;
    selectedCategory: string;
    products$: Observable<InsuranceProduct[]>;

    constructor(private route: ActivatedRoute, private productsService: ProductsService) {
        this.products$ = this.productsService.getProducts().pipe(delay(1000));
        this.route.params.subscribe(params => this.selectedCategory = params.category);
    }
}
