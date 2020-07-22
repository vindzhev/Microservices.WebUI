import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'ins-holder-info',
    templateUrl: './holder-information.component.html',
    styleUrls: ['./holder-information.component.scss']
})
export class HolderInformationComponent {
    holderInformationFormGroup: FormGroup;

    constructor(private formBuilder: FormBuilder) {
        this.holderInformationFormGroup = this.formBuilder.group({
            firstName: this.formBuilder.control('', Validators.required),
            middleName: this.formBuilder.control('', Validators.required),
            lastName: this.formBuilder.control('', Validators.required),
            holderAddress: this.formBuilder.group({
                postalCode: this.formBuilder.control('', Validators.required),
                street: this.formBuilder.control('', Validators.required),
                city: this.formBuilder.control('', Validators.required),
                country: this.formBuilder.control('', Validators.required),
            })
        });
    }
}
