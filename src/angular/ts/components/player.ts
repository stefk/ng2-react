/// <reference path="../../../../typings/angular2/angular2.d.ts" />

import {Component, View, If, For, bootstrap} from 'angular2/angular2';
import {ItemsService} from 'services/items';

@Component({
  selector: 'quiz-player',
  injectables: [ItemsService]
})
@View({
  templateUrl: 'components/player.html',
  directives: [If, For]
})
class PlayerComponent {
  title: string;
  itemService: ItemsService;

  constructor(itemsService:ItemsService) {
    this.title = 'Quiz player';
    this.itemService = itemsService;
  }

  hasItems() {
    return this.itemService.items.length > 0;
  }

  getItems() {
    return this.itemService.items;
  }

  addItem(item) {
    if (item) {
      this.itemService.add(item);
    }
  }

  doneTyping($event) {
    if ($event.which === 13) {
      this.addItem($event.target.value);
      $event.target.value = null;
    }
  }
}

bootstrap(PlayerComponent);