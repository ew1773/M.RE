(function() {
    angular.module('MRE')
        .service('AddItemService', ['$q', '$http', function($q, $http) {
        	this.addNewDrink = function(newDrink) {
        		var deferred = $q.defer();
        		console.log(newDrink);
        		$http({
        			method : 'POST',
        			url : '/api/menu/drink',
        			data : newDrink
        		}).then(function(response){
        			deferred.resolve(response.data)
        		})
        			return deferred.promise;
            }

            this.addNewAppetizer = function(newAppetizer) {
                var deferred = $q.defer();
                $http({
                    method : 'POST',
                    url : '/api/menu/appetizer',
                    data : newAppetizer
                }).then(function(response){
                    deferred.resolve(response.data)
                })
                    return deferred.promise;
            }
    }]); //end of service
})();
