import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, switchMap, tap, withLatestFrom } from 'rxjs';
import {
  DECREMENT,
  GET_INIT_COUNTER,
  INCREMENT,
  IncrementAction,
  SETCounterAction,
} from './counter.actions';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCount } from './counter.selectors';

// side effect -- http localstorge
// must add injectable
@Injectable()
// add to app.module.ts EffectsModule.forRoot([CounterEffects])
export class CounterEffects {
  // this.actions is observable that yields us a new value
  // when anywhere in our app, action is dispatched
  saveCount = createEffect(
    () =>
      this.actions$.pipe(
        // filter dispatch action, can listen multiple actions
        // ofType(increment, decrement)
        // ofType('[Counter] Increment')
        ofType(INCREMENT, DECREMENT),
        // get value form store
        withLatestFrom(this.store.select(selectCount)),
        // It does not modify the value. It just lets you run a function for each emission.

        // without withLatestFrom
        // tap((action) => {
        //   localStorage.setItem(
        //     'count',
        //     (action as IncrementAction).value.toString()
        //     // get the payload of this action
        //   );
        // })

        // with withLatestFrom
        // [action, counter] from ofType and withLatestFrom
        tap(([action, counter]) => {
          console.log(action);
          localStorage.setItem('count', counter.toString());
        })
      ),
    { dispatch: false }
  );

  setCount = createEffect(() =>
    this.actions$.pipe(
      ofType(GET_INIT_COUNTER),
      switchMap(() => {
        const value = localStorage.getItem('count');
        if (value) {
          return of(new SETCounterAction(+value));
        }
        return of(new SETCounterAction(0));
      })
    )
  );

  // dispatch new action once it is done
  constructor(
    private actions$: Actions,
    private store: Store<{ counter: number }>
  ) {}
}
