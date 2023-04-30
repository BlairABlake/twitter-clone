import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-link-text',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './link-text.component.html',
  styleUrls: ['./link-text.component.css']
})
export class LinkTextComponent {
  @Input() href = ""
  @Input() rhref = ""
}
