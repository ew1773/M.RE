var app = angular.module('MRE', ['ui.router','ui.bootstrap']);


app.config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/');

	$stateProvider 
		.state('profile', {
			url: '/profile',
			templateUrl: 'routes/profile/profile.html',
			controller: 'ProfileCtrl',
			controllerAs: 'PR',
			resolve : {    
				profile : function(ProfileService){
					return ProfileService.getRestaurantInfo();
				} 
			} 
		})
		
		.state('reservations', {
			url: '/reservations',
			templateUrl: 'routes/reservations/reservations.html',
			controller: 'ReservationsCtrl',
			controllerAs: 'RE',
			resolve: {
				restaurant: function(ReservationsService, $q){
					var dfd = $q.defer();
					ReservationsService.getReservations()
					.then(function(res){
                 dfd.resolve(res);
                 });
				 return dfd.promise;
				}
			}
		})


		.state('menu', {
			url: '/menu',
			templateUrl: 'routes/menu/menu.html',
			controller: 'MenuCtrl',
			controllerAs: 'MENU',
		})

		
		.state('userAdmin', {
			url: '/re/userAdmin',
			templateUrl: 'routes/UserAdmin/UserAdmin.html',
			controller: 'UserAdminCtrl',
			controllerAs: 'AC'
		})



		// $urlRouterProvider.otherwise(window.location.href = '/')

});
