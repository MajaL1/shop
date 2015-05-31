angular.module('app').directive('appExample', function(){
	return {
		restrict: 'E',
		scope:{},
		controller: 'SaleController',
		templateUrl: 'templates/sale-template.html'
	};
});