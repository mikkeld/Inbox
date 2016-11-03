import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComposeComponent } from './compose/compose.component';
import { EmailDetailComponent } from './email-detail/email-detail.component';
import { InboxComponent } from './inbox/inbox.component';
import { ReplyComponent } from './reply/reply.component';
import { EmailService } from './shared/email.service';

import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ComposeComponent,
    EmailDetailComponent,
    InboxComponent,
    ReplyComponent
  ],
  providers: [
    EmailService
  ]
})

export class EmailsModule { }
