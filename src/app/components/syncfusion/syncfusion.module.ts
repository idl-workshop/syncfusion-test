import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule} from '@ionic/angular';
import { BrowserModule } from '@angular/platform-browser';

import { RichTextEditorComponent } from './rich-text-editor/rich-text-editor.component';
import { FileManagerComponent } from './file-manager/file-manager.component';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';
import { TreeGridComponent } from './tree-grid/tree-grid.component';

@NgModule({
    imports: [
        CommonModule,
        IonicModule,

        // UploaderModule,
        // FileManagerAllModule,
        // RichTextEditorAllModule,
        // TreeGridModule,

        // BrowserModule,
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

        // // TreeGrid
        // PageService,
        // SortService,
        // FilterService,

    ],
    exports: [
        FileUploaderComponent,
        FileManagerComponent,
        RichTextEditorComponent,
        TreeGridComponent,
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
//        NO_ERRORS_SCHEMA
    ],
})
export class SyncFusionModule {}
