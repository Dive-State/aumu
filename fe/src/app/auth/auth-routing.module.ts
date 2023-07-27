import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {SigninComponent} from "./components/signin/signin.component";
import {paths} from "./auth.navigation";

const routes: Routes = [
  {
    path: paths.login,
    component: LoginComponent,
  },
  {
    path: paths.register,
    component: SigninComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppAuthRoutingModule { }
