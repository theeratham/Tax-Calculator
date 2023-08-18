import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})
export class MonthComponent implements OnInit {
  @Output() monthSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.initializeMonthOptions();
  }
  
  month: string | undefined;
  monthOptions: string[] = [];

  onMonthChange() {
    this.monthSelected.emit(this.month);
  }

  initializeMonthOptions() {
    const currentMonthIndex = new Date().getMonth();
    const allMonths = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    this.monthOptions = allMonths.slice(0, currentMonthIndex + 1);
  }

  isFutureMonth(month: string): boolean {
    const currentMonthIndex = new Date().getMonth();
    const monthIndex = this.monthOptions.indexOf(month);
    return monthIndex > currentMonthIndex;
  }
}
