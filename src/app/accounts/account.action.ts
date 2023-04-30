import { createAction, props } from "@ngrx/store";
import { AccountState } from "./account";

export const loginAction = createAction(
  '[Login Page] Login',
  props<AccountState>()
)
