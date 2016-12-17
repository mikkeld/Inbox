import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./auth/auth-guard";
import {UnauthGuard} from "./auth/unauth-guard";

const routes: Routes = [
  { path: '', redirectTo: '/inbox', pathMatch: 'full', canActivate: [AuthGuard] }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  providers: [AuthGuard, UnauthGuard],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
