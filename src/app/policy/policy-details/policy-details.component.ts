import { Component, OnInit } from '@angular/core';
import { PolicyModule } from '../policy.module';
import { Policy } from '../policy';
import { ActivatedRoute } from '@angular/router';
import { PolicyService } from '..';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './policy-details.component.html',
  styleUrls: ['./policy-details.component.scss']
})
export class PolicyDetailsComponent implements OnInit {
  policy$: Observable<Policy>;

  constructor(private route: ActivatedRoute, private policyService: PolicyService) {
    this.route.params.subscribe(params => {
      this.collectPolicyData(params.id);
    });
  }

  ngOnInit(): void {
  }

  collectPolicyData(id: string): void {
    this.policy$ = this.policyService.getPolicyById(id);
  }

}
