
var windowModule = angular.module("mySampleModule", []); 
windowModule.controller("windowController", function ($scope, $window, $location, $document){
	$scope.windowWidth = $window.innerWidth;
	$scope.browserURL = $location.absUrl();
	$scope.browserProtocol = $location.protocol();
	$scope.browserHost = $location.host();
	$scope.browserPort = $location.port();
	$scope.documentTitle = $document[0].title;
});

/*var locationModule = angular.module("mySampleModule2", []);
locationModule.controller("locationController", function($scope))*/
