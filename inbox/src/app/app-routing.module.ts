import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InboxComponent }      from './inbox/inbox.component';
import { ComposeComponent }      from './compose/compose.component';
import { EmailDetailComponent }      from './email-detail/email-detail.component';
import { UserSearchComponent }      from './user-search/user-search.component';
import {AuthGuard} from "./auth/auth-guard";

const routes: Routes = [
  { path: '', redirectTo: '/inbox', pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'inbox',  component: InboxComponent, canActivate: [AuthGuard] },
  { path: 'compose',  component: ComposeComponent },
  { path: 'search',  component: UserSearchComponent },
  { path: 'email/:id',  component: EmailDetailComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  providers: [AuthGuard],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
