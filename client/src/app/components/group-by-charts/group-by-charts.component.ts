import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { GraphData } from '../../services/main.service';

@Component({
  selector: 'hyp-group-by-charts',
  template: `
  <mat-card>
    <ngx-charts-bar-vertical
      [view]="view"
      [scheme]="colorScheme"
      [results]="ate1"
      [xAxis]="true"
      [yAxis]="true"
      [legend]="false"
      [showXAxisLabel]="true"
      [showYAxisLabel]="true"
      xAxisLabel="Treatment ({{ treatment }})"
      yAxisLabel="Outcome ({{ outcome }})">
    </ngx-charts-bar-vertical>
  </mat-card>
  <mat-card *ngIf="ate2">
    <ngx-charts-bar-vertical-2d
      [view]="view"
      [scheme]="colorScheme"
      [results]="ate2"
      [xAxis]="true"
      [yAxis]="true"
      [legend]="false"
      [showXAxisLabel]="true"
      [showYAxisLabel]="true"
      xAxisLabel="Treatment & Grouping Attribute"
      yAxisLabel="Outcome">
    </ngx-charts-bar-vertical-2d>
  </mat-card>
  `,
  styleUrls: ['./group-by-charts.component.scss']
})
export class GroupByChartsComponent implements OnChanges {
  @Input() data: any[];
  @Input() graphData: GraphData;
  public view: any[] = [900, 400];
  public colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  public ate1: any[];
  public ate2: any[];
  public treatment: string;
  public outcome: string;

  constructor() { }

  ngOnChanges() {
    this.ate1 = this.data[0];
    if (this.data[1]) {
      this.ate2 = this.data[1];
    }
    this.treatment = this.graphData.correlation.treatment[0];
    this.outcome = this.graphData.correlation.outcome[0];
  }

}
