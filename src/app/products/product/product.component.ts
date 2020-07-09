import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Observable } from 'rxjs/internal/Observable';
import { Product, Question, Price, Offer, Cover } from '../models/Product';

import { map } from 'rxjs/operators';

@Component({
  selector: 'ins-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  title = 'Product Details';
  product$: Observable<Product>;

  price: Price;
  covers: Cover[];
  offer: Offer = new Offer();

  calculating = false;
  creatingOffer = false;

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) {
    this.route.params.subscribe(params => {
      this.collectProductData(params.id);
    });
  }

  private collectProductData(id: string): void {
    this.product$ = this.productService.getProduct(id)
      .pipe(map(response => {
        this.covers = response.covers;

        this.offer.answers = [];
        this.offer.productCode = response.code;

        for (const question of response.questions) {
          this.addAnswerToCollection(question);
        }

        return response;
      }));
  }

  private addAnswerToCollection(policyQuestion: Question): void {
    this.offer.answers.push({
      answer: null,
      question: policyQuestion,
      type: policyQuestion.type,
      questionCode: policyQuestion.code
    });
  }

  getCoverByCode(code: string): string {
    const coverObj = this.covers.find(cover => {
      return cover.code.toLowerCase() === code.toLowerCase();
    });

    return coverObj?.name ?? code;
  }

  calculatePrice(proceedToDetails: boolean = false): void {
    this.calculating = true;

    this.productService.calculateOffer(this.offer)
      .then((data: Price) => {
        console.log(data.offerNumber);
        this.price = data;
        this.calculating = false;

        if (proceedToDetails) {
          this.router.navigate(['/policies', 'buy', this.price.offerNumber]);
        }
      });
  }

}
