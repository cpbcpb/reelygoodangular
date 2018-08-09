import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import {MovieService} from './services/movie.service';
import { AppComponent } from './app.component';
import { TitlesearchComponent } from './titlesearch/titlesearch.component';
import { AdvancedsearchComponent } from './advancedsearch/advancedsearch.component';
import { ResultsComponent } from './results/results.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { MainComponent } from './main/main.component';
import { ListComponent } from './list/list.component';
import { MoviedetailComponent } from './moviedetail/moviedetail.component';

const appRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'profile', 
  component: ProfileComponent },

  // { path: '**', component: PageNotFoundComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    TitlesearchComponent,
    AdvancedsearchComponent,
    ResultsComponent,
    LoginComponent,
    ProfileComponent,
    MainComponent,
    ListComponent,
    MoviedetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
