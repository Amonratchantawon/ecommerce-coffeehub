import { Component, EventEmitter, Input, Output } from '@angular/core';

/**
 * Generated class for the ListItemTestComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'list-item-test',
  templateUrl: 'list-item-test.html'
})
export class ListItemTestComponent {

  @Input() items:any;
  @Output() callbackItem:EventEmitter<any> = new EventEmitter<any>(); 

  text: string;

  constructor() {
    console.log('Hello ListItemTestComponent Component');
    this.text = 'Hello World';
  }

  onClick(item) {
    this.callbackItem.emit(item);
  }

}
