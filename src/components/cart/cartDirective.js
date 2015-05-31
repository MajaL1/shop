angular.module('app').directive('appExample', function(){
	return {
		restrict: 'E',
		scope:{},
		controller: 'CartController',
		templateUrl: 'templates/cart-template.html'
	};
});