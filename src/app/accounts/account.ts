export interface Account {
  username: string,
  displayname: string,
  image: string,
  id: string
}

export interface AccountState {
  logged_in: boolean,
  account: Account
}
