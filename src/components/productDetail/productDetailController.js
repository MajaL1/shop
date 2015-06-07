angular.module('app').controller('ProductDetailController', function($scope){
	console.log("ProductsDetail------");
	$scope.$on("getProductDetail", function(event, product) {
	    $scope.product = product;
	      
  	});

});