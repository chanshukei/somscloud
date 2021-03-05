import { Component, Input, OnChanges, Output, SimpleChanges, EventEmitter } from '@angular/core';
import { EcAccessRight } from '../ec-access-right.service';
import { Observable} from 'rxjs';

@Component({
  selector: 'ec-button',
  template: `<button  *ngIf="isVisible" class="btn btn-dark" type="button"
                      [disabled]="!isEnable ? 'disabled': null" (click)="onButtonClicked()">{{name}}</button>`,
  styleUrls: ['./ec-button.component.sass']
})
export class EcButtonComponent implements OnChanges {

  isVisible: boolean = false;
  isEnable: boolean = false;

  @Input()
  id: string = "";

  @Input()
  name: string = "";

  @Input()
  accessRights: Observable<EcAccessRight[]> = new Observable<EcAccessRight[]>();

  @Output()
  ecClick = new EventEmitter<string>();

  constructor() { }

  onButtonClicked(){
    this.ecClick.emit();
  }

  ngOnChanges(changes: SimpleChanges) {
    var self = this;
    if(changes.accessRights && changes.accessRights.currentValue){
      this.accessRights = changes.accessRights.currentValue;
      this.accessRights.subscribe(event => {
        for(var i=event.length-1; i>=0; i--){
          var accessRight = event[i];
          if(accessRight.componentId == '*'){
            self.isVisible = accessRight.isVisible==1;
            self.isEnable = accessRight.isEnable==1;
          }else if(accessRight.componentId == self.id){
            self.isVisible = accessRight.isVisible==1;
            self.isEnable = accessRight.isEnable==1;            
            return;
          }
        }
      });
    }
  }

}
