import { UserDetail } from "src/app/users/user-detail/user-detail";

export interface TweetDetail {
  tweetText: string,
  date: Date,
  user: UserDetail
}
