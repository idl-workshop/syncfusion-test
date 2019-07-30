import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule} from '@ionic/angular';
// import { BrowserModule } from '@angular/platform-browser';

// SyncFusion Modules
import { TreeGridModule } from '@syncfusion/ej2-angular-treegrid';
import { PageService, SortService, FilterService, EditService, ToolbarService } from '@syncfusion/ej2-angular-treegrid';

// import {ButtonModule} from '@syncfusion/ej2-angular-buttons';
// import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';

// SyncFusion / RichTextEditor
// //import { IDLRichTextEditorComponent } from './rich-text-editor/rich-text-editor.component';
import { RichTextEditorModule } from '@syncfusion/ej2-angular-richtexteditor';
import { RichTextEditorModel, RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';

// SyncFusion / DataGrid
import { GridModule, DetailRowService } from '@syncfusion/ej2-angular-grids';

// Internal Component Wrappers
import { RichTextEditorComponent } from './rich-text-editor/rich-text-editor.component';
import { FileManagerComponent } from './file-manager/file-manager.component';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';
import { TreeGridComponent } from './tree-grid/tree-grid.component';
import { DataGridComponent } from './data-grid/data-grid.component';

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
//        BrowserModule,

        // TreeGrid
        TreeGridModule,


        // RichTextEditor
        RichTextEditorAllModule,

        // DataGrid
        GridModule,

        // UploaderModule,
        // FileManagerAllModule,
        // RichTextEditorAllModule,
        // TreeGridModule,

        // ButtonModule,
        // DialogModule,
    ],
    declarations: [
//        DropDownListComponent,
//        ButtonComponent,
        FileUploaderComponent,
        FileManagerComponent,
        RichTextEditorComponent,
        TreeGridComponent,
        DataGridComponent,
    ],
    // https://angular.io/guide/entry-components#the-entrycomponents-array
    // entryComponents: [
    //     FileUploaderComponent,
    //     FileManagerComponent,
    //     RichTextEditorComponent,
    //     TreeGridComponent,
    // ],
    providers: [

        // // ngx-markdown
        // MarkdownService,

        // // FileManager
        // BreadCrumbBarService,
        // DetailsViewService,
        // LargeIconsViewService,

        // // RichTextEditor
        // ToolbarService,
        // LinkService,
        // ImageService,
        // HtmlEditorService,
        // MarkdownEditorService,
        // MarkedOptions,

        // TreeGrid
        PageService,
        SortService,
        FilterService,
        EditService,
        ToolbarService,
        DetailRowService,

    ],
    exports: [
        FileUploaderComponent,
        FileManagerComponent,
        RichTextEditorComponent,
        TreeGridComponent,
        DataGridComponent,
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
//        NO_ERRORS_SCHEMA
    ],
})
export class SyncFusionModule {}
