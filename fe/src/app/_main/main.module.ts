import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './comnponents/header/header.component';
import { FooterComponent } from './comnponents/footer/footer.component';
import {RouterModule} from "@angular/router";
import { NotFoundComponent } from './comnponents/not-found/not-found.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NotFoundComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class MainModule { }
