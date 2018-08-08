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
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

const appRoutes: Routes = [
  { path: 'title', component: TitlesearchComponent },
  {
    path: 'app',
    component: AppComponent,
    data: { title: 'Movie Review Site' }
  },
  { path: '',
    redirectTo: '/app',
    pathMatch: 'full'
  },
  // { path: '**', component: PageNotFoundComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    TitlesearchComponent,
    AdvancedsearchComponent,
    ResultsComponent,
    SignupComponent,
    LoginComponent,
    ProfileComponent
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
