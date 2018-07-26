import { Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';

export const appRoutes: Routes = [
  {
    path: 'movie-list',
    component: MovieListComponent
  },

  {
    path: '',
    redirectTo: '/movie-list',
    pathMatch: 'full'
  }
];
