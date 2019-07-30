import { Component, OnInit } from '@angular/core';
//import { sampleData } from './datasource';

import { ToolbarItems, EditSettingsModel } from '@syncfusion/ej2-angular-treegrid';
import { Toolbar } from '@syncfusion/ej2-navigations';

// https://ej2.syncfusion.com/angular/documentation/treegrid/getting-started/

// Release Notes
// https://ej2.syncfusion.com/angular/documentation/release-notes/17.2.28/#file-manager

// SETUP
// npm install @syncfusion/ej2-angular-treegrid --save

import * as sampleData from '../../../../../data/data.json';

@Component({
  selector: 'tree-grid',
  templateUrl: './tree-grid.component.html',
  styleUrls: ['./tree-grid.component.scss'],
})
export class TreeGridComponent implements OnInit {

  public data: any[];
  public editSettings: EditSettingsModel;
  public toolbarOptions: ToolbarItems[];
  // public commands: CommandModel;

  // public toolbarOptions: ToolbarItems[];

  constructor() { }

  ngOnInit() {

    this.data = sampleData.stages;

//    this.toolbarOptions = ['Print', 'Search'];
    this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Cell' };

    this.toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'ExpandAll', 'CollapseAll'];

  }

}
