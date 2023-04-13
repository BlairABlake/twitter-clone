import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from "./header/header.component";
import { TweetsModule } from "../tweets/tweets.module";
import { TrendsModule } from "../trends/trends.module";
import { HederMobileComponent } from './heder-mobile/heder-mobile.component';
import { LinkComponent } from '../link/link.component';



@NgModule({
    declarations: [
        HomeComponent,
        HederMobileComponent,
        HeaderComponent
    ],
    imports: [
        CommonModule,
        TweetsModule,
        TrendsModule,
        LinkComponent
    ],
    exports: [
      HomeComponent
    ]
})
export class HomeModule { }
