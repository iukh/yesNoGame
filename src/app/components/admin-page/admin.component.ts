import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.less']
})
export class AdminComponent implements OnInit {
  currentTab = 0;
  constructor() { }

  ngOnInit() {
  }
  setCurrentTabValue(tabName: number) {
    this.currentTab = tabName;
  }
}
