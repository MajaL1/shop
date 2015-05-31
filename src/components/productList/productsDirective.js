angular.module('app').directive('productsDirective', function(){
	return {
		restrict: 'E',
		scope:{},
		controller: 'ProductsController',
		templateUrl: 'templates/products-template.html'
	};
});