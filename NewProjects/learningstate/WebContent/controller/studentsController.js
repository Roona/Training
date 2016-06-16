
var app=angular.module("studentsControllerModule",[]);
app.controller("studentsController", function($scope) {
	$scope.students = [ "name1", "name2", "name3" ];
	
	var studentList = [
	                   {id:1,name:"vijay",age:12,gender:"M"},
	                   {id:2,name:"raja",age:13,gender:"M"},
	                   {id:3,name:"Gayu",age:11,gender:"F"},
	                   {id:4,name:"vijay",age:12,gender:"M"},
	                   {id:4,name:"raja",age:13,gender:"M"},
	                   {id:5,name:"Gayu",age:11,gender:"F"}
	                  ];
})