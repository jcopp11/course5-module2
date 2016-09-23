(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService)
;

// LIST #1 - controller
ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService) {
  var list = this;

  list.items = ShoppingListCheckOffService.getToBuyItems();

  list.boughtItem = function (itemIndex) {
    ShoppingListCheckOffService.boughtItem(itemIndex);
  };
}

// LIST #2 - controller
AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
  var bought = this;

  bought.items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var toBuy = [
    { name: "cookies", quantity: 10},
    { name: "milk cans", quantity: 4},
    { name: "breads", quantity: 3},
    { name: "butter", quantity: 2},
    { name: "soda", quantity: 3},
    { name: "juice", quantity: 3}
  ];

  var bought = [];

  service.boughtItem = function (itemIndex) {
    var item = toBuy[itemIndex]
    toBuy.splice(itemIndex, 1);
    bought.push(item);
  };

  service.getToBuyItems = function () {
    return toBuy;
  };

  service.getBoughtItems = function () {
    return bought;
  };
}

})();