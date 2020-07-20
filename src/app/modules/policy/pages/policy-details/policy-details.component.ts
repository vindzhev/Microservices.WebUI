import { Component } from '@angular/core';

@Component({
  templateUrl: './policy-details.component.html',
  styleUrls: ['./policy-details.component.scss']
})
export class PolicyDetailsComponent {
  // policy$: Observable<Policy>;

  // constructor(private route: ActivatedRoute, private policyService: PolicyService) {
  //   this.route.params.subscribe(params => {
  //     this.collectPolicyData(params.id);
  //   });
  // }

  // ngOnInit(): void {
  // }

  // collectPolicyData(id: string): void {
  //   this.policy$ = this.policyService.getPolicyById(id);
  // }

  // getStatusClass(date: string): string {
  //   return new Date(date) < new Date() ? 'inavtive' : 'active';
  // }
}
