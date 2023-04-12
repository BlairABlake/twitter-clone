import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { diffString } from './timeUtils';

@Component({
  selector: 'app-time',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent {


  @Input() datetime: Date = this.nowDate()

  nowDate(): Date {
    return new Date(Date.now())
  }

  getDiffString(): string {
    return diffString(this.datetime, this.nowDate())
  }
}
