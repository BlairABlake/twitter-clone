import { Injectable } from '@angular/core';
import { Account } from './account';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor() { }

  getAccount(): Account {
    return {
      displayname: "BlairABlake",
      username: "krd4",
      image: "https://avatars.githubusercontent.com/u/129632045?v=4",
      id: "123456789"
    }
  }
}
