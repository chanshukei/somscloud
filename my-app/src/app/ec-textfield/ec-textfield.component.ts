import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { EcAccessrightComponent } from '../ec-accessright/ec-accessright.component';

@Component({
  selector: 'ec-textfield',
  template:   `<div *ngIf="isVisible">
                  <label class="form-label" for="{{id}}">{{label}}</label>
                  <input  class="form-control" type="text" id="{{id}}" maxLength="{{maxLength}}" 
                          [disabled]="!isEnable ? 'disabled': null"
                          (keyup)="updateValue($event)"
                          [value]="value"/>
              </div>`,
  styleUrls: ['./ec-textfield.component.sass']
})

export class EcTextfieldComponent extends EcAccessrightComponent{
  
  value: string = "";

  @Input()
  label: string = "";

  @Input()
  maxLength: number = 0;

  clear(){
    this.value = "";
  }

  updateValue(event: any){
    this.value = event.target.value;
  }

}