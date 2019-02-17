import {BrowserModule, DomSanitizer} from '@angular/platform-browser';
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
import { ArticleCommentsComponent } from './components/main-page/article-comments.component';
import { AuthComponent } from './components/auth-page/auth.component';
import { LoginComponent } from './components/auth-page/login.component';
import { RegistrationComponent } from './components/auth-page/registration.component';
import { CookieService } from 'ngx-cookie-service';
import { AdminComponent } from './components/admin-page/admin.component';
import { UserDetailsComponent } from './components/admin-page/user-details.component';
import { CategoryDetailsComponent } from './components/admin-page/category-details.component';
import { ArticlesAdminComponent } from './components/admin-page/articles-admin.component';

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
    ArticleDetailsComponent,
    ArticleCommentsComponent,
    AuthComponent,
    LoginComponent,
    RegistrationComponent,
    AdminComponent,
    UserDetailsComponent,
    CategoryDetailsComponent,
    ArticlesAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
