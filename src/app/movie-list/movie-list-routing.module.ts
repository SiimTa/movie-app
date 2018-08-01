import { Routes } from '@angular/router';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieListComponent } from './movie-list.component';

/**
 * Routing which takes place within MovieDetails module
 */
export const movieListRoutes: Routes = [
  {
    path: 'movie-list',
    component: MovieListComponent
  },
  {
    path: 'movie-details/:id',
    component: MovieDetailsComponent
  }
];
