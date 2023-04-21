import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-link-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './link-text.component.html',
  styleUrls: ['./link-text.component.css']
})
export class LinkTextComponent {
  @Input() href = ""
}
