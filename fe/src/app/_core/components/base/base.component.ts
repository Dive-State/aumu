import {Component, OnDestroy} from '@angular/core';
import {Subject} from "rxjs";

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnDestroy {
  destroy$ = new Subject();

  ngOnDestroy() {
    console.log('destroyed subscribers')
    this.destroy$.next({});
    this.destroy$.complete();
  }
}
