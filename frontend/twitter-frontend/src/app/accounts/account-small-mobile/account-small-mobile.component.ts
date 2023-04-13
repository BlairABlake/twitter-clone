import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { Account } from '../account';

@Component({
  selector: 'app-account-small-mobile',
  templateUrl: './account-small-mobile.component.html',
  styleUrls: ['./account-small-mobile.component.css']
})
export class AccountSmallMobileComponent implements OnInit {
  constructor(private accountService: AccountsService) {}
  account: Account = {} as Account;

  ngOnInit(): void {
      this.account = this.accountService.getAccount();
  }
}
