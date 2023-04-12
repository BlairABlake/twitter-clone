import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TweetDetail } from './tweet-detail';

@Component({
  selector: 'app-tweet-detail',
  templateUrl: './tweet-detail.component.html',
  styleUrls: ['./tweet-detail.component.css']
})
export class TweetDetailComponent {
  @Output() expanded = new EventEmitter();
  @Input() tweetDetail: TweetDetail = {} as TweetDetail

  expandDetails() {
    this.expanded.emit()
  }
}
