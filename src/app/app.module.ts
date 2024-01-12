import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './components/shared/sidenav/sidenav.component';
import { CatOfTheWeekComponent } from './components/layout/cat-of-the-week/cat-of-the-week.component';
import { PostsListsComponent } from './components/layout/posts-lists/posts-lists.component';

@NgModule({
  declarations: [AppComponent, SidenavComponent, CatOfTheWeekComponent, PostsListsComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
