import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

// import * as AspNetData from "devextreme-aspnet-data-nojquery";

@Component({
  selector: 'app-data-grid2',
  templateUrl: './data-grid2.component.html',
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataGrid2Component implements OnInit {

  // customersData: any;
  // shippersData: any;
  // dataSource: any;
  // url: string;
  // masterDetailDataSource: any;


  // constructor() {
  //   this.url = "https://js.devexpress.com/Demos/Mvc/api/DataGridWebApi";

  //   this.dataSource = AspNetData.createStore({
  //     key: "OrderID",
  //     loadUrl: this.url + "/Orders",
  //     insertUrl: this.url + "/InsertOrder",
  //     updateUrl: this.url + "/UpdateOrder",
  //     deleteUrl: this.url + "/DeleteOrder",
  //     onBeforeSend: function (method, ajaxOptions) {
  //       ajaxOptions.xhrFields = { withCredentials: true };
  //     }
  //   });

  //   this.customersData = AspNetData.createStore({
  //     key: "Value",
  //     loadUrl: this.url + "/CustomersLookup",
  //     onBeforeSend: function (method, ajaxOptions) {
  //       ajaxOptions.xhrFields = { withCredentials: true };
  //     }
  //   });

  //   this.shippersData = AspNetData.createStore({
  //     key: "Value",
  //     loadUrl: this.url + "/ShippersLookup",
  //     onBeforeSend: function (method, ajaxOptions) {
  //       ajaxOptions.xhrFields = { withCredentials: true };
  //     }
  //   });
  // }

  ngOnInit(){
    
  }

  // getMasterDetailGridDataSource(id: number): any {
  //   return {
  //     store: AspNetData.createStore({
  //       loadUrl: this.url + '/OrderDetails',
  //       loadParams: { orderID: id },
  //       onBeforeSend: function (method, ajaxOptions) {
  //         ajaxOptions.xhrFields = { withCredentials: true };
  //       }
  //     })
  //   };
  // }
}
