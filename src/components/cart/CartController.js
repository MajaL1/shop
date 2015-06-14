angular.module('app').controller('CartController', function($scope, $rootScope){

	$scope.$on("addToCart", function(event, product, quantity) {
	  console.log("------------------add to cart-------------", product, "quantity ",quantity);
	   //$rootScope.$watch('totalQuantity');
	   //$rootScope.quantity=13;

	   console.log("$rootScope.totalQuantity", quantity); 
	   $scope.totalQuantity = quantity;  
  	});

  	 $scope.showCart = function(){
  	 	$rootScope.showProductsList = false;
  		$rootScope.showProductDetail = false;
  		$rootScope.showShoppingCart = true;
  	 }
  

});	