var mcm=angular.module("medicineControllerModule",[]);
app.controller("medicineController", function($scope) {
	$scope.medicine = [ "general", "dental", "ayurveda" ];
})