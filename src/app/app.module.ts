import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MoviesModule } from './modules/movies/movies.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { RouterModule } from '@angular/router';
import { CharacterComponent } from './components/character/character.component';
import {PageNotFoundComponent} from './components/page-not-found.component';
import { MyMaterialModule } from './modules/my-material/my-material.module';

@NgModule({
  declarations: [
    AppComponent,
    CharactersListComponent,
    CharacterComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MoviesModule,
    AppRoutingModule,
    MyMaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
