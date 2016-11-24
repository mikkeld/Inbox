import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComposeComponent } from './compose/compose.component';
import { EmailDetailComponent } from './email-detail/email-detail.component';
import { InboxComponent } from './inbox/inbox.component';
import { ReplyComponent } from './reply/reply.component';
import { ReplyListComponent } from './reply/reply-list/reply-list.component';
import { EmailService } from './shared/email.service';

import { FormsModule } from '@angular/forms';
import {ReplyService} from "./reply/reply.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ComposeComponent,
    EmailDetailComponent,
    InboxComponent,
    ReplyComponent,
    ReplyListComponent
  ],
  providers: [
    EmailService,
    ReplyService
  ]
})

export class EmailsModule { }

export { EmailService };
