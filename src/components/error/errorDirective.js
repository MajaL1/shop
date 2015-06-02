angular.module('app').directive('appExample', function(){
	return {
		restrict: 'E',
		scope:{},
		controller: 'ErrorController',
		templateUrl: 'templates/error-template.html'
	};
});