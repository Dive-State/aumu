import {Component, OnDestroy} from "@angular/core";
import {Subject} from "rxjs";

@Component({
  selector: 'base-component',
  template: '',
  styleUrls: ['']
})
export  class BaseComponent implements OnDestroy{
  destroy$ = new Subject();

  ngOnDestroy() {
    console.log('destroyed subscribers')
    this.destroy$.next({});
    this.destroy$.complete();
  }
}
