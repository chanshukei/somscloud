import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { EcAccessRight } from '../ec-access-right.service';
import { Observable} from 'rxjs';

@Component({
  selector: 'ec-readonlytext',
  template:   `<div *ngIf="isVisible">
                  <label class="form-label" for="{{id}}">{{label}}</label>
                  <input  class="form-control" type="text" id="{{id}}"  
                          readonly [value]="value"/>
              </div>`,
  styleUrls: ['./ec-readonlytext.component.sass']
})

export class EcReadonlyTextComponent implements OnChanges{
  
  isVisible: boolean = false;

  @Input() 
  id: string = "";

  @Input()
  label: string = "";

  @Input()
  value: string = "";

  @Input()
  accessRights: Observable<EcAccessRight[]> = new Observable<EcAccessRight[]>();

  ngOnChanges(changes: SimpleChanges) {
    var self = this;
    if(changes.accessRights && changes.accessRights.currentValue){
      this.accessRights = changes.accessRights.currentValue;
      this.accessRights.subscribe(event => {
        for(var i=event.length-1; i>=0; i--){
          var accessRight = event[i];
          if(accessRight.componentId == '*'){
            self.isVisible = accessRight.isVisible==1;
          }else if(accessRight.componentId == self.id){
            self.isVisible = accessRight.isVisible==1;
            return;
          }
        }
      });
    }
  }

}
