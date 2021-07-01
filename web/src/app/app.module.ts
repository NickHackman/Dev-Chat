import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users/users.component';
import { CurrentUserComponent } from './current-user/current-user.component';
import { LogoutComponent } from './logout/logout.component';
import { ChatComponent } from './chat/chat.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatboxComponent,
    ProfileComponent,
    UsersComponent,
    CurrentUserComponent,
    LogoutComponent,
    ChatComponent,
    NavigationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
