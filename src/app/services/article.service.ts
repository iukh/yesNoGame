import { Injectable } from '@angular/core';
import { Article } from '../models/article';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }
  getArticles() {
    return this.http.get<Array<Article>>(`http://localhost:3000/api/articleManagement/articles`);
  }
  addArticle (article: Article): Observable<Article> {
    const url = `http://localhost:3000/api/articleManagement/article`;
    return this.http.post<Article>(url, article, httpOptions);
  }
  getArticleById(id: string): Observable<Article> {
    return this.http.get<Article>(`http://localhost:3000/api/articleManagement/article/${id}`);
  }
  getArticlesUnderSection(sectionId: string): Observable<Array<Article>> {
    return this.http.get<Array<Article>>(`http://localhost:3000/api/articleManagement/section/${sectionId}/articles`);
  }
}
