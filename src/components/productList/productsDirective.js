angular.module('app').directive('productsTemplate', function(){
	return {
		restrict: 'E',
		require:'ngModel',
		scope:{},
		controller: 'ProductsController',
		templateUrl: 'templates/products-template.html'
	};
});