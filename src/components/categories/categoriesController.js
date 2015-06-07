/** Controller for getting categories data
***/

var app = angular.module('app');
app.controller("CategoriesController", CategoriesController);

function CategoriesController($scope, $http, $rootScope, CategoriesFactory) {
  
  console.log("CategoriesController:::::");

  $scope.categories = CategoriesFactory.getCategories();
 

  $scope.showProductsByCategory = function(categoryId){
    //console.log("$scope.products ", $scope.showProductsByCategory);
    $rootScope.showProductsList = true;
    var productList = CategoriesFactory.getProductsByCategory(categoryId);
     productList.$promise.then(
      function(success){
        $scope.productList = success;

        $rootScope.$broadcast('updateProductsController', $scope.productList);
       
        }, 
      function(error){
        console.log("Error getting product list detail!", error);
      }
    );
    $rootScope.showProductDetail = false;

    return productList;
  } 
};
angular.module('app').factory('CategoriesFactory', function($resource, $rootScope) {
 var Category = $resource('http://smartninja.betoo.si/api/eshop/categories');
 var Products = $resource('http://smartninja.betoo.si/api/eshop/categories/:id/products');

  return {
    getTest : function(){
      return "BLAAAA";
    },

    getCategories : function(){
      var initCategories = [];
      return Category.query(function(categories) {
         angular.forEach(categories, function(category) {
         initCategories.push(category); 
      });

      /*console.log("getArray", getArray);
      //$rootScope.categories = initCategories;
      console.log("init:", initCategories);
      return initCategories;*/
      
    });
      
    /*getArray.$promise.then(
      function(success){
      //$scope.categories = success;
      return success;
      }, 
      function(error){*
      console.log("NAPAKA!");
      console.log(error);
    }
    );*/
  },

 getProductsByCategory : function(categoryId){

    var productList = Products.query({id: categoryId, onlyStocked: true});
    return productList;
}

}});

