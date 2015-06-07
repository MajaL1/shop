// TOLE NE DELA : ["ui.bootstrap"]

angular.module('app').directive('carouselTemplate', function(){
	return {
		restrict: 'E',
		scope: {},
		controller: 'CarouselHomeController',
		templateUrl: 'templates/carousel-template.html',
		//template: 'categories: {{ categories }}'
	};
}); 