import { Component, OnInit, ViewChild } from '@angular/core';
import DataGrid from "devextreme/ui/data_grid";

@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: []
})
export class OthersComponent implements OnInit {

  constructor() {
    this.customizeLayers = this.customizeLayers.bind(this);
   }

  ngOnInit() {
  }

  listItems = [{
    text: 'Cars',
    badge: '12'
  }, {
    text: 'Bikes',
    badge: '5'
  }];

  okClicked(e) {
    alert("Ok clicked");
  }

  myCountry: string = "USA"; // we need to access this context variable in the callback function
 

  customizeLayers(elements) {
      let country = this.myCountry;
      // ...
  }

  bindingProperty: string = "Some value";

  dataGridInstance: DataGrid;
  saveGridInstance (e) {
      this.dataGridInstance = e.component;
  }
  refresh() {
      this.dataGridInstance.refresh();
      alert("Refreshed");
  }

}
