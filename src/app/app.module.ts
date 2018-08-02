import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Import Modules used within the App
import { MovieListModule } from './movie-list/movie-list.module';

// Import root component
import { AppComponent } from './app.component';

// Import store & -devtools dependencies
import { StoreModule, Store } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

// Import all reducers used in app throughout different modules
import { AppState, reducers } from './reducers';

// Import routing module & application routes
import { RouterModule } from '@angular/router';
import { appRoutes } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import * as MovieListActions from './movie-list/actions/movie-list.actions';
import { SearchComponent } from './header/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    MovieListModule,
    StoreModule.forRoot({
      ...reducers
    }),
    RouterModule.forRoot(appRoutes),

    /**
     * EffectsModule.forRoot() is imported once in the root module and
     * sets up the effects class to be initialized immediately when the
     * application starts.
     * #Documentation: https://github.com/ngrx/platform/blob/master/docs/effects/README.md
     */
    EffectsModule.forRoot([]),

    /**
     * Store Devtools extension for browsers
     * Enables time-travel debugging
     * #Documentation: https://github.com/ngrx/platform/blob/master/docs/store-devtools/README.md
     */
    StoreDevtoolsModule.instrument({
      name: 'NgRx Movie Store',
      maxAge: 25
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private store: Store<AppState>) {
    // Request data necessary for app
    // Doing this only because I wanted to put MovieList into separate Module(learn by it)
    this.store.dispatch(new MovieListActions.GetMovies());
  }
}
