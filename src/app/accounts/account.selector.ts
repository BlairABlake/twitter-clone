import { createSelector } from "@ngrx/store";
import { AccountState } from "./account";

export const selectAccountFeature = (state: {account: AccountState}) => state.account
export const selectAccount = createSelector(
  selectAccountFeature,
  (account: AccountState) => account.account
)
export const selectLoggedIn = createSelector(
  selectAccountFeature,
  (account: AccountState) => account.logged_in
)
