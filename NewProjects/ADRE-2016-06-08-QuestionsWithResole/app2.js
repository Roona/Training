var app = angular.module('plunker', ['ui.bootstrap']);

app.controller('MainCtrl', function($scope) {
    $scope.name = 'World';
    //checkbox test
    $scope.providers = [{ provider: { Id: 5, value: "test 1" } }, { provider: { Id: 6, value: "test 2" } }];
    $scope.ids = {};
});

app.controller('DropdownCtrl', function($scope) {

});