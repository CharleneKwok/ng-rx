import { createReducer, on, Action } from '@ngrx/store';
import {
  CounterActions,
  DECREMENT,
  DecrementAction,
  GET_INIT_COUNTER,
  GetInitCounterAction,
  INCREMENT,
  IncrementAction,
  SET_COUNTER,
  SETCounterAction,
} from './counter.actions';
// reducer is to change value in store
// just a function that takes some data as input and spits out the updated state

// register reducer to StoreModule.forRoot({ counter: counterReducer }) after setup
const initialState = 0;
// listen to action
// produce a new value and cannot use current state
// export const counterReducer = createReducer(
//   initialState,
//   on(increment, (state, action) => state + action.value)
// );

// old way
// can be any action
export function counterReducer(
  state = initialState,
  action: CounterActions | Action
) {
  // return initialState
  if (action.type === INCREMENT) {
    return state + (action as IncrementAction).value;
  }

  if (action.type === DECREMENT) {
    return state - (action as DecrementAction).value;
  }

  if (action.type === SET_COUNTER) {
    return (action as SETCounterAction).value;
  }

  return state;
}
