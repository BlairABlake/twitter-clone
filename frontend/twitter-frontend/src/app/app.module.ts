import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TweetsModule } from './tweets/tweets.module';
import { UsersModule } from './users/users.module';
import { TrendsModule } from './trends/trends.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LinkComponent } from "./link/link.component";
import { HomeModule } from './home/home.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        TweetsModule,
        UsersModule,
        TrendsModule,
        BrowserAnimationsModule,
        LinkComponent,
        HomeModule
    ]
})
export class AppModule { }
