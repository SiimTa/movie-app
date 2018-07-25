import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Import root module
import { AppComponent } from './app.component';

// Import store & -devtools dependencies
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// Import components
import { MovieListComponent } from './movie-list/movie-list.component';

// Import reducers from SDK
import { reducers } from '../SDK/reducers';

@NgModule({
  declarations: [AppComponent, MovieListComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      moviesList: reducers.movieListReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25 // Retains last 25 states
    })
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
