(function() {
    var app = angular.module("app", ['ngRoute']);

    // Dynamic data impl (task 4)
    app
        .controller('MainController', function($scope, $routeParams, $http) {
            $http.get('assets/js/questions.json')
                .success(function(results) {
                    $scope.questions = results;
                })
                .error(function(results, error) {
                    $scope.questions = results;
                    console.log("Error: " + error);
                });

        })

    .controller('ProfileController', function($scope, $routeParams, $http) {
        var profile;
        $http.get('assets/js/profiles.json')
            .success(function(results) {
                for (i = 0; i < results.length; i++) {
                    var item = results[i];
                    if ($routeParams.profileId == item.profileId) {
                        $scope.profile = item;
                        profile = item;
                    }
                }
            })
            .error(function(result, error) {
                $scope.profile = "Error";
                console.log("Error: " + error);
            });

        // $scope.seenDaysAgo = function() {
        //     var lastSeenYear = parseInt($scope.profile.lastSeen.substring(0, 4));
        //     var lastSeenMonth = parseInt($scope.profile.lastSeen.substring(5, 7));
        //     var lastSeenDay = parseInt($scope.profile.lastSeen.substring(8, 10));
        //     var lastSeenDate = new Date(lastSeenYear, lastSeenMonth, lastSeenDay);
        //     var currentDate = new Date();
        //
        //     var timeDifference = Math.abs(currentDate.getTime() - lastSeenDate.getTime());
        //     console.log(timeDifference);
        //     return Math.ceil(timeDiff / 3600 / 1000 / 24);
        // };
        // console.log($scope.seenDaysAgo);
    })

    .controller('QuestionController', function($scope, $routeParams, $http) {
        $http.get('assets/js/questions.json')
            .success(function(results) {
                for (i = 0; i < results.length; i++) {
                    var item = results[i];
                    if ($routeParams.questionId == item.questionId) {
                        $scope.question = item;
                    }
                }
            })
            .error(function(result, error) {
                $scope.question.title = "Error";
                console.log("Error: " + error);
            });
    });

    // Searching impl (task 6)
    app.filter('lookup', function() {
        return function(data, query) {
            if (query === '' || query === undefined) {
                return data;
            }
            query = query.toLowerCase();
            results = [];

            angular.forEach(data, function(i) {
                if (i.title.toLowerCase().indexOf(query) > -1) {
                    console.log(query + ': ' + i.title);
                    results.push(i);
                }
            });

            return results;
        };
    });

    // Routing impl (task 8)
    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'routes/home.html',
            })
            .when('/question/:questionId', {
                templateUrl: 'routes/question.html',
                controller: 'QuestionController'
            })
            .when('/profile/:profileId', {
                templateUrl: 'routes/profile.html',
                controller: 'ProfileController'
            })
            .otherwise({
                redirectTo: '/'
            });
    });


    // // Module impl (task 3)
    // angular.module('ui.bootstrap.demo').controller('ModalDemoCtrl', function($scope, $uibModal, $log) {
    //
    //     $scope.items = ['item1', 'item2', 'item3'];
    //
    //     $scope.animationsEnabled = true;
    //
    //     $scope.open = function(size) {
    //
    //         var modalInstance = $uibModal.open({
    //             animation: $scope.animationsEnabled,
    //             templateUrl: 'myModalContent.html',
    //             controller: 'ModalInstanceCtrl',
    //             size: size,
    //             resolve: {
    //                 items: function() {
    //                     return $scope.items;
    //                 }
    //             }
    //         });
    //
    //         modalInstance.result.then(function(selectedItem) {
    //             $scope.selected = selectedItem;
    //         }, function() {
    //             $log.info('Modal dismissed at: ' + new Date());
    //         });
    //     };
    //
    //     $scope.toggleAnimation = function() {
    //         $scope.animationsEnabled = !$scope.animationsEnabled;
    //     };
    //
    // });
    //
    // // Please note that $uibModalInstance represents a modal window (instance) dependency.
    // // It is not the same as the $uibModal service used above.
    //
    // app.controller('ModalInstanceCtrl', function($scope, $uibModalInstance, items) {
    //
    //     $scope.items = items;
    //     $scope.selected = {
    //         item: $scope.items[0]
    //     };
    //
    //     $scope.ok = function() {
    //         $uibModalInstance.close($scope.selected.item);
    //     };
    //
    //     $scope.cancel = function() {
    //         $uibModalInstance.dismiss('cancel');
    //     };
    // });
})();
