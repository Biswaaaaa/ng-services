import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MovieComponent } from './components/movie/movie.component';
import { MoviesService } from './services/movies.service';
import { MoviesRoutingModule } from './movies-routing.module';
import { MyMaterialModule } from '../my-material/my-material.module';

@NgModule({
    imports: [CommonModule, 
        MoviesRoutingModule, 
        MyMaterialModule ],
    declarations: [MoviesListComponent, 
        MovieComponent],
    providers: [MoviesService]
})

export class MoviesModule { }