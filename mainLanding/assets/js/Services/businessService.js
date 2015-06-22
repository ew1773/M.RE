var app = angular.module('MRE');

app.service('businessService', function($http, $q, $window, $location) {

	this.addUser = function(user) {
		console.log("businessService: ",user);

		user.businessEmail = user.email;
		delete user.email;
		console.log("after businessService change: ",user);

		return $http({
			method: 'POST',
			url: '/api/restaurant',
			data: user
		}).then(function(response) {
			console.log('response from addUser CB: ', response.data)

			user.username = user.businessEmail;
			delete user.businessEmail

			$http({
				method: 'POST',
				url: '/api/restaurant/auth',
				data: {
					email: user.username,
					password: user.password
				}
			}).then(function(res) {
				console.log(res)
				if(res.status === 200) {
					$window.location.href = '/re'
				} else {
					console.log('Not logged in')
				}
			});
		});
	};

	this.login = function(user) {
		console.log('user in businessService: ', user);

		return $http({
			method: 'POST',
			url: '/api/restaurant/auth',
			data: {
				email: user.username,
				password: user.password
			}
		}).then(function(res) {
			console.log(res)
			if(res.status === 200) {
				$window.location.href = '/re'
			} else {
				console.log('Not logged in')
			}
		});
	};

});