import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.less']
})
export class ArticleDetailsComponent implements OnInit {
  currentArticle: Article = null;
  articleId = this.router.snapshot.params['id'];
  constructor(private articleService: ArticleService,
              private router: ActivatedRoute) {}
  ngOnInit() {
    this.getArticleById(this.articleId);
  }
  getArticleById(id: string) {
    return this.articleService.getArticleById(id).subscribe(article => {
      this.currentArticle = article;
    });
  }
}
