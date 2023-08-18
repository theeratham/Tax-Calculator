import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-tax-amount',
  templateUrl: './tax-amount.component.html',
  styleUrls: ['./tax-amount.component.css']
})
export class TaxAmountComponent implements OnChanges {

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.taxAmount) {
      this.formatTax()
      this.getTaxAmount()
    }
  }

  @Input() saleAmount:string = ''
  @Output() taxOutput = new EventEmitter<string>()

  taxAmount:string = ''

  getTaxAmount() {
    this.taxOutput.emit(this.taxAmount)
  }

  formatTax() {
    if (this.saleAmount) {
      const format = parseFloat(this.saleAmount.replace(/,/g, ''));
      const format2 = format * 0.07;
      this.taxAmount = format2.toFixed(2).toString();
      this.taxOutput.emit(this.taxAmount)
    }
  }
}