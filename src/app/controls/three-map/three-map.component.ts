import { Component, OnInit } from '@angular/core';

import { CitiesPopulation, ThreeService } from '../../services/ThreeService';
import { DxTreeMapModule } from 'devextreme-angular';

@Component({
  selector: 'app-three-map',
  templateUrl: './three-map.component.html',
  styleUrls: []
})
export class ThreeMapComponent implements OnInit {

  citiesPopulations: CitiesPopulation[];

  constructor(service: ThreeService) {
      this.citiesPopulations = service.getCitiesPopulations();
  }

  ngOnInit(){
  }
  
  customizeTooltip(arg) {
      var data = arg.node.data,
          result = null;

      if (arg.node.isLeaf()) {
          result = "<span class='city'>" + data.name + "</span> (" +
              data.country + ")<br/>Population: " + arg.valueText;
      }

      return {
          text: result
      };
  }

}
