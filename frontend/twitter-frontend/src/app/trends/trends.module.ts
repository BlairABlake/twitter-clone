import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrendListComponent } from './trend-list/trend-list.component';



@NgModule({
  declarations: [
    TrendListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TrendListComponent
  ]
})
export class TrendsModule { }
