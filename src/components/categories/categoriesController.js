/** Controller for getting categories data
***/
var app = angular.module('app', ['ngResource']);

app.controller('CategoriesController', CategoriesController);

function CategoriesController($scope, $http, $rootScope, $resource) {
  $scope.showCarsList = true;
  var Category = $resource('http://smartninja.betoo.si/api/eshop/categories');
  var Products = $resource('http://smartninja.betoo.si/api/eshop/categories/:id/products');
  
 /**  INIT CATEGORIES LIST ***/

  $scope.initCategoriesList = function(){
    var initCategories = [];
    var getArray = Category.query(function(categories) {
    angular.forEach(categories, function(category) {
       initCategories.push(category); 
    });
    
  });

  getArray.$promise.then(
      function(success){
      $scope.categories = success;
      }, 
      function(error){
      console.log("NAPAKA!");
      console.log(error);
    }
    );
  }
  $scope.initCategoriesList();


$scope.showProductsByCategory = function(categoryId){
    
    var productList = Products.query({id: categoryId, onlyStocked: true});
    // http://smartninja.betoo.si/api/%7Bid%7D/products%7B?query,%20onlyStocked}&id=2&onlyStocked=true
    productList.$promise.then(
      function(success){
      $scope.productsList = success;
      }, 
      function(error){
      console.log("Error getting product list detail!");
      console.log(error);
    }
    );
}  
}