import { Component, OnInit } from '@angular/core';
import { Policy } from '../policy';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './policy-create.component.html',
  styleUrls: ['./policy-create.component.scss']
})
export class PolicyCreateComponent implements OnInit {
  policyFormGroup: FormGroup;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder) {
    let offerNumber = '';
    this.route.params.subscribe(params => {
      offerNumber = params.id;
    });

    this.policyFormGroup = this.formBuilder.group({
      offerNumber: this.formBuilder.control({ value: offerNumber, disabled: true }, Validators.required),
      policyHolder: this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required]
      }),
      address: this.formBuilder.group({
        postalCode: ['', Validators.required],
        street: ['', Validators.required],
        city: ['', Validators.required],
        country: ['', Validators.required]
      })
    });
  }

  ngOnInit(): void {
  }

  create() {

  }
}
