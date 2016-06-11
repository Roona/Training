var app=angular.module("courseControllerModule",[]);
app.controller("courseController", function($scope) {
	$scope.courses = [ "java", "sql", "unix", "angular" ];
});