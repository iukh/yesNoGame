import { Component, OnInit } from '@angular/core';
import { Section } from '../../models/section';
import { SectionService } from '../../services/section.service';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.less']
})
export class CategoryDetailsComponent implements OnInit {
  activeSections: Section[];
  plannedSections: Section[] = [];

  constructor(private sectionService: SectionService) { }
  ngOnInit() {
    this.getSections();
  }

  getSections() {
    return this.sectionService.getSections().subscribe(sections => {
      this.activeSections = sections;
    });
  }

}
