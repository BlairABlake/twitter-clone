import { Component, Input } from '@angular/core';
import { TrendDetail } from './trend-detail';

@Component({
  selector: 'app-trend-detail',
  templateUrl: './trend-detail.component.html',
  styleUrls: ['./trend-detail.component.css']
})
export class TrendDetailComponent {
  @Input() trendDetail: TrendDetail = {} as TrendDetail;
}
