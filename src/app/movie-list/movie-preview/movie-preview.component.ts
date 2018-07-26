import { Component, OnInit, Input } from '@angular/core';

import { MovieModel } from '../../../content/movie-details.model';

@Component({
  selector: 'app-movie-preview',
  templateUrl: './movie-preview.component.html',
  styleUrls: ['./movie-preview.component.scss']
})
export class MoviePreviewComponent implements OnInit {
  @Input() movie: MovieModel;

  constructor() {}

  ngOnInit() {}
}
