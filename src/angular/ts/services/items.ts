export class ItemsService {
  items: Array<string>;

  constructor() {
    this.items = [];
  }

  add(item) {
    this.items.push(item);
  }
}