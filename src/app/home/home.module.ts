import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from "./header/header.component";
import { TweetsModule } from "../tweets/tweets.module";
import { TrendsModule } from "../trends/trends.module";
import { HederMobileComponent } from './heder-mobile/heder-mobile.component';
import { LinkComponent } from '../link/link.component';
import { AccountsModule } from "../accounts/accounts.module";
import { MatButtonModule } from '@angular/material/button';
import { SearchComponent } from '../search/search.component';
import { RouterModule } from '@angular/router';



@NgModule({
    declarations: [
        HomeComponent,
        HederMobileComponent,
        HeaderComponent
    ],
    exports: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        TweetsModule,
        TrendsModule,
        LinkComponent,
        AccountsModule,
        MatButtonModule,
        SearchComponent,
        RouterModule
    ]
})
export class HomeModule { }
