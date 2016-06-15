var hcm = angular.module("mainControllerModule",[]);
hcm.controller("mainController", function($scope) {
	$scope.tabs = [
	{tabname: "home",sref: "home", visible : true},
	{tabname: "course",sref: "course", visible : true},
	{tabname: "students",sref: "students", visible : true},
	
	
	]
}); 