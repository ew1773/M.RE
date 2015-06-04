var app = angular.module('MRE', ['ui.router','ui.bootstrap']);


app.config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/re/reservations');

	$stateProvider
		.state('profile', {
			url: '/profile',
			templateUrl: 'routes/profile/profile.html',
			controllerAs: 'ProfileCtrl as PR', 
			
		})
		.state('reservations', {
			url: '/reservations',
			templateUrl: 'views/reservations.html',
			controllerAs: 'ReservationsCtrl as RE'
		});
		.state('')
});