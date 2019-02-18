import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main-page/main.component';
import { PageNotFoundComponent } from './static/page-not-found-component/page-not-found.component';
import { GameRulesComponent } from './static/game-rules/game-rules.component';
import { ArticlesComponent } from './components/main-page/articles.component';
import { ArticleDetailsComponent } from './components/main-page/article-details.component';
import { AuthComponent } from './components/auth-page/auth.component';
import { AdminComponent } from './components/admin-page/admin.component';
import { AuthGuardGuard } from './auth-guard.guard';

const routes: Routes = [
  {path: 'home', component: MainComponent, canActivate: [AuthGuardGuard]},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'auth', component: AuthComponent},
  {path: 'stories', component: ArticlesComponent, canActivate: [AuthGuardGuard]},
  {path: 'stories/:id', component: ArticleDetailsComponent, canActivate: [AuthGuardGuard]},
  {path: 'rules', component: GameRulesComponent, canActivate: [AuthGuardGuard]},
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuardGuard]},
  {path: 'page-not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: 'page-not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
