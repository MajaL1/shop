angular.module('app').config(function($stateProvider, $urlRouterProvider){

    //  If a user goes to an url that doesn't have a valid state assigned
	//$urlRouterProvider.otherwise('/error');

	/*$stateProvider.state('frontPage',
	{
		url: '/',
		templateUrl: '<h1>Homepage</h1>'
	});*/

	$stateProvider.state('login',
	{
		url: "/login",
		templateUrl: "templates/login-template.html"
	});

	$stateProvider.state('categories',
	{
		url: '/categories',
		templateUrl: "templates/categories-template.html"
	});

	$stateProvider.state('sale',
	{
		url: '/sale',
		templateUrl: "templates/sale-template.html"
	});
	$stateProvider.state('cart',
	{
		url: '/cart',
		templateUrl: "templates/cart-template.html"
	});

	$stateProvider.state('error',
	{
		url: '/error',
		templateUrl: "templates/error-template.html"
	});

	/*$stateProvider.state('parent',
	{
		url: '/parent',
		template: '<h1>Parent state <span class="text-muted"><small>Has an additional ui-view.</small></span></h1><ui-view></ui-view>'
	});*/
/*
	$stateProvider.state('parent.child', 
	{
		url: '/child',
		template: '<h4>Child state</h4>'
	})

	$stateProvider.state('parameter', {
		url: '/parameter/:name',
		template: '<h1>Parameter state with a name parameter</h1><p>Name is : {{ name }}</p>',
		controller: function($scope, $stateParams, $state){
            //  Use $stateParams to get url parameters
            $scope.name = $stateParams.name;

            //  If you want to redirect to a state
            //  $state.go('login');

            //  If you want to reload a state
			//  $state.reload();

            //  Check if the current active state is...
            // $state.is('login');
		}
	});*/

});

