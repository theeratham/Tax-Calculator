import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-surcharge',
  templateUrl: './surcharge.component.html',
  styleUrls: ['./surcharge.component.css']
})
export class SurchargeComponent implements OnChanges {

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.taxAmount) {
      this.getSurcharge()
    }
  }

  @Input() taxAmount:string = ''
  @Output() surchargeOutput = new EventEmitter<string>()

  surcharge:string = ''

  getSurcharge() {
    if(this.taxAmount) {
      const format = Number(this.taxAmount) * 0.1
      this.surcharge = format.toFixed(2)
      this.surchargeOutput.emit(this.surcharge)
    }
  }
}
