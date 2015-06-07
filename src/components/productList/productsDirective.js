angular.module('app').directive('productsTemplate', function(){
	return {
		restrict: 'E',
		scope:{},
		controller: 'ProductsController',
		templateUrl: 'templates/products-template.html'
	};
});