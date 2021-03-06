import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ec-imagebutton',
  template: `<button class="btn btn-outline-primary btn-lg" 
                type="button" (click)="onButtonClicked()">
                <span><img src="/assets/images/{{image}}.png"></span>
                <br />
                <span>{{text}}</span>
            </button>`,
  styleUrls: ['./ec-imagebutton.component.sass']
})
export class EcImagebuttonComponent implements OnInit {

  @Input()
  text: string = "";

  @Input()
  image: string = "";

  @Output()
  ecClick = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClicked(){
    this.ecClick.emit();
  }

}
