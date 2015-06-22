(function () { 
	angular.module('MRE') 
		.service('RestaurantsProfileService', ['$q', '$http', function($q, $http){
			this.updateProfile = function(update){
                console.log(update);
                var deferred = $q.defer();
                $http({
                    method: 'PUT',
                    url: '/api/restaurant/update',
                    data : update 
                }).then(function(response){
                    deferred.resolve(response.data);
                })
                return deferred.promise;
            }

       


	}]) //end of service
})();