import { OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { loadUsers } from "./user.actions";
import { UserState } from "./user.reducer";

@Component({ ... })
export class UserComponent implements OnInit {
  users$ = this.store.select((state) => state.users.users);
  loading$ = this.store.select((state) => state.users.loading);

  constructor(private store: Store<UserState>) {}

  ngOnInit() {
    this.store.dispatch(loadUsers());
  }
}
