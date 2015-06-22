(function () { 
	angular.module('MRE')
		.controller('ProfileCtrl', ['$scope', '$modal','$log', 'ProfileService', 'profile', function($scope, $modal, $log, ProfileService, profile){
		var PR = this;
		//PR.profile = profile;  //inject from profileService

    PR.data = profile;
    console.log('PR.data from ProfileCtrl: ', PR.data[0]);

    $scope.businessAddSec = false;

    if(PR.data[0].businessAddress.addressTwo) {
      $scope.businessAddSec = true;
    }

	//open modal to update restaurant
	PR.profileUpdateModal = function(size) {
    console.log('hello');
    var modalInstance = $modal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'routes/profile/template/restaurantsProfile.html?bust=' + Math.random().toString(36).slice(2),
      controller: 'RestaurantsProfileCtrl as RPC',
      size: size,
      resolve : {
        profile: function(ProfileService) {
          return ProfileService.getRestaurantInfo();
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };
  //need help on file upload, ex.which ng upload service
  //to use
  //submit function for updating profile
  //business hours not complete
  
		}]); //end of controller
})();

//test test