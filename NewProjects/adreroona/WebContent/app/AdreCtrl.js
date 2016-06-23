/**
 * @author 		:	Roona
 * @Date 		:	June, 8 , 2016
 * @FileName	:	AdreCtrl.js
 */

var app = angular.module("AdreCtrlModule",['HomeTabService']);

var  AdreCtrl =  function($scope, $rootScope, $location,$state,$timeout,HomeTabService) {
	
	self = this;
	
	self.user={name:"Steven Lopez",id:1234};
	self.HomeTabService=HomeTabService;
	
	/* State Provider Events*/ 	
	
    $rootScope.$on("$stateChangeStart", function (event, next, current) {
      
    });
    
    $rootScope.$on("$stateChangeSuccess", function (event, current, previous) {

        $scope.newLocation = $location.path();
        if($scope.newLocation =='/EngagementTab'){
        	
            $timeout(function () {
            	$('#engagementQues').click();
        	    console.log( "ready!" );
            	
            }, 200);
        }
        removeProgress();
    });
    
    $rootScope.$on("$stateChangeError", function (event, toState, toParams, fromState, fromParams,errorMsg) {
    	
        alert("ROUTE CHANGE ERROR: " + errorMsg);
        event.preventDefault();
        $state.get('error').error = { code: 123, description: errorMsg }
        return $state.go('error');
    });
	
    // Function to set active engagement tab 
    $scope.checkActive = function (newUrl) {
        if (newUrl ==   $scope.newLocation) {
            return "btn-primary";
        } else {
            return "";
        }
    };

 // Function to set active tab in home page
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };

};

app.controller("AdreCtrl",AdreCtrl);