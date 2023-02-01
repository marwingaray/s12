import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro/registro.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    RegistroComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ViewsModule { }
