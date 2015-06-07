angular.module('app').controller('ProductsController', function($scope, $rootScope){
	console.log("ProductsController------");

	console.log("ROOTSCOPE: ProductsList: "+$rootScope.productList);

	 $scope.$on("updateProductsController", function(event, productsList) {
      $scope.productsList = $rootScope.productsList;

      console.log("BROADCAST EVENT: "+productsList);
      });

});