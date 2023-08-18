import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.css']
})
export class YearComponent implements OnInit {
  @Output() yearSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.initializeYearOptions();
  }

  year: string = ''
  yearOptions: string[] = [];

  onYearChange() {
    this.yearSelected.emit(this.year);
  }

  initializeYearOptions() {
    const currentYear = new Date().getFullYear();
    const startYear = 2020;
    this.yearOptions = Array.from({ length: currentYear - startYear + 1 }, (_, index) => (startYear + index).toString());
  }

  isFutureYear(year: string): boolean {
    const currentYear = new Date().getFullYear();
    return parseInt(year, 10) > currentYear;
  }

}
