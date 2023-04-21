import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TweetListComponent } from './tweet-list/tweet-list.component';
import { TweetDetailComponent } from './tweet-detail/tweet-detail.component';
import { TimeComponent } from "../time/time.component";
import { LinkComponent } from "../link/link.component";
import { MatButtonModule } from '@angular/material/button';
import { NgOptimizedImage } from '@angular/common'
import { LinkTextComponent } from '../link-text/link-text.component';
import {MatDividerModule} from "@angular/material/divider"



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
        MatButtonModule,
        NgOptimizedImage,
        LinkTextComponent,
        MatDividerModule,
    ]
})
export class TweetsModule { }
