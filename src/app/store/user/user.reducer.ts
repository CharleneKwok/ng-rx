// user.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { loadUsers, loadUsersSuccess, loadUsersFailure } from './user.actions';

export interface UserState {
  users: any[];
  loading: boolean;
  error: any;
}

export const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

export const userReducer = createReducer(
  initialState,
  on(loadUsers, (state) => ({ ...state, loading: true })),
  on(loadUsersSuccess, (state, { users }) => ({
    ...state,
    users,
    loading: false,
  })),
  on(loadUsersFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);
