angular.module('app').directive('categoriesTemplate', function(){
	return {
		restrict: 'E',
		scope: {},
		controller: 'CategoriesController',
		templateUrl: 'templates/categories-template.html',
		//template: 'categories: {{ categories }}'
	};
});