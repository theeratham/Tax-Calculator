import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { FilingTypeComponent } from './components/filing-type/filing-type/filing-type.component';
import { MonthComponent } from './components/month/month/month.component';
import { PenaltyComponent } from './components/penalty/penalty/penalty.component';
import { SaleAmountComponent } from './components/sale-amount/sale-amount/sale-amount.component';
import { SurchargeComponent } from './components/surcharge/surcharge/surcharge.component';
import { TaxAmountComponent } from './components/tax-amount/tax-amount/tax-amount.component';
import { TotalVatComponent } from './components/total-vat/total-vat/total-vat.component';
import { YearComponent } from './components/year/year/year.component';
import { InputDetailComponent } from './input-detail/input-detail/input-detail.component';
import { ReviewConfirmComponent } from './review&Confirm/review-confirm/review-confirm.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal'

@NgModule({
  declarations: [
    AppComponent,
    FilingTypeComponent,
    MonthComponent,
    YearComponent,
    SaleAmountComponent,
    TaxAmountComponent,
    SurchargeComponent,
    PenaltyComponent,
    TotalVatComponent,
    InputDetailComponent,
    ReviewConfirmComponent
  ],
  imports: [
    BrowserModule,
    NzStepsModule,
    FormsModule,
    NzIconModule,
    HttpClientModule,
    AppRoutingModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
