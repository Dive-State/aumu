import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {authRoot} from "./auth/auth.navigation";
import {profileRoot} from "./profile/profile.navigation";
import {AuthGuard} from "./auth/guards/auth.guard";
import {appNav} from "./app.navigation";
import {NotFoundComponent} from "./_main/comnponents/not-found/not-found.component";

const routes: Routes = [
  {
    path: authRoot,
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: profileRoot,
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule),
    canActivate: [ AuthGuard ]
  },
  {
    path: '',
    redirectTo: appNav.profileNav.main,
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
