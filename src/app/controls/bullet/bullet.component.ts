import { Component, OnInit } from '@angular/core';

import { BulletService, Week } from '../../services/BulletService';

@Component({
  selector: 'app-bullet',
  templateUrl: './bullet.component.html',
  styleUrls: []
})
export class BulletComponent implements OnInit {

  weeksData: Week[];

  constructor(service: BulletService) {
    this.weeksData = service.getWeeksData();
  }
  ngOnInit() {
  }
  customizeTooltip(arg) {
    return {
      text: "Current t&#176: " + arg.value + "&#176C<br>" + "Average t&#176: " + arg.target + "&#176C"
    };
  }

}
