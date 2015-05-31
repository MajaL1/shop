angular.module('app').directive('registrationTemplate', function(){
	return {
		restrict: 'E',
		scope:{},
		controller: 'RegistrationController',
		templateUrl: 'templates/registration-template.html'
	};
});