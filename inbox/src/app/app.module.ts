import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EmailsModule } from './emails/emails.module';
import { PhotosModule } from './photos/photos.module';

import { AppRoutingModule }     from './app-routing.module';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { UserSearchComponent } from './shared/user-search/user-search.component';
import {AuthService} from "./auth/auth.service";
import {AuthGuard} from "./auth/auth-guard";
import {EmailRoutingModule} from "./emails/email-routing.module";
import { UserOrLoginComponent } from './navigation/user-or-login/user-or-login.component';
import { NavigationListComponent } from './navigation/navigation-list/navigation-list.component';
import {PhotosRoutingModule} from "./photos/photos-routing.module";

export const firebaseConfig = {
  apiKey: "AIzaSyBFl2Lre7t7u-8cwtYUu0k3gjrD0iQ3cWs",
  authDomain: "friendlychat-61656.firebaseapp.com",
  databaseURL: "https://friendlychat-61656.firebaseio.com",
  storageBucket: "friendlychat-61656.appspot.com"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};

@NgModule({
  declarations: [
    AppComponent,
    UserSearchComponent,
    UserOrLoginComponent,
    NavigationListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    EmailRoutingModule,
    PhotosRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig),
    EmailsModule,
    PhotosModule
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
