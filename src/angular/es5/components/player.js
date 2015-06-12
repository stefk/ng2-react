function PlayerComponent(itemService) {
  this.title = 'Quiz player';
  this.itemService = itemService;
  this.items = itemService.items;
}

PlayerComponent.prototype.hasItems = function () {
  return this.itemService.items.length > 0;
};

PlayerComponent.prototype.getItems = function () {
  return this.itemService.items;
};

PlayerComponent.prototype.addItem = function (item) {
  if (item) {
    this.itemService.add(item);
  }
};

PlayerComponent.prototype.doneTyping = function ($event) {
  if ($event.which === 13) {
    this.addItem($event.target.value);
    $event.target.value = null;
  }
};

PlayerComponent.annotations = [
  new angular.ComponentAnnotation({
    selector: 'quiz-player',
    injectables: [ItemsService]
  }),
  new angular.ViewAnnotation({
    templateUrl: 'components/player.html',
    directives: [angular.For, angular.If]
  })
];

PlayerComponent.parameters = [[ItemsService]];

document.addEventListener('DOMContentLoaded', function() {
  angular.bootstrap(PlayerComponent);
});