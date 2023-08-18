import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-total-vat',
  templateUrl: './total-vat.component.html',
  styleUrls: ['./total-vat.component.css']
})
export class TotalVatComponent implements OnChanges {

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.taxAmount || changes.surcharge) {
      this.getTotalVat()
    }
  }

  @Input() taxAmount: string = ''
  @Input() surcharge: string = ''
  @Input() penalty: string = ''
  @Output() totalVatOutput = new EventEmitter<string>()

  totalVat: string | undefined

  getTotalVat() {
    if (this.taxAmount && this.surcharge && this.penalty) {
      const tax = Number(this.taxAmount)
      const sur = Number(this.surcharge)
      const pen = Number(this.penalty)
      const format = tax + sur + pen;
      this.totalVat = format.toFixed(2)
      this.totalVatOutput.emit(this.totalVat)
    }
  }

}
