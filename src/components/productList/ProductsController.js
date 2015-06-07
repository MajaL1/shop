angular.module('app').controller('ProductsController', function($scope, $rootScope){
	
	//console.log("ROOTSCOPE: ProductsList: "+$rootScope.productList);
	//$scope.productList = $rootScope.productList;
	$scope.$on("updateProductsController", function(event, productList) {
	    $scope.productList = productList;
	      
  	});

  	$scope.addToCart = function(product, quantity){
  		// spremeni stevilo izdelkov desno zgoraj

  		$rootScope.showProductDetail = true;
  		$rootScope.totalQuantity = $scope.quantity|0 + quantity|0;
  		//$rootScope.totalQuantity = 5;
  		$rootScope.$broadcast('addToCart', product, quantity);


  	}
  	$scope.showDetail = function(product){
  		// spremeni stevilo izdelkov desno zgoraj

  		$rootScope.showProductsList = false;
  		$rootScope.showProductDetail = true;
  		$rootScope.$broadcast('getProductDetail', product);

  	}

});