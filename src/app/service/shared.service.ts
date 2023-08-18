import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TaxData } from '../tax-data/tax-data';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private taxDataSubject = new Subject<TaxData>();

  get taxData$() {
    return this.taxDataSubject.asObservable();
  }

  updateTaxData(data: TaxData) {
    this.taxDataSubject.next(data);
    console.log(data)
  }
}
