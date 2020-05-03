import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';
import { HanumanComponent } from './hanuman/hanuman.component';
import { ShivComponent } from './shiv/shiv.component';
import { GaneshComponent } from './ganesh/ganesh.component';
import { DurgaComponent } from './durga/durga.component';
import { VishnuComponent } from './vishnu/vishnu.component';
import { ChalisaComponent } from './chalisa/chalisa.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    CardComponent,
    AboutusComponent,
    ContactusComponent,
    HomeComponent,
    PageNotFoundComponent,
    ComingsoonComponent,
    HanumanComponent,
    ShivComponent,
    GaneshComponent,
    DurgaComponent,
    VishnuComponent,
    ChalisaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
