import { Component, OnInit } from '@angular/core';

import { DataGridService } from '../../services/DataGridService';
import DataSource from 'devextreme/data/data_source';


@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: []
})
export class DataGridComponent implements OnInit {

  dataSource: DataSource;

  constructor(service: DataGridService) {
    this.dataSource = service.getDataSource();
}

  ngOnInit() {
  }

  collapsed = false;
  contentReady = (e) => {
      if(!this.collapsed) {
          this.collapsed = true;
          e.component.expandRow(["EnviroCare"]);
      }
  };
  customizeTooltip = (pointsInfo) => {
      return { text: parseInt(pointsInfo.originalValue) + "%" };
  }

}
