import { Component, OnInit } from '@angular/core';

import { ChartsService, ComplaintsWithPercent } from '../../services/ChartsService';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: []
})
export class ChartsComponent implements OnInit {

  dataSource: ComplaintsWithPercent[];

  constructor(service: ChartsService) {
    this.dataSource = service.getComplaintsData()
  }

  ngOnInit() {
  }

  customizeTooltip = (info: any) => {
    return {
      html: "<div><div class='tooltip-header'>" +
        info.argumentText + "</div>" +
        "<div class='tooltip-body'><div class='series-name'>" +
        info.points[0].seriesName +
        ": </div><div class='value-text'>" +
        info.points[0].valueText +
        "</div><div class='series-name'>" +
        info.points[1].seriesName +
        ": </div><div class='value-text'>" +
        info.points[1].valueText +
        "% </div></div></div>"
    };
  }

  customizeLabelText = (info: any) => {
    return info.valueText + "%";
  }

}
