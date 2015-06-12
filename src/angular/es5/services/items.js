function ItemsService() {
  this.items = [];
}

ItemsService.prototype.add = function (item) {
  this.items.push(item);
};