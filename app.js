(function () {
'use strict';

var shoppingList = [
  {
    name: "Milk",
    quantity: "2"
  },
  {
    name: "",
    quantity: ""
  },
  {
    name: "Donuts",
    quantity: "200"
  }
];


angular.module('MsgApp', ['ngAnimate'])
.controller('MsgController', MsgController)

MsgController.$inject = ['$scope'];
function MsgController($scope) {

$scope.list = shoppingList;
$scope.newItem = "";

$scope.addToList = function(){

var newitemList = {
      name: $scope.newItem,
      quantity: "0"
    };

    if ($scope.newItem != "") {
      $scope.list.push(newitemList);
      $scope.newItem = "";

    }
};


}
//Outside controller


})();
