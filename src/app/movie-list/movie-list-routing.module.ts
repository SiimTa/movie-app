import { Routes } from '@angular/router';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';

export const movieListRoutes: Routes = [
  {
    path: 'movie-details/:id',
    component: MovieDetailsComponent
  }
];
