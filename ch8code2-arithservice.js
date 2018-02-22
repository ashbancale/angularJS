
var mainApp = angular.module("mainApp", []).
factory('ArithService',function(){
	var product = {};
	product.multiply = function(a,b) {
		return a * b;
	}
	return product;
}); 
mainApp.controller("MultiplyController", function ($scope, ArithService){
	$scope.multiply = function() {
		$scope.result = ArithService.multiply($scope.firstNumber, $scope.secondNumber);
		
	}

});


