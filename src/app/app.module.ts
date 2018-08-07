import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {PostsComponent} from './posts/posts.component';
import {UsersComponent} from './users/users.component';
import {DetailsComponent} from './details/details.component';

import {HttpClientModule} from '@angular/common/http';
// Other imports removed for brevity
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { GitPostComponent } from './git-post/git-post.component';

@NgModule({
  declarations: [
    AppComponent, SidebarComponent, PostsComponent, UsersComponent, DetailsComponent, GitPostComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, HttpClientModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}