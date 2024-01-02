import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './components/shared/sidenav/sidenav.component';
import { CatOfTheWeekComponent } from './components/shared/card/cat-of-the-week.component';

@NgModule({
  declarations: [AppComponent, SidenavComponent, CatOfTheWeekComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
