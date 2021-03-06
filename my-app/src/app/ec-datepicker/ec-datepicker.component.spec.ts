import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcDatepickerComponent } from './ec-datepicker.component';

describe('EcDatepickerComponent', () => {
  let component: EcDatepickerComponent;
  let fixture: ComponentFixture<EcDatepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcDatepickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
