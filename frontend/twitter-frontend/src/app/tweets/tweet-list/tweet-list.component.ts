import { Component, OnInit } from '@angular/core';
import { TweetDetail } from '../tweet-detail/tweet-detail';
import { TweetsService } from '../tweets.service';

@Component({
  selector: 'app-tweet-list',
  templateUrl: './tweet-list.component.html',
  styleUrls: ['./tweet-list.component.css']
})
export class TweetListComponent implements OnInit {
  tweetDetails: TweetDetail[] = []

  constructor(private tweetService: TweetsService ) {
  }

  ngOnInit(): void {
      this.tweetDetails = this.tweetService.getTweets()
  }

  onExpandDetails() {

  }
}
