(function () {
'use strict';



angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {

  var toBuyList = this;

toBuyList.toBuyListArray = ShoppingListCheckOffService.initialList;

toBuyList.boughtThisItem = function(itemIndex, itemName,itemQuantity){

ShoppingListCheckOffService.putItemInBoughtList(itemIndex, itemName,itemQuantity);

};

}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtList = this;

  boughtList.boughtItems = ShoppingListCheckOffService.boughtArray;

}


function ShoppingListCheckOffService() {

  var service = this;

  // Initial List of shopping items
  service.initialList =  [{
      name: 'cookies',
      quantity: 5
    },
    {
        name: 'Alfajores',
        quantity: 2
      },
      {
          name: 'Chocolates',
          quantity: 50
        },
        {
            name: 'Bottles of Whiskey',
            quantity: 2
          },
          {
              name: 'Tea Box',
              quantity: 1
            }];
            //End of initial List of Shopping items


  service.boughtArray = []; //Array to share data between toBuy and Bought List


            //Method that remove item from toBuy and put it in BoughtList
            service.putItemInBoughtList = function (itemIdex,itemName,itemQuantity) {

              var item = {
                    name: itemName,
                    quantity: itemQuantity
                  };

                    service.boughtArray.push(item);//Insert Bought Item in Bought List

              service.initialList.splice(itemIdex, 1);//Delete the BOUGHT item
          };
          //end of Method


}

})();
