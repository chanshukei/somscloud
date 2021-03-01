import { Component, Input } from '@angular/core';

@Component({
  selector: 'ec-textfield',
  template:   `<div>
                  <label class="form-label" for="{{id}}">{{label}}</label>
                  <input class="form-control" type="text" id="{{id}}" maxLength="{{maxLength}}"/>
              </div>`,
  styleUrls: ['./ec-textfield.component.sass']
})

export class EcTextfieldComponent{

  @Input() 
  id: string = "";

  @Input()
  label: string = "";

  @Input()
  maxLength: number = 0;
}
