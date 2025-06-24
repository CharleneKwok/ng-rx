import { Component } from '@angular/core';

import { CounterService } from '../counter.service';
import { Store } from '@ngrx/store';
import { DecrementAction, IncrementAction } from '../store/counter.actions';

@Component({
  selector: 'app-counter-controls',
  templateUrl: './counter-controls.component.html',
  styleUrls: ['./counter-controls.component.css'],
})
export class CounterControlsComponent {
  constructor(private store: Store) {}

  increment() {
    // dispatch action new way
    // this.store.dispatch(increment({ value: 2 }));

    // old way
    this.store.dispatch(new IncrementAction(1));
  }

  decrement() {
    this.store.dispatch(new DecrementAction(1));
  }
}
