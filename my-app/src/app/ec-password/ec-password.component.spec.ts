import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcPasswordComponent } from './ec-password.component';

describe('EcPasswordComponent', () => {
  let component: EcPasswordComponent;
  let fixture: ComponentFixture<EcPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
