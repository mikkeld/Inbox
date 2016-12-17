import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./auth/auth-guard";
import {UnauthGuard} from "./auth/unauth-guard";
import { SignInComponent } from "./auth/sign-in/sign-in.component";

const routes: Routes = [
  { path: '', component: SignInComponent, canActivate: [UnauthGuard] }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  providers: [AuthGuard, UnauthGuard],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
