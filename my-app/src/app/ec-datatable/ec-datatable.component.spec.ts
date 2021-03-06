import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcDatatableComponent } from './ec-datatable.component';

describe('EcDatatableComponent', () => {
  let component: EcDatatableComponent;
  let fixture: ComponentFixture<EcDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcDatatableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
