import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeComponent } from './user-home/user-home.component';
import { ExploreComponent } from './explore/explore.component';
import { MessagesComponent } from './messages/messages.component';
import { ProfileComponent } from './profile/profile.component';
import { NotoficationsComponent } from './notofications/notofications.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';

const routes: Routes = [
  {path: "home", component: UserHomeComponent },
  {path: "explore", component: ExploreComponent},
  {path: "notifications", component: NotoficationsComponent},
  {path: "messages", component: MessagesComponent},
  {path: "profile", component: ProfileComponent},
  {path: "bookmarks", component: BookmarksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
