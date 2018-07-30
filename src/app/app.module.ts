import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Import Modules used within the App
import { MovieListModule } from './movie-list/movie-list.module';

// Import root component
import { AppComponent } from './app.component';

// Import store & -devtools dependencies
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

// Import all reducers used in app throughout different modules
import { reducers } from './reducers/';

// Import routing module & application routes
import { RouterModule } from '@angular/router';
import { appRoutes } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MovieFilterComponent } from './movie-list/components/movie-filter/movie-filter.component';

@NgModule({
  declarations: [AppComponent, FooterComponent, HeaderComponent],
  imports: [
    BrowserModule,
    MovieListModule,
    RouterModule.forRoot(appRoutes),
    StoreModule.forRoot({
      ...reducers
    }),

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
export class AppModule {}
