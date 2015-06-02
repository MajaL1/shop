/** Controller for getting categories data
***/

angular.module('app').controller('CategoriesController', CategoriesController);

function CategoriesController($scope, $http, $rootScope, $resource) {
  $scope.showCarsList = true;
  var Category = $resource('http://smartninja.betoo.si/api/eshop/categories');
  
 /**  INIT CATEGORIES LIST ***/

  $scope.initCategoriesList = function(){
    var initCategories = [];
    var getArray = Category.query(function(category) {
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
}  