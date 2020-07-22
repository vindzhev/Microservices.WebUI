import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'ins-questions',
    templateUrl: './product-questions.component.html',
    styleUrls: ['./product-questions.component.scss']
})
export class ProductQuestionsComponent implements OnChanges {
    @Input() public category: string;
    questionsFormGroup: FormGroup;

    constructor(private formBuilder: FormBuilder) { }

    ngOnChanges(changes: SimpleChanges): void {
        this.queryCategoryQuestions(this.category);
    }

    queryCategoryQuestions(category: string) {

    }
}
