import { Component, OnInit } from '@angular/core';
import { Section } from '../../models/section';
import { SectionService } from '../../services/section.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {
  isPopUpActive = false;
  sections: Section[] = [];
  constructor(private sectionService: SectionService) { }
  ngOnInit() {
    this.getSections();
  }
  getSections() {
    return this.sectionService.getSections().subscribe(sections => {
      this.sections = sections;
    });
  }
  activatePopup() {
    this.isPopUpActive = true;
  }
  changePopupStatus(value) {
    this.isPopUpActive = value;
  }
}
