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
//importing env variables and Auth0 Module
import { AuthModule } from '@auth0/auth0-angular';
import { environment as env } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { LoadingComponent } from './loading/loading.component';
import { HomeComponent } from './home/home.component';

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
    LoginComponent,
    LoadingComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      ...env.auth,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
