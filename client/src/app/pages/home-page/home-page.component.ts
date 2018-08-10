import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { MainService, CsvJson } from '../../services/main.service';

@Component({
  selector: 'hyp-home-page',
  template: `
    <test-button-demo></test-button-demo>
    <div class="container">
      <hyp-csv-upload (uploadedFile)="refreshFiles()"></hyp-csv-upload>
      <hyp-query [files]="files | async"></hyp-query>
      <hyp-bar-chart-demo></hyp-bar-chart-demo>
      <div class="spacer"></div>
      <hyp-dag-demo></hyp-dag-demo>
    </div>
  `,
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  files: Observable<string[]>

  constructor(
    private main: MainService
  ) { }

  ngOnInit() {
    this.main.test().subscribe(res => console.log(res));
    this.files = this.main.getCsvJsonUploadList();
  }

  refreshFiles() {
    this.files = this.main.getCsvJsonUploadList();
  }

}
