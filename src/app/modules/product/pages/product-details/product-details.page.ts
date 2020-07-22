import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './product-details.page.html',
    styleUrls: ['./product-details.page.scss']
})
// tslint:disable-next-line: component-class-suffix
export class ProductDetailsPage {
    category: string;
    isEditable = true;

    constructor(private route: ActivatedRoute) {
        this.route.params.subscribe((params) => {
            this.category = params.category;
        });
    }
}
