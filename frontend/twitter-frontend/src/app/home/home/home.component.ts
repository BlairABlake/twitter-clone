import { Component, OnInit } from '@angular/core';
import {BreakpointObserver, Breakpoints, LayoutModule} from "@angular/cdk/layout"
import { TweetsModule } from 'src/app/tweets/tweets.module';
import { TrendsModule } from 'src/app/trends/trends.module';
import { HeaderComponent } from '../header/header.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isTablet: boolean = false;

  constructor(private responsive: BreakpointObserver) {}

  ngOnInit(): void {
      this.responsive.observe([
        Breakpoints.Handset
      ]).subscribe(result => {
        this.isTablet = result.matches
      })
  }
}
