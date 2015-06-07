angular.module('app').controller('ProductDetailController', function($scope){
	$scope.$on("getProductDetail", function(event, product) {
	    $scope.product = product;
  	});

});