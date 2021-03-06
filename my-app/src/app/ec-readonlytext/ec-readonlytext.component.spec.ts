import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcReadonlytextComponent } from './ec-readonlytext.component';

describe('EcReadonlytextComponent', () => {
  let component: EcReadonlytextComponent;
  let fixture: ComponentFixture<EcReadonlytextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcReadonlytextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcReadonlytextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
