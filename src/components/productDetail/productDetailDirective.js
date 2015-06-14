angular.module('app').directive('productDetailTemplate', function(){
	return {
		restrict: 'E',
		require:'ngModel',
		scope:{},
		controller: 'ProductDetailController',
		templateUrl: 'templates/product-detail-template.html'
	};
});