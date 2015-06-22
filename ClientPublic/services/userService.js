var app = angular.module('MRE');

app.service('UserService', function($q, $http) {
	
	this.getClient = function() {
		var dfd = $q.defer();
		$http({
			method: 'GET',
			url: '/api/client'
		}).then(function(response) {
			console.log('This is the data:', response.data);
			dfd.resolve(response.data);
		});
		return dfd.promise;
	}
    
});
