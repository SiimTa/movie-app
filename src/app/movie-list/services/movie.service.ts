import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, filter, find } from 'rxjs/operators';

// Import mocked data
import { movies } from '../../../content/movie.mock-data';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor() {}

  // Transform mocked data into an Observable, so we could 'pipe' it in 'movie-list.effects'
  getMovies() {
    console.log(movies);
    return of(movies);
  }

  // Mock a service call for certain movie when app is first accesed via direct url
  // ex: movie-details/:movieId
  getMovie(id) {
    console.log('getmovie with id:' + +id);

    const movie = movies.filter(item => item.id == id);

    return of(movie);
  }
}
