import { Component, OnInit, ViewChild } from '@angular/core';
import { DxScrollViewComponent } from 'devextreme-angular';
import { ScrollerService } from '../../services/ScrollerService';


@Component({
  selector: 'app-scroller',
  templateUrl: './scroller.component.html',
  styleUrls: []
})
export class ScrollerComponent implements OnInit {

  //  @ViewChild(DxScrollViewComponent, { static: false }) scrollView: DxScrollViewComponent;


  ngOnInit() {
  }

  // showScrollbarModes: any[];
  // content: string;
  // updateContentTimer: number;
  // scrollByContent = true;
  // scrollByThumb = true;
  // scrollbarMode: string;
  // pullDown = false;

  // constructor (service: ScrollerService) {
  //     this.content = service.getContent();

  //     this.showScrollbarModes = [{
  //         text: "On Scroll",
  //         value: "onScroll"
  //     }, {
  //         text: "On Hover",
  //         value: "onHover"
  //     }, {
  //         text: "Always",
  //         value: "always"
  //     }, {
  //         text: "Never",
  //         value: "never"
  //     }];

  //     this.scrollbarMode = this.showScrollbarModes[0].value;

  // }
  // ngAfterViewInit() {
  //     this.scrollView.instance.option("onReachBottom", this.updateBottomContent);
  // }
  // valueChanged = (data) => {
  //     this.scrollView.instance.option("onReachBottom", data.value ? this.updateBottomContent : null);
  // }

  // updateContent = (args, eventName) => {
  //     var updateContentText = "<br /><div>Content has been updated on the " + eventName + " event.</div><br />";
  //     if(this.updateContentTimer)
  //         clearTimeout(this.updateContentTimer);
  //     this.updateContentTimer = setTimeout(() => {
  //         this.content = (eventName == "PullDown" ? updateContentText + this.content : this.content +  updateContentText);
  //         args.component.release();
  //     }, 500);
  // };
  // updateTopContent = (e) => {
  //     this.updateContent(e, "PullDown");
  // }
  // updateBottomContent = (e) => {
  //     this.updateContent(e, "ReachBottom");
  // }

}
