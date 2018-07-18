import { Component } from '@angular/core';

@Component({
    templateUrl:'reportreimbursement.component.html'
})
export class ReportReimbursementComponent{
    constructor() { }

    isCollapsed: boolean = false;
    isCollapsed2: boolean = false;
   iconCollapse: string = "icon-arrow-up";

  collapsed(event: any): void {
    // console.log(event);
  }
  collapsed2(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }
  expanded2(event: any): void {
    // console.log(event);
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
    this.iconCollapse = this.isCollapsed ? "icon-arrow-down" : "icon-arrow-up";
  }

  toggleCollapse2(): void {
    this.isCollapsed = !this.isCollapsed;
    this.iconCollapse = this.isCollapsed ? "icon-arrow-down" : "icon-arrow-up";
  }
}