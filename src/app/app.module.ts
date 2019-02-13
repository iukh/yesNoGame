import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './static/page-not-found-component/page-not-found.component';
import { MainComponent } from './components/main-page/main.component';
import { MainHeaderComponent } from './static/main-header/main-header.component';
import { MainFooterComponent } from './static/main-footer/main-footer.component';
import { GameRulesComponent } from './static/game-rules/game-rules.component';
import { ArticlesComponent } from './components/main-page/articles.component';
import { ArticlePopupComponent } from './components/main-page/article-popup.component';
import { ArticleDetailsComponent } from './components/main-page/article-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    MainComponent,
    MainHeaderComponent,
    MainFooterComponent,
    GameRulesComponent,
    ArticlesComponent,
    ArticlePopupComponent,
    ArticleDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
