
// import { window } from 'rxjs/operator/window';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LogServiceProvider } from '../../providers/log-service/log-service';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the ListItemsComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'list-items',
  templateUrl: 'list-items.html'
})
export class ListItemsComponent {
  posts: any;

  @Input() items: any;
  @Input() showSearch: boolean = true;
  @Input() showToolbar: boolean = false;
  @Output() itemClicked: EventEmitter<any> = new EventEmitter<any>();
  @Output() itemSelectType: EventEmitter<any> = new EventEmitter<any>();
  constructor(public log: LogServiceProvider,public alertController:AlertController) {
    console.log(JSON.stringify(this.items));
  }

  onClick(item) {
    this.itemClicked.emit(item);
  }

  getItems(e) {
    if (!this.posts) {
      this.posts = this.items;
    } else {
      this.items = this.posts;
    }
    // set val to the value of the searchbar
    let val = e.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  clickTocart(item){
    // alert("modle");
    this.itemSelectType.emit(item);

    // let alert = this.alertController.create();
    // alert.setTitle('Lightsaber color');

  }
  
}
