(function () {

'use stric';

angular.module('NameCalculator', [])

.controller('NameCalculatorController', function ($scope){

$scope.name = "";

$scope.totalValue = 0;

$scope.DisplayNumeric = function (){

var TotalNameValue = CalculateFromString($scope.name);

$scope.totalValue = TotalNameValue;

};


function CalculateFromString(string){

var totalStringValue = 0;

for (var i = 0; i < string.length; i++) {
  totalStringValue += string.charCodeAt(i);
}
return totalStringValue;

}

});

})();
