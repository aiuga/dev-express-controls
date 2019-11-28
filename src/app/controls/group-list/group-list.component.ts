import { Component, OnInit } from '@angular/core';

import { GroupListService, Employee } from '../../services/GroupListService';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: []
})
export class GroupListComponent implements OnInit {

  employees: Employee[];

  constructor(service: GroupListService) {
    this.employees = service.getEmployees();
  }

  listData = [{
    itemProperty: "someValue",
  },{
    itemProperty: "second value"
  },{
    itemProperty: "third value"
  },{
    itemProperty: "forth value"
  }
];

  ngOnInit() {

  }

}
