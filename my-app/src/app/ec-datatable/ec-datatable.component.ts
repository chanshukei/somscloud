import { Component, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'ec-datatable',
  templateUrl: './ec-datatable.component.html',
  styleUrls: ['./ec-datatable.component.sass']
})
export class EcDatatableComponent implements OnChanges {

  @Input()
  headers: string = "";

  _headers: string[] = new Array();

  constructor() { }

  ngOnChanges(changes: SimpleChanges){
    if(changes.headers && changes.headers.currentValue){
      this._headers = changes.headers.currentValue.split(",");
    }
  }

}
