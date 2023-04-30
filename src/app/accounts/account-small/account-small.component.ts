import { Component, Input, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { Account, AccountState } from '../account';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { loginAction } from '../account.action';

@Component({
  selector: 'app-account-small',
  templateUrl: './account-small.component.html',
  styleUrls: ['./account-small.component.css']
})
export class AccountSmallComponent implements OnInit {
  @Input() mobile = false
  account: Account = {} as Account
  logged_in = false
  constructor(private store: Store<AppState>, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.store.subscribe((state: AppState) => {
      console.log(state.account)
      this.account = state.account.account
      this.logged_in = state.account.logged_in
    })
  }

  openDialog() {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.height = "70%"

    const dialogRef = this.dialog.open(LoginComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => this.store.dispatch(loginAction({
        account: {
          displayname: data.displayname,
          username: data.name,
          id: "123456",
          image: ""
        }
      } as AccountState))
    );
  }
}
