var app = angular.module('MRE');

app.service('clientService', function($http, $q, $window) {

	this.addUser = function(user) {
		console.log("clientService: ",user);
		return	$http({
			method: 'POST',
			url: '/api/client',
			data: user
		}).then(function(response) {
			$http({
				method: 'POST',
				url: '/api/client/auth',
				data: {
					email: user.username,
					password: user.password
				}
			}).then(function(res) {
				console.log(res)
				if(res.status === 200) {
					$window.location.href = '/public'
				} else {
					console.log('Not logged in')
				}
			});
		});
	};

	this.login = function(user) {
		console.log('user in userService: ', user);

		return $http({
			method: 'POST',
			url: '/api/client/auth',
			data: {
				email: user.username,
				password: user.password
			}
		}).then(function(res) {
			console.log(res)
			if(res.status === 200) {
				$window.location.href = '/public'
			} else {
				console.log('Not logged in')
			}
		});
	};
	
});