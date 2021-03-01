import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcAccessrightComponent } from './ec-accessright.component';

describe('EcAccessrightComponent', () => {
  let component: EcAccessrightComponent;
  let fixture: ComponentFixture<EcAccessrightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcAccessrightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcAccessrightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
