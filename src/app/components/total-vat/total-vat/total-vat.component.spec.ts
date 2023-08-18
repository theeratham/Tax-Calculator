import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalVatComponent } from './total-vat.component';

describe('TotalVatComponent', () => {
  let component: TotalVatComponent;
  let fixture: ComponentFixture<TotalVatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalVatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalVatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
