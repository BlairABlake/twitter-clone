import { Injectable } from '@angular/core';
import { TweetDetail } from './tweet-detail/tweet-detail';

@Injectable({
  providedIn: 'root'
})
export class TweetsService {

  constructor() { }

  getTweets(): TweetDetail[] {
    return [
      {
        user: {
          name: "Clown World",
          image: "https://pbs.twimg.com/profile_images/1589731437959208960/iThAxQ4j_x96.jpg"
        },
        tweetText: "Post the last meme you saved on your phone 👇",
        date: new Date("2020-05-12T23:50:21.817Z")
      },
      {
        user: {
          name: "Clown World",
          image: "https://pbs.twimg.com/profile_images/1589731437959208960/iThAxQ4j_x96.jpg"
        },
        tweetText: "Dylan is the new face of Olay Skincare",
        date:  new Date(1995, 11, 17, 3, 24, 0)
      },
      {
        user: {
          name: "Clown World",
          image: "https://pbs.twimg.com/profile_images/1589731437959208960/iThAxQ4j_x96.jpg"
        },
        tweetText: "Portland",
        date: new Date(Date.now())
      }
    ]
  }
}
