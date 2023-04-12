import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TweetsModule } from './tweets/tweets.module';
import { UsersModule } from './users/users.module';
import { TrendsModule } from './trends/trends.module';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LinkComponent } from "./link/link.component";

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
        HomeComponent,
        BrowserAnimationsModule,
        LinkComponent
    ]
})
export class AppModule { }
