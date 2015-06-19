(function () {
	angular.module('MRE')
		.service('ReservationsService', ['$q', '$http', function($q, $http){
			
			this.getReservations = function(req, res){
				return $http({
					method: 'GET',
					url: '/api/reservation'
					}).then(function(res){
						console.log('RS Service res.data:', res.data);
	//					console.log(reservations)
						return res.data;
					});
				};
			
			
			
			
//			this.updateReservation = function(){
//				return $http({
//					method: 'PUT',
//					url: '/api/reservation'
//				}).then(function(res){
//					reservations = res.data;
//					console.log('PUT: res.data', res.data);
//					return reservations;
//				});
//			};
			
		}]); //end of service
})();