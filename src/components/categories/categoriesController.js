/** Controller for getting categories data
***/

var app = angular.module('app');
app.controller("CategoriesController", CategoriesController);

function CategoriesController($scope, $http, $rootScope, CategoriesFactory) {
  
  console.log("CategoriesController:::::");
 // $scope.categories = CategoriesFactory.getCategories();
  //console.log("getTEST: "+$scope.categories);
  //$scope.categories = categories;

  $scope.categories = CategoriesFactory.getCategories();
  console.log("$scope.categories ", $scope.categories);
  
  
};
angular.module('app').factory('CategoriesFactory', function($resource, $rootScope) {
 var Category = $resource('http://smartninja.betoo.si/api/eshop/categories');
 var Products = $resource('http://smartninja.betoo.si/api/eshop/categories/:id/products');
  
 console.log("Factory---");

  return {
    getTest : function(){
      return "BLAAAA";
    },

    getCategories : function(){
      console.log("-----------------getCategories!");
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
      function(error){
      console.log("NAPAKA!");
      console.log(error);
    }
    );*/
  },

 showProductsByCategory : function(categoryId){
    
    var productList = Products.query({id: categoryId, onlyStocked: true});
    // http://smartninja.betoo.si/api/%7Bid%7D/products%7B?query,%20onlyStocked}&id=2&onlyStocked=true
    productList.$promise.then(
      function(success){
        $scope.productList = success;
        $rootScope.productList = success;
        $scope.$broadcast('updateProductsController', $scope.productList);

        console.log("$scope.productList: "+$scope.productList);
        }, 
   function(error){
        console.log("Error getting product list detail!");
        console.log(error);
      }
    );
}}

});

