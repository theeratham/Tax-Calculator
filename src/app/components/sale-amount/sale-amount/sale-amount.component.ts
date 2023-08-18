import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-sale-amount',
  templateUrl: './sale-amount.component.html',
  styleUrls: ['./sale-amount.component.css']
})
export class SaleAmountComponent implements OnChanges {

  constructor() {
  }

  ngOnChanges(): void {
  }

  @Input() filingType: string = ''
  @Output() saleOutput = new EventEmitter<string>()

  saleAmount: string | undefined

  getSaleAmount() {
    this.saleOutput.emit(this.saleAmount)
  }

  formatSale() {
    if (this.saleAmount) {
      const format = this.saleAmount.replace(/,/g, '')
      const format2 = Number(format).toFixed(2)
      this.saleAmount = format2.toString()
    }
  }

}
