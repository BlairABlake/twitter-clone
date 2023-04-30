import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';

@Component({
  selector: 'app-heder-mobile',
  templateUrl: './heder-mobile.component.html',
  styleUrls: ['./heder-mobile.component.css']
})
export class HederMobileComponent implements OnInit{
  logged_in = false
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.subscribe((state: AppState) => {
      this.logged_in = state.account.logged_in
    })
  }

}
