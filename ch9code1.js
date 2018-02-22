var newApp = angular.module("newApp",['ngRoute']);
newApp.config(['$routeProvider',function($routeProvider){
	$routeProvider
	//route for the login page
	.when('/LoginOldUser',{
		templateUrl:'login.html',
		controller:'LoginController'
	})
	//route for the signup page
	.when('/SignUpNewUser',{
		templateUrl:'signup.html',
		controller:'SignupController'
	})
	.when('/ContactUs',{
		templateUrl:'contact.html',
		controller:'contactController'
	})
	.when('/contact/:choice',{
		templateUrl:'contact.html',
		controller:'contactController'
	})
	.otherwise({
		//catch all
		redirectTo:'LoginOldUser'
	});
}]);

newApp.controller('contactController', function($scope,$routeParams){
	var choice="";
	if($routeParams['choice']=="email"){
		choice="I want to sign up via email";
	}
	else if($routeParams['choice']=="phone"){
		choice="I want to sign up via phone";
	}
	$scope.choice=choice;
});

newApp.controller('LoginController', function($scope){
	$scope.message = "This page will display the login form";
});

newApp.controller('SignupController', function($scope){
	$scope.message = "This page will display the signup form";
});


