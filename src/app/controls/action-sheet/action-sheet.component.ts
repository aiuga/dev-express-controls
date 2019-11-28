import { Component, OnInit } from '@angular/core';

import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.component.html',
  styleUrls: []
})
export class ActionSheetComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  commands: any[] = [ 
    { text: 'Call' },
    { text: 'Send message' },
    { text: 'Edit' },
    { text: 'Delete' }
];

showNotify(value) {
    notify('The "' + value + '" button is clicked.');
}


}
