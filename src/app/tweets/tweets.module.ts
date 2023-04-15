import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TweetListComponent } from './tweet-list/tweet-list.component';
import { TweetDetailComponent } from './tweet-detail/tweet-detail.component';
import { TimeComponent } from "../time/time.component";
import { LinkComponent } from "../link/link.component";
import { MatButtonModule } from '@angular/material/button';



@NgModule({
    declarations: [
        TweetListComponent,
        TweetDetailComponent
    ],
    exports: [
        TweetListComponent
    ],
    imports: [
        CommonModule,
        TimeComponent,
        LinkComponent,
        MatButtonModule
    ]
})
export class TweetsModule { }
