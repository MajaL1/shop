angular.module('app').directive('appExample', function(){
	return {
		restrict: 'E',
		scope:{},
		controller: 'PaymentController',
		templateUrl: 'templates/payment-template.html'
	};
});