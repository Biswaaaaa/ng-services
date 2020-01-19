import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { MoviesListComponent } from './modules/movies/components/movies-list/movies-list.component';
import { RouterModule } from '@angular/router';
import { MovieComponent } from './modules/movies/components/movie/movie.component';
import { CharacterComponent } from './components/character/character.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersListComponent,
    MoviesListComponent,
    MovieComponent,
    CharacterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { 
        path : 'movies',
        component: MoviesListComponent
      },
      {
         path : 'characters',
      component: CharactersListComponent

      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
