import { Component, Input } from '@angular/core';
import { compactString } from './numberUtil';

@Component({
  selector: 'app-number',
  standalone: true,
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent {
  @Input() x: number = 0;

  getCompactString(): string {
    return compactString(this.x)
  }
}
