(function() {
        angular.module('MRE')
            .controller('RestaurantsProfileCtrl', ['$scope', 'RestaurantsProfileService', '$modalInstance', 'ProfileService', 'profile',
                function($scope, RestaurantsProfileService, ProfileService, profile, $modalInstance) {
                    //submit function for updating profile
                    //business hours not complete
                    var RPC = this;

                    console.log(profile)
                    RPC.updateProfile = function(name, addressOne, addressTwo, city, state, zip, email, phone, businessHour, tableNumber, capacity) {
                        var update = {
                            businessName: name,
                            businessImg: image,
                            businessAddress: {
                                addressOne: addressOne,
                                addressTwo: addressTwo,
                                city: city,
                                state: state,
                                zip: zip
                            },
                            businessEmail: email,
                            businessNumber: phone,
                            tablePlacement: [{
                                tableNumber: tableNumber,
                                capacity: capacity
                            }]
                        }
 
                        RestaurantsProfileService.updateProfile(update).then(function(res) {
                            profile[0].UserRestaurant.push(update);
                            $modalInstance.dismiss('cancel');
                        })      
                    };


        }]) //end of controller
})();

