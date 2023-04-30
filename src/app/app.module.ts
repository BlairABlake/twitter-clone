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
import { UserHomeComponent } from './user-home/user-home.component';
import { ExploreComponent } from './explore/explore.component';
import { MessagesComponent } from './messages/messages.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { ProfileComponent } from './profile/profile.component';
import { NotoficationsComponent } from './notofications/notofications.component';
import { SearchComponent } from './search/search.component';

@NgModule({
    declarations: [
        AppComponent,
        UserHomeComponent,
        ExploreComponent,
        NotoficationsComponent,
        MessagesComponent,
        BookmarksComponent,
        ProfileComponent,
        NotoficationsComponent,
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
        HomeModule,
        SearchComponent
    ]
})
export class AppModule { }
