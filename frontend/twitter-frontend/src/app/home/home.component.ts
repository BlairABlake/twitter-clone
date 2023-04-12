import { Component } from '@angular/core';
import { TweetsModule } from "../tweets/tweets.module";
import { HeaderComponent } from "./header/header.component";
import { TrendsModule } from '../trends/trends.module';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    standalone: true,
    imports: [TweetsModule, HeaderComponent, TrendsModule]
})
export class HomeComponent {

}
