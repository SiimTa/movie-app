import { Routes } from '@angular/router';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';

/**
 * Routing which takes place within MovieDetails module
 */
export const movieListRoutes: Routes = [
  {
    path: 'movie-details/:id',
    component: MovieDetailsComponent
  }
];
