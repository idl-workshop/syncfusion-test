import { Component, OnInit, ViewChild } from '@angular/core';
//import { data } from './datasource';

import { GridComponent, DetailRowService, GridModel } from '@syncfusion/ej2-angular-grids';

// https://ej2.syncfusion.com/angular/demos/#/material/grid/drag-drop-within-grid
import { RowDDService, SelectionService, RowDragEventArgs } from '@syncfusion/ej2-angular-grids';

import * as sampleData from '../../../../../data/data.json';
import { Query } from '@syncfusion/ej2-data';


// Getting Started
// https://ej2.syncfusion.com/angular/documentation/grid/getting-started/
// npm install @syncfusion/ej2-angular-grids --save

// Demos
// https://ej2.syncfusion.com/angular/demos/#/material/grid/hierarchy
// https://ej2.syncfusion.com/angular/demos/#/material/grid/drag-drop-within-grid

@Component({
  selector: 'data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss'],
  providers: [RowDDService, SelectionService],
})
export class DataGridComponent implements OnInit {

  @ViewChild('ctl', {static: false})
  public ctl: GridComponent;

  public data: object[];

  // https://plnkr.co/edit/NfDux3wkhnLz032CRqzH?p=preview
  public childGrid: GridModel = {
//    dataSource: this.data,
    detailDataBound: this.bound,
    allowRowDragAndDrop: true,
//    queryString: 'id',
    columns: [
        { field: 'id', headerText: 'Step ID', textAlign: 'Right', width: 120 },
        { field: 'name', headerText: 'Name', width: 150 },
    ],
  };



  constructor() { }

  ngOnInit(): void {

    this.data = sampleData.stages;

  }

  dataBound(args: any): void {

    console.log(`dataBound(${JSON.stringify(args.data.id)})`);

    const grid = args.detailElement.querySelector('.e-grid').ej2_instances[0];
    grid.query = new Query();
    grid.dataSource = args.data.steps;

    // this.ctl.query = new Query();
    // this.childGrid.query = new Query();
    // this.childGrid.dataSource = args.data.steps;
//    grid.query = new Query();    // Clear the query 
//    grid.dataSource = data;      // Provide your custom data here for first child 
  }

  bound(args: any): void {
    // console.log(`bound(${JSON.stringify(args.data.id)})`);
    // // grid.query = new Query();         // Clear the query 
    // // grid.dataSource = customerData;   // Provide your custom data here for second child 
    // this.ctl.query = new Query();
    // this.ctl.dataSource = args.data.steps;
  }

  rowDrop(args: RowDragEventArgs): void {

    // https://ej2.syncfusion.com/documentation/api/grid/rowDropEventArgs/
    console.log(`rowDrop(${JSON.stringify(args.fromIndex)} to ${args.dropIndex})`);

  }

}
