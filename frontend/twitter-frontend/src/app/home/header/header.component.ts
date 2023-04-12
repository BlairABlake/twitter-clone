import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button"
import { LinkComponent } from "../../link/link.component";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    imports: [CommonModule, MatButtonModule, LinkComponent]
})
export class HeaderComponent {

}
