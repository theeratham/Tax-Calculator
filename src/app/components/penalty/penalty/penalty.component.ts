import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-penalty',
  templateUrl: './penalty.component.html',
  styleUrls: ['./penalty.component.css']
})
export class PenaltyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getPenalty()
  }

  @Output() penaltyOutput = new EventEmitter<string>();
  penalty:string = "200.00";


  getPenalty() {
    this.penaltyOutput.emit(this.penalty);
  }

}
