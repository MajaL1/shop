angular.module('app').directive('searchTemplate', function(){
	return {
		restrict: 'E',
		scope:{},
		controller: 'SearchController',
		templateUrl: 'templates/search-template.html'
	};
});