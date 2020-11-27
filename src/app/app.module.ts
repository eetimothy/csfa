import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { CountryListComponent } from './components/country-list.component';
import { ApiComponent } from './components/api.component';
import { NewsComponent } from './components/news.component';
import { MainComponent } from './components/main.component';

const ROUTES: Routes = [
  { path: '', component: MainComponent },
  { path: 'country-list', component: CountryListComponent },
  { path: 'api', component: ApiComponent},
  { path: 'news', component: NewsComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    CountryListComponent,
    ApiComponent,
    NewsComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    FormsModule, ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
