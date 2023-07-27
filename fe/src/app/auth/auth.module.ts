import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppAuthRoutingModule} from "./auth-routing.module";
import { LoginComponent } from './components/login/login.component';
import { SigninComponent } from './components/signin/signin.component';
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    LoginComponent,
    SigninComponent
  ],
  imports: [
    MatInputModule,
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppAuthRoutingModule,
    MatIconModule,
    MatButtonModule,
  ]
})
export class AuthModule { }
