import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientsCardComponent } from './components/clients/clients-card/clients-card.component';
import {MatButtonModule} from '@angular/material/button';
import { AboutComponent } from './components/about/about.component';
import {MatIconModule} from '@angular/material/icon';
import { WeofferComponent } from './components/weoffer/weoffer.component';
import { WeofferCardComponent } from './components/weoffer/weoffer-card/weoffer-card.component';
import {MatCardModule} from '@angular/material/card';
import { CounterComponent } from './components/counter/counter.component';
import { ContactComponent } from './components/contact/contact.component';
import { FormComponent } from './components/contact/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    ClientsComponent,
    ClientsCardComponent,
    AboutComponent,
    WeofferComponent,
    WeofferCardComponent,
    CounterComponent,
    ContactComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
