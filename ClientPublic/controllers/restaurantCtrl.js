var app = angular.module('MRE');

app.controller('RestaurantCtrl', function($scope, getRestById, getClient, UserService, RestaurantService, ReservationService, $log) {
	
	// resolve variable for this restaurant
	$scope.thisRest = getRestById;
	console.log(getRestById);

	var userLoggedIn = true;

	// Reservation Details
	$scope.thisUser = {
		email: 'curiousgeorge@gmail.com',
		name: {
			first: 'bob',
			last: 'saggett'
		},
		paymentInfo: {
			cardName: 'bob',
			cardNumber: 55,
			cardExp: 666
		},
		phoneNumber: 8019995555
	}
	$scope.partySize = null;
	$scope.preorders = [];
	$scope.resDayAndTime = new Date();

	// testing methods for verifying ng-model values
	$scope.dataTesting = {
		dateChange: function() {
			console.log($scope.resDayAndTime);
		},
		timeChange: function() {
			console.log($scope.resDayAndTime);
		}
	};

	// methods for displaying today's hours
	$scope.day = function() {
		$scope.dayOfWeek = RestaurantService.day();
	}();

	$scope.daySelector = RestaurantService.daySelector;

	$scope.phoneNumberFormat = RestaurantService.phoneNumberFormat;
	
	// methods for Datepicker
	$scope.today = function() {
	    $scope.resDayAndTime = new Date();
	}();

	$scope.clear = function () {
		$scope.resDayAndTime = null;
	};

	$scope.toggleMin = function() {
		$scope.minDate = $scope.minDate ? null : new Date();
	}();

	$scope.open = function($event) {
		$event.preventDefault();
		$event.stopPropagation();

		$scope.opened = true;
	};

	$scope.dateOptions = {
		formatYear: 'yy',
		startingDay: 1
	};

	$scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
	$scope.format = $scope.formats[0];

	var tomorrow = new Date();
	tomorrow.setDate(tomorrow.getDate() + 1);
	var afterTomorrow = new Date();
	afterTomorrow.setDate(tomorrow.getDate() + 2);
	
	$scope.events =
	[
	  {
	    date: tomorrow,
	    status: 'full'
	  },
	  {
	    date: afterTomorrow,
	    status: 'partially'
	  }
	];

	$scope.getDayClass = function(date, mode) {
		ReservationService.getDayClass(date, mode);
	};

	// Timepicker $scope properties

	$scope.hstep = 1;
	$scope.mstep = 15;

	$scope.ismeridian = true;

	$scope.refreshDayAndTime = function() {
		$scope.resDayAndTime = new Date();
	};


	// Preorder Inputs

	$scope.addPreorder = function() {
		$scope.preorders.push({
			name: $scope.itemObj.name,
			quantity: $scope.preorderQuantity,
			sumCost: $scope.itemObj.cost * $scope.preorderQuantity,
			index: $scope.preorders.length
		});
		console.log($scope.preorders);
	}

	// Reservation Submit
	$scope.submitRes = function() {
		if(!userLoggedIn) {
			alert("Please log in to continue!");
			
		} else if(userLoggedIn) {
			ReservationService.submitRes({
				resvStatus: "Pending",
				businessId: getRestById.businessId,
				resDayAndTime: $scope.resDayAndTime,
				resSubmitTime: new Date(),
				guestNumber: $scope.partySize,
				// orderCart: $scope.preorders,
				creditCard: $scope.thisUser.paymentInfo,
				name: $scope.thisUser.name,
				phoneNumber: $scope.thisUser.phoneNumber,
				email: $scope.thisUser.email
			});
		}
	};
})