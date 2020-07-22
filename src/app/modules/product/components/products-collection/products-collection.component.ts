import { Component, Input } from '@angular/core';

import { InsuranceProduct } from '@shared/models';

@Component({
    selector: 'ins-product-collection',
    templateUrl: './products-collection.component.html',
    styleUrls: ['./products-collection.component.scss']
})
export class ProductsCollectionComponent {
    @Input() products: InsuranceProduct[];

    constructor() { }
}
