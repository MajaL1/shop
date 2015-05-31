angular.module('app').directive('productDetailTemplate', function(){
	return {
		restrict: 'E',
		scope:{},
		controller: 'ProductDetailController',
		templateUrl: 'templates/product-detail-template.html'
	};
});