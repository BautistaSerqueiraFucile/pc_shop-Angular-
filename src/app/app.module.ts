import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PcListComponent } from './pc-list/pc-list.component';
import { PcCarritoComponent } from './pc-carrito/pc-carrito.component';

import { FormsModule } from '@angular/forms';
import { PcAboutComponent } from './pc-about/pc-about.component';
import { PcComputersComponent } from './pc-computers/pc-computers.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PcListComponent,
    PcCarritoComponent,
    PcAboutComponent,
    PcComputersComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
