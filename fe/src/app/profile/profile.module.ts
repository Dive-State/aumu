import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import {ProfileRoutingModule} from "./profile-routing.module";
import { YourMusicComponent } from './components/your-music/your-music.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {BrowserModule} from "@angular/platform-browser";
import {MatIcon, MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [
    MainComponent,
    YourMusicComponent
  ],
  imports: [
    FormsModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    ProfileRoutingModule,
    CommonModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class ProfileModule { }
