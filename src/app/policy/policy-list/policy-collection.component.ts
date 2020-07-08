import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './policy-collection.component.html',
  styleUrls: ['./policy-collection.component.scss']
})
export class PolicyCollectionComponent implements OnInit {
  filterFields: any = {
    number: '',
    policyHolder: ''
  };

  policies: any[] = [
    { code: 'ABC', validFrom: '05/06/2020', validTo: '1/1/2021', holder: 'Vasil Indzhev', number: 'e7ee3fc9-17f2-491b-bd06-7e64c11e0541' }
  ];
  displayedColumns: string[] = ['code', 'validFrom', 'validTo', 'holder', 'actions'];
  constructor() { }

  ngOnInit(): void {
  }

  search(): void {
  }

}
