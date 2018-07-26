import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { MovieModel } from '../../../content/movie-details.model';

@Component({
  selector: 'app-movie-preview',
  templateUrl: './movie-preview.component.html',
  styleUrls: ['./movie-preview.component.scss']
})
export class MoviePreviewComponent implements OnInit {
  @Input() movie: MovieModel;
  movieId$: Observable<any>;

  constructor(route: ActivatedRoute) {
    this.movieId$ = route.params.pipe(map(params => params.id));
  }

  ngOnInit() {}
}
