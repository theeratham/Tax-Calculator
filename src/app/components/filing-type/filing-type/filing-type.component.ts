import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filing-type',
  templateUrl: './filing-type.component.html',
  styleUrls: ['./filing-type.component.css']
})
export class FilingTypeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  @Output() typeOutput = new EventEmitter<string>()

  filingType:string = 'ordinary';

  getType(select:string) {
    if(select === '0') {
      this.filingType = 'ordinary'
      this.typeOutput.emit(this.filingType)
    }
    else {
      this.filingType = 'additional'
      this.typeOutput.emit(this.filingType)
    }
  }

}
