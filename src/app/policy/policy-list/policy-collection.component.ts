import { Component, OnInit } from '@angular/core';
import { PolicySearchService } from '../policy-search.service';
import { PolicySearchResult, PolicySearchResultList } from '../policy';

@Component({
  templateUrl: './policy-collection.component.html',
  styleUrls: ['./policy-collection.component.scss']
})
export class PolicyCollectionComponent implements OnInit {
  private AND = '%20AND%20';
  filterFields: any = {
    number: '',
    policyHolder: ''
  };

  policies: PolicySearchResult[];
  displayedColumns: string[] = ['number', 'productCode', 'dateFrom', 'dateTo', 'policyHolder', 'totalPremum', 'actions'];

  constructor(private policySearchService: PolicySearchService) { }

  ngOnInit(): void {
  }

  private constructQueryString(filterFields: any): string {
    let queryString = '';

    if (filterFields.number && filterFields.number !== '') {
      queryString += filterFields.number + this.AND;
    }

    if (filterFields.policyHolder && filterFields.policyHolder !== '') {
      queryString += filterFields.policyHolder + this.AND;
    }

    if (queryString.endsWith(this.AND)) {
      queryString = queryString.slice(0, queryString.length - this.AND.length);
    }

    return queryString;
  }

  search(): void {
    const queryString = this.constructQueryString(this.filterFields);
    this.policySearchService.search(queryString)
      .then((data: PolicySearchResultList) => {
        this.policies = data?.policies;
      });
  }

}
