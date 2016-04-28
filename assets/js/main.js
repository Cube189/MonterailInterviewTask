(function() {
    var app = angular.module("app", ['ngRoute']);


    app
        .controller('MainController', function($scope, $routeParams) {
            $scope.questions = [{
                title: 'Will insulin make my patient gain weight?',
                author: {
                    name: 'StickerBoy',
                    profileId: 1
                },
                questionId: 1,
                activities: [{
                    author: 'Hillary',
                    answered: false
                }, {
                    author: 'TheDonald',
                    answered: true
                }, {
                    author: 'FeelTheBern2016',
                    answered: false
                }, {
                    author: 'Teddy323',
                    answered: false
                }, {
                    author: 'iLuvAlaska',
                    answered: false
                }, {
                    author: 'KasichForPresident16',
                    answered: false
                }]
            }, {
                title: 'Vegan diet in diabetes treatment?',
                author: {
                    name: 'Andrew',
                    profileId: 2
                },
                questionId: 2,
                activities: [{
                    author: 'KasichForPresident16',
                    answered: false
                }, {
                    author: 'iLuvAlaska',
                    answered: false
                }, {
                    author: 'Hillary',
                    answered: true
                }, {
                    author: 'Stallion08',
                    answered: false
                }, {
                    author: 'Teddy323',
                    answered: false
                }, {
                    author: 'TheDonald',
                    answered: false
                }]
            }, {
                title: 'Vegan diet to stop diabetes progress',
                author: {
                    name: 'Joseph',
                    profileId: 3
                },
                questionId: 1,
                activities: [{
                    author: 'Stallion08',
                    answered: false
                }, {
                    author: 'FeelTheBern2016',
                    answered: true
                }, {
                    author: 'iLuvAlaska',
                    answered: false
                }]
            }];
        })

    .controller('ProfileController', function($scope, $routeParams) {

    });


    app.config(function($routeProvider, $locationProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider
            .when('/home', {
                templateUrl: 'routes/home.html',
                controller: 'HomeController'
            })
            .when('/question/:questionId', {
                templateUrl: 'routes/question.html',
                controller: 'QuestionController'
            })
            .when('profile/:profileId', {
                templateUrl: 'routes/profile.html',
                controller: 'ProfileController'
            });
    });



    angular.module('ui.bootstrap.demo').controller('ModalDemoCtrl', function($scope, $uibModal, $log) {

        $scope.items = ['item1', 'item2', 'item3'];

        $scope.animationsEnabled = true;

        $scope.open = function(size) {

            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'myModalContent.html',
                controller: 'ModalInstanceCtrl',
                size: size,
                resolve: {
                    items: function() {
                        return $scope.items;
                    }
                }
            });

            modalInstance.result.then(function(selectedItem) {
                $scope.selected = selectedItem;
            }, function() {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };

        $scope.toggleAnimation = function() {
            $scope.animationsEnabled = !$scope.animationsEnabled;
        };

    });

    // Please note that $uibModalInstance represents a modal window (instance) dependency.
    // It is not the same as the $uibModal service used above.

    app.controller('ModalInstanceCtrl', function($scope, $uibModalInstance, items) {

        $scope.items = items;
        $scope.selected = {
            item: $scope.items[0]
        };

        $scope.ok = function() {
            $uibModalInstance.close($scope.selected.item);
        };

        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };
    });
})();
