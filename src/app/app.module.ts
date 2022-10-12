import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PortadaComponent } from './components/portada/portada.component';
import { SpeciesComponent } from './components/species/species.component';
import { CharactersComponent } from './components/characters/characters.component';
import { FilmsComponent } from './components/films/films.component';
import { StarshipsComponent } from './components/starships/starships.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { MaterialImportsModule } from './modules/material-imports.interface';

@NgModule({
  declarations: [
    AppComponent,
    PortadaComponent,
    SpeciesComponent,
    CharactersComponent,
    FilmsComponent,
    StarshipsComponent,
    VehiclesComponent,
    PlanetsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialImportsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
