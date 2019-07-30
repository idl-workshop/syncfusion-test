import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

import { RichTextEditorComponent as SyncFusionRichTextEditorComponent } from '@syncfusion/ej2-angular-richtexteditor';
import { ToolbarService, LinkService, ImageService, HtmlEditorService,
  TableService, // ??
  MarkdownEditorService, // ??
  EditorMode, // ??
   } from '@syncfusion/ej2-angular-richtexteditor';

// Getting Started
// https://ej2.syncfusion.com/angular/documentation/rich-text-editor/getting-started/
// npm install @syncfusion/ej2-angular-richtexteditor --save

@Component({
  selector: 'rich-text-editor',
  templateUrl: './rich-text-editor.component.html',
  styleUrls: ['./rich-text-editor.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, TableService]
})
export class RichTextEditorComponent implements OnInit {

  // tslint:disable-next-line: variable-name
//  private _value: string = null;

// https://angular.io/api/core/ViewChild
@ViewChild('rte', {static: false})
public rteObj: SyncFusionRichTextEditorComponent;

// 2-way Databinding Setup
// https://stackoverflow.com/questions/52290322/implement-two-way-data-binding-for-custom-property

@Input() value: string = null;

@Output() valueChange: EventEmitter<any> = new EventEmitter<any>();

get v(): string {
  return this.value;
}
set v(value: string) {
  this.value = value;
  this.valueChange.emit(this.value);
}

// public tools: object = {
//   items: ['Bold', 'Italic', 'StrikeThrough', '|',
//   'Formats', 'OrderedList', 'UnorderedList', '|',
//   'CreateTable', 'CreateLink', 'Image', '|',
//   {
//       tooltipText: 'Preview',
//       template: '<button id="preview-code" class="e-tbar-btn e-control e-btn e-icon-btn">' +
//       '<span class="e-btn-icon e-md-preview e-icons"></span></button>'
//   }, '|', 'Undo', 'Redo']
// };

// // Defines the editor mode
// // 'Markdown'
// public mode: string = 'HTML'; // 'Markdown';

// public maxLength: number = 10;

// public height: number = 100;

constructor() { }

// https://medium.com/@paulstelzer/ionic-4-and-the-lifecycle-hooks-4fe9eabb2864
ngOnInit() {

  console.log (`richtexteditor.ngOnInit()`);

//    console.log (this.rteObj);

//    this.rteObj.refresh();

}

refresh() {
  this.rteObj.refresh();
}

ngAfterContentInit() {

  console.log (`richtexteditor.ngAfterContentInit()`);

  if (this.rteObj) {
//    this.rteObj.refresh();
  }

}

ngAfterViewInit() {

  console.log (`richtexteditor.ngAfterViewInit()`);

//    this.rteObj.refresh();

}

ionViewDidEnter() {

  console.log (`richtexteditor.ionViewDidEnter()`);

  // Force refresh of the editor
  // To properly calculate toolbar height
  // https://www.syncfusion.com/support/directtrac/incidents/241364
//    this.rteObj.refresh();

}

}
