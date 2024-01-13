import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PokemonTabComponent } from './pokemon-tab/pokemon-tab.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonTabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, FormsModule]
})
export class AppModule { }
