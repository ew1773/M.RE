(function() { 
    angular.module('MRE')
        .controller('MenuCtrl'
            , ['$scope', 'MenuService', '$modal', '$log', function($scope, MenuService, $modal, $log) {
                var MENU = this;

                this.getMenuInfo = function() {
                    MenuService.getMenuInfo().then(function(data) {
                        MENU.menuInfo = data
                    })
                }
                console.log(MENU.menuInfo)
                //open modal to update restaurant
                MENU.addNewDrink = function(size) {
                    var modalInstance = $modal.open({
                        animation: $scope.animationsEnabled,
                        templateUrl: 'routes/menu/template/addDrink.html?bust=' + Math.random().toString(36).slice(2),
                        controller: 'AddItemCtrl as AIC',
                        size: size,
                        resolve : {
                            profile : function(ProfileService){
                                return ProfileService.getRestaurantInfo();
                            } 
                        }
                    });

                    modalInstance.result.then(function(selectedItem) {
                        $scope.selected = selectedItem;
                    }, function() {
                        $log.info('Modal dismissed at: ' + new Date());
                    });
                };

                MENU.addNewAppetizer = function(size) {
                    var modalInstance = $modal.open({
                        animation: $scope.animationsEnabled,
                        templateUrl: 'routes/menu/template/addAppetizer.html?bust=' + Math.random().toString(36).slice(2),
                        controller: 'AddItemCtrl as AIC',
                        size: size,
                        resolve : {
                            profile : function(ProfileService){
                                return ProfileService.getRestaurantInfo();
                            } 
                        }
                    });

                    modalInstance.result.then(function(selectedItem) {
                        $scope.selected = selectedItem;
                    }, function() {
                        $log.info('Modal dismissed at: ' + new Date());
                    });
                };
            }]); //end of controller
})();
