
var mySampleModule = angular.module("mySampleModule", []); 
mySampleModule.controller("GroceryListController", function ($scope){
	$scope.items=["coffee"];

	$scope.addItem = function() {
		$scope.items.push($scope.newitem);
		$scope.newitem = "";
	}
});
