import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { TaxData } from 'src/app/tax-data/tax-data';

@Component({
  selector: 'app-input-detail',
  templateUrl: './input-detail.component.html',
  styleUrls: ['./input-detail.component.css']
})
export class InputDetailComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  filingType: string = 'ordinary'
  saleAmount: string = ''
  taxAmount: string = ''
  surcharge: string = ''
  penalty: string = ''
  totalVat: string = ''
  month: string = ''
  year: string = ''

  taxData: TaxData = {
    filingType: '',
    month: '',
    year: '',
    saleAmount: 0,
    taxAmount: 0,
    surcharge: 0,
    penalty: 0,
    totalVat: 0
  }

  getType(value: string) {
    this.filingType = value
  }

  getSaleAmount(value: string) {
    this.saleAmount = value
  }

  getTaxAmount(value: string) {
    this.taxAmount = value
  }

  getSurcharge(value: string) {
    this.surcharge = value
  }

  getPenalty(value: string) {
    this.penalty = value
  }

  getTotalVat(value: string) {
    this.totalVat = value
  }

  getMonth(value: string) {
    this.month = value
  }

  getYear(value: string) {
    this.year = value
  }

  getData() {
    this.taxData.filingType = this.filingType;
    this.taxData.saleAmount = Number(this.saleAmount)
    this.taxData.taxAmount = Number(this.taxAmount)
    this.taxData.surcharge = Number(this.surcharge)
    this.taxData.penalty = Number(this.penalty)
    this.taxData.totalVat = Number(this.totalVat)
    this.taxData.month = this.month
    this.taxData.year = this.year

    if (this.filingType === 'ordinary') {
      this.taxData.totalVat = this.taxData.taxAmount;
    } else {
      this.taxData.totalVat = Number(this.totalVat);
    }
  }

  sendData() {
    this.getData()
    const params: NavigationExtras = {
      queryParams: this.taxData
    }
  }


  next() {
    this.getData()
    const params: NavigationExtras = {
      queryParams: this.taxData
    }
    if (
      this.taxData.filingType === '' ||
      this.taxData.month === '' ||
      this.taxData.year === '' ||
      this.taxData.saleAmount === 0
    ) {
      alert("Invalid Data");
    } else {
      this.router.navigate(['/review&Confirm'], params)
    }

  }
}
