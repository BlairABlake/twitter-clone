import { createReducer, on } from "@ngrx/store";
import { loginAction } from "./account.action";
import { AccountState } from "./account";

export const loginReducer = createReducer(
  {
    logged_in: false,
    account: {}
  } as AccountState,
  on(loginAction, (state: AccountState, accountState: AccountState) => {
    return {
      logged_in: true,
      account: accountState.account
    }
  })
)
