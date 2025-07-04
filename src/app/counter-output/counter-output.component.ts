import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { Store } from '@ngrx/store';
import { selectCount, selectDoubleCount } from '../store/counter.selectors';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent {
  count$: Observable<number>;
  doubleCount$: Observable<number>;
  // store is from nsrx, to provide a way for you to select a store/data
  // counter is the key name and represents the value in counter.reducer.ts
  // count$ will update the value when counter changes
  constructor(private store: Store<{ counter: number }>) {
    this.count$ = store.select(selectCount);
    this.doubleCount$ = store.select(selectDoubleCount);
  }
}
