import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';
import { Section } from '../../models/section';
import { SectionService } from '../../services/section.service';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.less']
})
export class ArticlesComponent implements OnInit {
  articles: Article[] = [];
  sections: Section[];
  selectedSectionId: string;
  constructor(private articleService: ArticleService,
              private sectionService: SectionService) { }
  ngOnInit() {
    this.getArticles();
    this.getSections();
  }
  getArticles() {
    return this.articleService.getArticles().subscribe(articles => {
      this.articles = articles;
    });
  }
  getSections() {
    return this.sectionService.getSections().subscribe(sections => {
      this.sections = sections;
      console.log(this.sections);
    });
  }
  getArticlesUnderSection(sectionId) {
    return this.articleService.getArticlesUnderSection(sectionId).subscribe(articles => {
      this.articles = articles;
    });
  }
  onChange(selectedSection) {
    this.selectedSectionId = selectedSection;
    console.log(this.selectedSectionId);
  }
  filterArticles() {
    console.log('filter here');
    if (this.selectedSectionId === 'all') {
      this.getArticles();
    } else {
      this.getArticlesUnderSection(this.selectedSectionId);
    }
  }
}
