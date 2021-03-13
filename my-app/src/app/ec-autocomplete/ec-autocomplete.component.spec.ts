import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcAutocompleteComponent } from './ec-autocomplete.component';

describe('EcAutocompleteComponent', () => {
  let component: EcAutocompleteComponent;
  let fixture: ComponentFixture<EcAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcAutocompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
