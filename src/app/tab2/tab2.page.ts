import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  items: string[] = ['uno', 'dos'];
  item: string;

  constructor() {}

  addButton() {
    if (this.item != '') {
      this.items.push(this.item)
      this.item = ''
    }
  }

  deleteButton(item) {
    var index = this.items.indexOf(item, 0)
    this.items.splice(index, 1)
    console.log('delete', item, index)
  }

}
