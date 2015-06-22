(function() {
    angular.module('MRE')
        .controller('AddItemCtrl', ['$scope', 'AddItemService', '$modalInstance', 'ProfileService', 'profile',
            function($scope, AddItemService, $modalInstance, ProfileService, profile) {
                var AIC = this;
                $scope.test = "test";
                console.log(profile);
                //adding item to the menu
                AIC.addNewDrink = function(name, cost, description, photos) {
                    var newDrink = {
                        name: name,
                        cost: cost,
                        description: description,
                        photos: photos
                    }
                    AddItemService.addNewDrink(newDrink).then(function(res) {
                        $modalInstance.dismiss('cancel');
                    })
                }

                AIC.addNewAppetizer = function(name, cost, description, photos) {
                    var newAppetizer = {
                        name: name,
                        cost: cost,
                        description: description,
                        photos: photos
                    }
                    AddItemService.addNewAppetizer(newAppetizer).then(function(res) {
                        $modalInstance.dismiss('cancel');
                    })
                }
            }
        ])
})();
