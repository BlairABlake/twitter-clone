import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrendListComponent } from './trend-list/trend-list.component';
import { TrendDetailComponent } from './trend-detail/trend-detail.component';
import { MatCardModule } from '@angular/material/card'
import { NumberComponent } from '../number/number.component';



@NgModule({
  declarations: [
    TrendListComponent,
    TrendDetailComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    NumberComponent
  ],
  exports: [
    TrendListComponent,
    TrendDetailComponent
  ]
})
export class TrendsModule { }
