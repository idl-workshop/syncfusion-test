import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { FileManagerComponent as SyncFusionFileManagerComponent,
  NavigationPaneService, ToolbarService, DetailsViewService,
  } from '@syncfusion/ej2-angular-filemanager';

// Component
// https://www.syncfusion.com/angular-ui-components/angular-file-manager
// https://ej2.syncfusion.com/angular/documentation/api/file-manager/#searchsettings

// Samples
// https://github.com/syncfusion/ej2-angular-samples

// Support Notes
// https://www.syncfusion.com/support/directtrac/incidents/243017

// https://ej2.syncfusion.com/angular/demos/#/material/file-manager/overview

@Component({
  selector: 'file-manager',
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [ NavigationPaneService, ToolbarService, DetailsViewService],
})
export class FileManagerComponent implements OnInit {

  public ajaxSettings: object;
  public view: string;
  public demoHostUrl: string = 'https://ej2services.syncfusion.com/production/web-services/';
  public hostUrl: string = 'http://localhost:3000';
  public folderId: string = '5da50e629ece454e5cccc86c';

  constructor() { }

  public ngOnInit(): void {
    // this.ajaxSettings = {
    //     url: this.hostUrl + 'api/FileManager/FileOperations',
    //     getImageUrl: this.hostUrl + 'api/FileManager/GetImage',
    //     uploadUrl: this.hostUrl + 'api/FileManager/Upload',
    //     downloadUrl: this.hostUrl + 'api/FileManager/Download'
    // };

    this.ajaxSettings = {
//      url: `${this.hostUrl}/fm/base/${this.folderId}`,
//     url: this.demoHostUrl + 'api/FileManager/FileOperations',
//      url: `https://webhook.site/9e287f1f-55ef-43b4-a987-f39676b25234`, // `https://2e015389-9950-448f-9eb0-42dc5ba62f49.mock.pstmn.io`, // `${this.hostUrl}/fm/base/${this.folderId}`,
      url: `${this.hostUrl}/fm/base/${this.folderId}`,
      getImageUrl: `${this.hostUrl}/fm/getImage/${this.folderId}`,
      uploadUrl: `${this.hostUrl}/fm/upload/${this.folderId}`,
      downloadUrl: `${this.hostUrl}/fm/download/${this.folderId}`,
    };

    console.log(this.ajaxSettings);

    this.view = 'Details';
  }

}
