import { Injectable } from '@angular/core';
import { TrendDetail } from './trend-detail/trend-detail';

@Injectable({
  providedIn: 'root'
})
export class TrendsService {

  constructor() { }

  getTrendings(): TrendDetail[] {
    return [
      {
        field: "Technology",
        text: "AutoGPT",
        area: '',
        volume: 11400
      },
      {
        field: "Entertaiment",
        text: "Apologize",
        area: '',
        volume: 62700
      },
      {
        field: "Music",
        text: "Blink 182",
        area: '',
        volume: 10200
      },
      {
        field: '',
        text: "Benito",
        area: "United States",
        volume: -1
      }
    ]
  }
}
