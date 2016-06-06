var app = angular.module('app', ['myServices']);

app.config(function ($locationProvider, $routeProvider) {
    $routeProvider.when("/", {templateUrl:"partials/home.html"});

    $routeProvider.when("/:cityName", {
        templateUrl:"partials/citydetails.html",
        controller :function ($scope, $routeParams, crew) {
        	/*if( $routeParams.cityName == 'tokyo'){
        	    templateUrl:"partials/citydetails.html",
        		 $scope.img = "newyork.jpg";
        	}else if( $routeParams.cityName == 'newyork'){
        	templateUrl:"partials/citydetails.html",
        		 $scope.img = "dubai.jpg";
        	}else if( $routeParams.cityName == 'dubai'){
        	templateUrl:"partials/citydetails.html",
        		 $scope.img = "tokyo.jpg";
        	}*/
        	
        	$scope.img = $routeParams.cityName+".jpg";
           
            $scope.crew = crew;
        },
        resolve    :{
            crew:function ($q, $route, $timeout, cityDetailResource) {
                var deferred = $q.defer();

                var cityName = $route.current.params.cityName;

                var successCb = function (result) {
                    if (angular.equals(result, [])) {
                        deferred.reject("No City found by name :"+ cityName);
                    }
                    else {
                        deferred.resolve(result);
                    }
                };
                //the timeout is only to exaggerate the example, it's completely unnecessary
                $timeout(function () {
                    cityDetailResource.getDetailsByCity(cityName, successCb);
                }, 2000);

                return deferred.promise;
            }
        }

    });
});

function AppCtrl($scope, $rootScope, $location) {
    $rootScope.$on("$routeChangeStart", function (event, next, current) {
        $scope.alertType = "";
        $scope.alertMessage = "Loading...";
        $scope.active = "progress-striped active progress-warning";
    });
    $rootScope.$on("$routeChangeSuccess", function (event, current, previous) {
        $scope.alertType = "alert-success";
        $scope.alertMessage = "Successfully changed routes :)";
        $scope.active = "progress-success";

        $scope.newLocation = $location.path();
    });
    $rootScope.$on("$routeChangeError", function (event, current, previous, rejection) {
        alert("ROUTE CHANGE ERROR: " + rejection);
        $scope.alertType = "alert-error";
        $scope.alertMessage = "Failed to change routes :(";
        $scope.active = "";
    });

    $scope.alertType = "alert-info";
    $scope.alertMessage = "Welcome to the resolve demo";

    $scope.tabs = [
        {
            title:"Home",
            url  :"#/"
        },
        {
            title:"New York",
            url  :"#/newyork"
        },
        {
            title:"Dubai",
            url  :"#/dubai"
        },
        {
            title:"Tokyo",
            url  :"#/tokyo"
        }
    ];

    $scope.checkActive = function (url) {
        if (url == "#" + $scope.newLocation) {
            return "active";
        } else {
            return "";
        }
    };


}
