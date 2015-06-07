angular.module('app').controller('ProductsController', function($scope, $rootScope){
	
	//console.log("ROOTSCOPE: ProductsList: "+$rootScope.productList);
	//$scope.productList = $rootScope.productList;
	$scope.$on("updateProductsController", function(event, productList) {
	    $scope.productList = productList;
	      
  	});

  	$scope.addToCart = function(){
  		// spremeni stevilo izdelkov desno zgoraj

  	}
  	$scope.showDetail = function(product){
  		// spremeni stevilo izdelkov desno zgoraj

  		$rootScope.showProductsList = false;
  		$rootScope.showProductDetail = true;
  		$rootScope.$broadcast('getProductDetail', product);

  	}

});