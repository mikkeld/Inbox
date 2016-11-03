import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InboxComponent }      from './inbox/inbox.component';
import { ComposeComponent }      from './compose/compose.component';
import { EmailDetailComponent }      from './email-detail/email-detail.component';
import {AuthGuard} from '../auth/auth-guard';

const routes: Routes = [
  { path: 'inbox',  component: InboxComponent, canActivate: [AuthGuard] },
  { path: 'starred',  component: InboxComponent },
  { path: 'compose',  component: ComposeComponent },
  { path: 'email/:id',  component: EmailDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  providers: [AuthGuard],
  exports: [ RouterModule ]
})

export class EmailRoutingModule {}
