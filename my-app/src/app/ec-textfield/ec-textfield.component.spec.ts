import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcTextfieldComponent } from './ec-textfield.component';

describe('EcTextFieldComponent', () => {
  let component: EcTextfieldComponent;
  let fixture: ComponentFixture<EcTextfieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcTextfieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcTextfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
