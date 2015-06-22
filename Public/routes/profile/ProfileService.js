//ProfileService.js
(function() {
    angular.module('MRE')
        .service('ProfileService', ['$q', '$http', function($q, $http) {

            //get restaruant info for profile page
            this.getRestaurantInfo = function() {
                var deferred = $q.defer();
                $http({
                    method: 'GET',
                    url: '/api/restaurant'
                }).then(function(response) {
                    deferred.resolve(response.data)                    
                    console.log("response.date from RestaurantProfileService: ", response.data)
                })
                return deferred.promise;
            }
        }]); //end of service
})();

//test test

