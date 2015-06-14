angular.module('app').controller('ProductsController', function($scope, $rootScope){
	
	$scope.$on("updateProductsController", function(event, productList) {
	    $scope.productList = productList;
	      
  	});

  //$scope.stockRange = [1,2,3,4,5];

    $scope.stockRange = function(product){
      if(product){
        var stockArray = [];
        var stock = product.stock;
        for(var i = 1; i<= stock; i++){
          stockArray.push(i);
        }
        return stockArray;
      }
    }

  	$scope.addToCart = function(product, quantity){
  		// spremeni stevilo izdelkov desno zgoraj
     
  		//$rootScope.showProductDetail = true;
      console.log("----Add----: ", quantity);
      console.log("----Add total quantity----: ", $rootScope.totalQuantity);
  		var tmp = $rootScope.totalQuantity|0 + quantity|0;
      $rootScope.totalQuantity = tmp;
  		//$rootScope.totalQuantity = 5;
  		$rootScope.$broadcast('addToCart',product,  tmp);


  	}
  	$scope.showDetail = function(product){
  		// spremeni stevilo izdelkov desno zgoraj

  		$rootScope.showProductsList = false;
  		$rootScope.showProductDetail = true;
  		$rootScope.$broadcast('getProductDetail', product);

  	}

});