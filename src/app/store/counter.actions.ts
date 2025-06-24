import { createAction, props, Action } from '@ngrx/store';

// create a name for an action
// under the hood increment is a function can be executed
// this.store.dispatch(increment())
// export const increment = createAction(
//   '[Counter] Increment',
//   props<{ value: number }>()
// );
// increment().type increment().value

// old way
export type CounterActions =
  | IncrementAction
  | DecrementAction
  | GetInitCounterAction;

export const INCREMENT = '[Counter] Increment';
export class IncrementAction implements Action {
  readonly type = INCREMENT;

  // payload
  constructor(public value: number) {}
}

export const DECREMENT = '[Counter] Decrement';
export class DecrementAction implements Action {
  readonly type = DECREMENT;

  constructor(public value: number) {}
}

export const GET_INIT_COUNTER = '[Counter] Init counter';
export class GetInitCounterAction implements Action {
  readonly type = GET_INIT_COUNTER;

  constructor() {}
}

export const SET_COUNTER = '[Counter] set counter';
export class SETCounterAction implements Action {
  readonly type = SET_COUNTER;

  constructor(public value: number) {}
}
