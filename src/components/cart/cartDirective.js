angular.module('app').directive('cartTemplate', function(){
	return {
		restrict: 'E',
		scope:{},
		controller: 'CartController',
		templateUrl: 'templates/cart-template.html'
	};
});