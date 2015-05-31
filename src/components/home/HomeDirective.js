angular.module('app').directive('homeTemplate', function(){
	return {
		restrict: 'E',
		scope:{},
		controller: 'HomeController',
		templateUrl: 'templates/home-template.html'
	};
});