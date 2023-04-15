import { Component, OnInit } from '@angular/core';
import { TrendsService } from '../trends.service';
import { TrendDetail } from '../trend-detail/trend-detail';

@Component({
  selector: 'app-trend-list',
  templateUrl: './trend-list.component.html',
  styleUrls: ['./trend-list.component.css']
})
export class TrendListComponent implements OnInit{
  public trends: TrendDetail[] = []

  constructor(private trendsService: TrendsService) {}

  ngOnInit(): void {
      this.trends = this.trendsService.getTrendings()
  }
}
