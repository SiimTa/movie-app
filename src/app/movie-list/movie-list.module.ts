import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import module components
import { MovieListComponent } from './movie-list.component';
import { MoviePreviewComponent } from './movie-preview/movie-preview.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

// Import Module Effects & ngrx dependency
import { EffectsModule } from '@ngrx/effects';
import { MovieListEffects } from '../../SDK/effects/movie-list/movie-list.effects';

// Import module routing
import { RouterModule } from '@angular/router';
import { movieListRoutes } from './movie-list-routing.module';

@NgModule({
  declarations: [
    MovieListComponent,
    MoviePreviewComponent,
    MovieDetailsComponent
  ],
  imports: [
    CommonModule,
    EffectsModule.forRoot([MovieListEffects]),
    RouterModule.forChild(movieListRoutes)
  ],
  exports: [MovieListComponent, MoviePreviewComponent, MovieDetailsComponent]
})
export class MovieListModule {}
