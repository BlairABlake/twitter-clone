import { Component, Input } from '@angular/core';
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
  @Input() href = ""
  @Input() color = ""
}
