import { createSelector } from '@ngrx/store';

// state is the whole rx store
export const selectCount = (state: { counter: number }) => state.counter;

// state will be the returned value of selectCount
export const selectDoubleCount = createSelector(
  selectCount,
  (state) => state * 2
);
