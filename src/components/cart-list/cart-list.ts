import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LogServiceProvider } from '../../providers/log-service/log-service';


/**
 * Generated class for the CartListComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'cart-list',
  templateUrl: 'cart-list.html'
})
export class CartListComponent {
  // @Input() carts: any;
  @Input() selectData: any;
  @Output() deleteItem:EventEmitter<any> = new EventEmitter<any>();
  @Output() counterInput:EventEmitter<any> = new EventEmitter<any>();

  text: string;

  constructor(public log: LogServiceProvider) {
    //  console.log("componentCart : "+JSON.stringify(this.selectData));
  }

  onClickQty(event, i) {
    let data = {
      qty: event,
      itemindex: i
    };
    
    this.counterInput.emit(data);
    // this.counterInput.emit(data);
    // this.totalQty.emit(data.qty);
  }

  deleteItemOrder(i){
    this.deleteItem.emit(i)
  }

  calculete() {

    // this.carts.totalamount = 0;
    // for (var i = 0; i < this.carts.items.length; i++) {
    //   this.carts.items[i].amount = 0;
    //   this.carts.items[i].amount = this.carts.items[i].qty * this.carts.items[i].product.price;
    //   this.carts.totalamount += this.carts.items[i].amount;
    // }
  }

}
