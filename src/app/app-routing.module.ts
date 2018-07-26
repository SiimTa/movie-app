import { Routes } from '@angular/router';
import { MovieDetailsComponent } from './movie-list/movie-details/movie-details.component';
import { AppComponent } from './app.component';

export const appRoutes: Routes = [
  {
    path: 'movie-details/:id',
    component: MovieDetailsComponent
  },

  {
    path: 'movie-list',
    component: AppComponent,
    data: { title: 'Awesome movie app' }
  },

  {
    path: '',
    redirectTo: '/movie-list',
    pathMatch: 'full'
  }
];
