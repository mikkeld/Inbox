import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InboxComponent } from './inbox/inbox.component';

import { AppRoutingModule }     from './app-routing.module';
import { AngularFireModule } from 'angularfire2';
// import { Config } from '../../config';
import { ComposeComponent } from './compose/compose.component';
import {EmailService} from "./email/email.service";

// export const firebaseConfig = {
//   apiKey: config.apiKey,
//   authDomain: config.authDomain,
//   databaseURL: config.databaseURL,
//   storageBucket: config.storageBucket
// };

export const firebaseConfig = {
  apiKey: "AIzaSyBFl2Lre7t7u-8cwtYUu0k3gjrD0iQ3cWs",
  authDomain: "friendlychat-61656.firebaseapp.com",
  databaseURL: "https://friendlychat-61656.firebaseio.com",
  storageBucket: "friendlychat-61656.appspot.com"
};

@NgModule({
  declarations: [
    AppComponent,
    InboxComponent,
    ComposeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
