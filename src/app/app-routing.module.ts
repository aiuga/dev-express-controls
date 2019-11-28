import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


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
import { DataGrid2Component } from './controls/data-grid2/data-grid2.component';



const routes: Routes = [
  {
    path: 'three-map',
    component: ThreeMapComponent,
  },
  {
    path: 'data-grid',
    component: DataGridComponent
  },
  {
    path: 'charts',
    component: ChartsComponent
  },
  {
    path: 'others',
    component: OthersComponent
  },
  {
    path: 'scroller',
    component: ScrollerComponent
  },{
    path: 'groupList',
    component: GroupListComponent
  },{
    path: 'validation',
    component: ValidationComponent
  },{
    path: 'action-sheet',
    component: ActionSheetComponent
  },{
    path: 'bar-gauge',
    component: BarGaugeComponent
  },{
    path: 'bullet',
    component: BulletComponent
  },{
    path: 'data-grid-api',
    component: DataGrid2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
