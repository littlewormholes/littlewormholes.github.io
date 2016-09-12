app.controller('mainController', ['$scope', '$location', function ($scope, $location){
    $scope.nav = function (hash) {
        $location.path(hash);
    }
}]);