import { Component,  OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaxData } from 'src/app/tax-data/tax-data';
import { ModalDirective } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-review-confirm',
  templateUrl: './review-confirm.component.html',
  styleUrls: ['./review-confirm.component.css']
})
export class ReviewConfirmComponent implements OnInit {

  constructor (private route:ActivatedRoute) { }

  @ViewChild('modal', { static: false }) modal?: ModalDirective
  
  taxData:TaxData = {
    filingType: '',
    month: '',
    year: '',
    saleAmount: 0,
    taxAmount: 0,
    surcharge: 0,
    penalty: 0,
    totalVat: 0
  }

  ngOnInit(): void {
    const filingType = this.route.snapshot.queryParamMap.get('filingType') || ''
    const month = this.route.snapshot.queryParamMap.get('month') || ''
    const year = this.route.snapshot.queryParamMap.get('year') || ''
    const saleAmount = this.route.snapshot.queryParamMap.get('saleAmount') || 0
    const taxAmount = this.route.snapshot.queryParamMap.get('taxAmount') || 0
    const surcharge = this.route.snapshot.queryParamMap.get('surcharge') || 0
    const penalty = this.route.snapshot.queryParamMap.get('penalty') || 0
    const totalVat = this.route.snapshot.queryParamMap.get('totalVat') || 0

    this.taxData.filingType = filingType 
    this.taxData.month = month 
    this.taxData.year = year 
    this.taxData.saleAmount = Number(saleAmount)
    this.taxData.taxAmount = Number(taxAmount)
    this.taxData.penalty = Number(penalty)
    this.taxData.surcharge = Number(surcharge)
    this.taxData.totalVat = Number(totalVat)

  }

  openModal() {
    this.makeMessage()
    this.modal?.show()
  }

  closeModal() {
    this.modal?.hide()
  }

  makeMessage() {
    const jsonMessage = JSON.stringify(this.taxData)
    return jsonMessage
  }

}
