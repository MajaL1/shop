angular.module('app').controller('ProductDetailController', function($scope){
	$scope.$on("getProductDetail", function(event, product) {
	    $scope.product = product;
  	});

  	$scope.stockRange = function(product){
        var stockArray = [];
        var stock = product.stock;
        for(var i = 1; i<= stock; i++){
          stockArray.push(i);
        }
        console.log("STOCK ARRAY::", stockArray);
        return stockArray;
    }

});