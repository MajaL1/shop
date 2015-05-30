angular.module('app').directive('loginTemplate', function(){
	return {
		restrict: 'E',
		scope:{},
		controller: "LoginController",
		templateUrl: 'templates/login-template.html'
	};
});