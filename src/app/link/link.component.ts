import { Component, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-link',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent {
  @HostBinding('class') class = 'link'
  @Input() href = ""
  @Input() w100 = false
  @Input() textCenter = false
  @Input() flex = false;
}
