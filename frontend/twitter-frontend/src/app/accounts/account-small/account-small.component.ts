import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { Account } from '../account';

@Component({
  selector: 'app-account-small',
  templateUrl: './account-small.component.html',
  styleUrls: ['./account-small.component.css']
})
export class AccountSmallComponent implements OnInit {
  constructor(private accountService: AccountsService) {}
  account: Account = {} as Account;

  ngOnInit(): void {
      this.account = this.accountService.getAccount();
  }
}
