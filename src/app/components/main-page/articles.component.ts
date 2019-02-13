import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.less']
})
export class ArticlesComponent implements OnInit {
  articles: Article[] = [];
  constructor(private articleService: ArticleService) { }
  ngOnInit() {
    this.getArticles();
  }
  getArticles() {
    return this.articleService.getArticles().subscribe(articles => {
      this.articles = articles;
    });
  }
}
