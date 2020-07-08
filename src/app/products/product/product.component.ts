import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Observable } from 'rxjs/internal/Observable';
import { Product, Answer, Question, Price, Offer } from '../models/Product';

import { map } from 'rxjs/operators';
import { of, Subscription } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'ins-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnDestroy {
  title = 'Product Details';
  product$: Observable<Product>;
  routeSub: any;

  price: Price;
  offer: Offer;

  calculating = false;

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) {
    const oneYerFromNowDate = new Date();
    oneYerFromNowDate.setFullYear(oneYerFromNowDate.getFullYear() + 1);

    this.routeSub = this.route.params.subscribe(params => {
      this.collectProductData(params.id);
    });

    this.offer = {
      policyFrom: new Date(),
      policyTo: oneYerFromNowDate,
      productCode: '',
      answers: [],
      selectedCovers: []
    };
  }

  private collectProductData(id: string): void {
    this.product$ = this.productService.getProduct(id)
      .pipe(map(response => {
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

  onCheckChange(event: any) {
    const coverIndex = this.offer.selectedCovers.indexOf(event.source.value);

    if (event.checked && coverIndex < 0) {
      this.offer.selectedCovers.push(event.source.value);
    } else if (!event.checked && coverIndex >= 0) {
      this.offer.selectedCovers.splice(coverIndex, 1);
    }
  }

  calculatePrice(): void {
    this.calculating = true;
    this.productService.calculateOffer(this.offer)
      .then(data => {
        this.price = data;
        this.calculating = false;
      });
  }

  createOffer(): void {
    //Create offer http call
    //when offer number is returned
    //redirect to create policy page

    this.router.navigate(['/policies', 'buy', 'e7ee3fc9-17f2-491b-bd06-7e64c11e0541']);
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
