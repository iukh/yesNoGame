import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Article } from '../../models/article';
import { Section } from '../../models/section';
import { ArticleService } from '../../services/article.service';
import { SectionService } from '../../services/section.service';


@Component({
  selector: 'app-article-popup',
  templateUrl: './article-popup.component.html',
  styleUrls: ['./article-popup.component.less']
})
export class ArticlePopupComponent implements OnInit {
  articleForm: FormGroup;
  sections: Section[] = [];
  selectedSectionId: string;
  constructor(private fb: FormBuilder,
              private articleService: ArticleService,
              private sectionService: SectionService) { }

  @Output() isPopUpActive = new EventEmitter();

  closePopup() {
    this.isPopUpActive.emit(false);
    this.articleForm.reset();
    console.log('emit');
  }
  ngOnInit() {
    this.initForm();
    this.getSections();
  }
  initForm() {
    this.articleForm = this.fb.group({
      title: [null, Validators.required],
      text: [null, Validators.required],
      answer: [null, Validators.required],
      sectionId: [null, Validators.required],
      author: 'admin'
    });
  }
  addArticle(article) {
    return this.articleService.addArticle(article).subscribe(
      suc => {
        console.log(suc);
        this.closePopup();
      },
      err => {
        console.log('ERROR!!!');
        console.log(err);
      }
    );
  }
  onSubmit() {
    console.log(this.articleForm.value);
    const controls = this.articleForm.controls;
    if (this.articleForm.invalid) {
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());
      return;
    }
    this.addArticle(this.articleForm.value);
    this.articleForm.reset();
  }
  getSections() {
    return this.sectionService.getSections().subscribe(sections => {
      this.sections = sections;
    });
  };
  isControlInvalid(controlName: string): boolean {
    const control = this.articleForm.controls[controlName];
    const result = control.invalid && control.touched;
    return result;
  }
  onChange(selectedSection) {
    console.log(selectedSection);
  }
}
