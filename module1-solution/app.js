(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {


$scope.foodList = "" ;
var foodArray = [];
$scope.foodCount = 0;
$scope.message = "";


$scope.CheckLunch = function () {

     $scope.foodCount = 0;

     foodArray = $scope.foodList.split(',');


  for (var i = 0; i < foodArray.length; i++) {

  if (foodArray[i].length ==0) {

    //Do nothing

         } else {

    $scope.foodCount = $scope.foodCount + 1;

   }

}

if ($scope.foodList.length == 0 || $scope.foodCount == 0 ) {

  $scope.message = "Please enter data first";

    } else {

      if ($scope.foodCount >3) {

          $scope.message = "Too much!";

            } else {

              $scope.message = "Enjoy!";

      }

}


};


}


})();
