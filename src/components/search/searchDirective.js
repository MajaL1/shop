angular.module('app').directive('appExample', function(){
	return {
		restrict: 'E',
		scope:{},
		controller: 'SearchController',
		templateUrl: 'templates/search-template.html'
	};
});