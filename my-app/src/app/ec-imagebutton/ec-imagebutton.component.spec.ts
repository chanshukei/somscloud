import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcImagebuttonComponent } from './ec-imagebutton.component';

describe('EcImagebuttonComponent', () => {
  let component: EcImagebuttonComponent;
  let fixture: ComponentFixture<EcImagebuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcImagebuttonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcImagebuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
