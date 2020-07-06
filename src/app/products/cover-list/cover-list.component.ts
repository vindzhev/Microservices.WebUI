import { Component, OnInit, Input } from '@angular/core';
import { Cover } from '../models/Product';

@Component({
  selector: 'ins-cover-list',
  templateUrl: './cover-list.component.html',
  styleUrls: ['./cover-list.component.scss']
})
export class CoverListComponent {
  @Input() covers: Cover[];

  sort(array: Cover[]): Cover[] {
    array.sort((a, b) => {
      return a.code > b.code ? 1 : -1;
    });

    return array;
  }
}
