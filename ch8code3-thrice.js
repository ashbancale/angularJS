
var mainApp = angular.module("mainApp", []).
factory('ArithService',function(){
	var product = {};
	product.multiply = function(a,b) {
		return a * b;
	}
	return product;
}); 

mainApp.service('ThriceService',function(ArithService){
	this.thrice = function(a){
		return ArithService.multiply(a,3);
	}
});

mainApp.controller("ThriceController", function ($scope, ThriceService){
	$scope.thrice = function() {
		$scope.result = ThriceService.thrice($scope.number);

	}

});


