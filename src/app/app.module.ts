import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ThreeService } from './services/ThreeService';
import { DataGridService } from './services/DataGridService';
import { ChartsService } from './services/ChartsService';
import { ScrollerService } from './services/ScrollerService';
import { GroupListService } from './services/GroupListService';
import { ValidationService } from './services/ValidationService';

import { DxTreeMapModule } from 'devextreme-angular';
import { DxDataGridModule, DxBulletModule, DxTemplateModule } from 'devextreme-angular';
import { DxChartModule } from 'devextreme-angular';
import { DxListModule } from 'devextreme-angular';
import { DxScrollViewModule } from 'devextreme-angular';
import { DxSelectBoxModule, DxCheckBoxModule, DxTextBoxModule, DxDateBoxModule, DxButtonModule, DxValidatorModule, DxValidationSummaryModule } from 'devextreme-angular';
import { DxActionSheetModule, DxSwitchModule } from 'devextreme-angular';
import { DxBarGaugeModule } from 'devextreme-angular';

import { ThreeMapComponent } from './controls/three-map/three-map.component';
import { DataGridComponent } from './controls/data-grid/data-grid.component';
import { ChartsComponent } from './controls/charts/charts.component';
import { OthersComponent } from './controls/others/others.component';
import { ScrollerComponent } from './controls/scroller/scroller.component';
import { GroupListComponent } from './controls/group-list/group-list.component';
import { ValidationComponent } from './controls/validation/validation.component';
import { ActionSheetComponent } from './controls/action-sheet/action-sheet.component';
import { BarGaugeComponent } from './controls/bar-gauge/bar-gauge.component';
import { BulletComponent } from './controls/bullet/bullet.component';
import { BulletService } from './services/BulletService';
import { DataGrid2Component } from './controls/data-grid2/data-grid2.component';



@NgModule({
  declarations: [
    AppComponent,
    ThreeMapComponent,
    DataGridComponent,
    ChartsComponent,
    OthersComponent,
    ScrollerComponent,
    GroupListComponent,
    ValidationComponent,
    ActionSheetComponent,
    BarGaugeComponent,
    BulletComponent,
    DataGrid2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxButtonModule, //modul pentru butoane
    DxTreeMapModule, // modul pentru DxButtonModule
    DxDataGridModule, // modul pentru data-grid
    DxTemplateModule, // modul pentru data-grid
    DxBulletModule, // modul pentru data-grid
    DxChartModule, // modulul pentru charts
    DxListModule, // modulul pentru liste
    DxTextBoxModule, // modulul pentru textbox
    DxScrollViewModule, DxCheckBoxModule, DxSelectBoxModule, // scrollerview
    DxValidatorModule, // modul pentru validation
    DxValidationSummaryModule, // modul pentru validation
    DxSelectBoxModule,
    DxCheckBoxModule,
    DxTextBoxModule,
    DxDateBoxModule,
    DxButtonModule,
    DxValidatorModule,
    DxValidationSummaryModule, // modul pentru validation
    DxActionSheetModule, // action sheet
    DxSwitchModule, // action sheet
    DxBarGaugeModule, // bar gauge
  ],
  providers: [ThreeService, DataGridService, ChartsService, ScrollerService, GroupListService, 
    ValidationService, BulletService],
  bootstrap: [AppComponent]
})
export class AppModule { }
