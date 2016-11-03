import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InboxComponent } from './inbox/inbox.component';

import { AppRoutingModule }     from './app-routing.module';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
// import { Config } from '../../config';
import { ComposeComponent } from './compose/compose.component';
import {EmailService} from "./email/email.service";
import {AuthService} from "./auth/auth.service";
import { EmailDetailComponent } from './email-detail/email-detail.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { AuthGuard } from './auth/auth-guard';
import { ReplyComponent } from './email/reply.component';

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
    InboxComponent,
    ComposeComponent,
    EmailDetailComponent,
    UserSearchComponent,
    ReplyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
  ],
  providers: [EmailService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
