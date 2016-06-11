
var app=angular.module("studentsControllerModule",[]);
app.controller("studentsController", function($scope) {
	$scope.students = [ "name1", "name2", "name3" ];
})