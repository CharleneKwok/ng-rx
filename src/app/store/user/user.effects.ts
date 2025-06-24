// user.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { loadUsers, loadUsersSuccess, loadUsersFailure } from './user.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private http: HttpClient) {}

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers), // 🎯 Listen for the loadUsers action
      switchMap(() =>
        this.http.get<any[]>('https://jsonplaceholder.typicode.com/users').pipe(
          // in the same observable stream with http
          // map() transforms Observable<users> → Observable<loadUsersSuccessAction>
          map((users) => loadUsersSuccess({ users })), // ✅ On success
          // catchError() handles errors by returning a new Observable (via of())
          // replacing the error stream
          catchError((error) => of(loadUsersFailure({ error }))) // ❌ On error
        )
      )
    )
  );
}
