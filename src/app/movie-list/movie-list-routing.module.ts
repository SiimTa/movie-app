import { Routes } from '@angular/router';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';

/**
 * Routing that happens within Movie-Details module
 */
export const movieListRoutes: Routes = [
  {
    path: 'movie-details/:id',
    component: MovieDetailsComponent
  }
];
