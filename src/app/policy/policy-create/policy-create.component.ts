import { Component, OnInit } from '@angular/core';
import { Policy } from '../policy';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PolicyService } from '../policy.service';

@Component({
  templateUrl: './policy-create.component.html',
  styleUrls: ['./policy-create.component.scss']
})
export class PolicyCreateComponent {
  loading = false;
  policyFormGroup: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router,
    private formBuilder: FormBuilder, private policyService: PolicyService) {
    let offerNumber = '';
    this.route.params.subscribe(params => {
      offerNumber = params.id;
    });

    this.policyFormGroup = this.formBuilder.group({
      offerNumber: this.formBuilder.control({ value: offerNumber, disabled: true }, Validators.required),
      policyHolder: this.formBuilder.group({
        firstName: this.formBuilder.control('', Validators.required),
        lastName: this.formBuilder.control('', Validators.required)
      }),
      policyHolderAddress: this.formBuilder.group({
        zipCode: this.formBuilder.control('', Validators.required),
        street: this.formBuilder.control('', Validators.required),
        city: this.formBuilder.control('', Validators.required),
        country: this.formBuilder.control('', Validators.required)
      })
    });
  }

  create(): void {
    this.loading = true;
    console.log(this.policyFormGroup.get('offerNumber'));
    this.policyService.createPolicy({
      ...this.policyFormGroup.value,
      offerNumber: this.policyFormGroup.get('offerNumber').value
    })
      .then((data: Policy) => {
        this.loading = false;
        this.router.navigate(['/policies', data.number]);
      });
  }
}
