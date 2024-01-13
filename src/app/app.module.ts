import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './components/shared/sidenav/sidenav.component';
import { CatOfTheWeekComponent } from './components/layout/cat-of-the-week/cat-of-the-week.component';
import { PostsListsComponent } from './components/layout/posts-lists/posts-lists.component';
import { CreatePostComponent } from './components/layout/create-post/create-post.component';

@NgModule({
  declarations: [AppComponent, SidenavComponent, CatOfTheWeekComponent, PostsListsComponent, CreatePostComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
