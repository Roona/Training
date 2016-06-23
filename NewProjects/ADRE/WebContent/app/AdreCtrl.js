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
       /* $scope.alertType = "";
        $scope.alertMessage = "Loading...";
        $scope.active = "progress-striped active progress-warning";*/
    });
    $rootScope.$on("$stateChangeSuccess", function (event, current, previous) {
        /*$scope.alertType = "alert-success";
        $scope.alertMessage = "Successfully changed routes :)";
        $scope.active = "progress-success";*/

        $scope.newLocation = $location.path();
        if($scope.newLocation =='/EngagementTab'){
        	
            $timeout(function () {
            	//alert($('#engagementQues').attr("ui-sref"));
            	//window.location.href = "#/EngagementTab/engagementQues";
            	$('#engagementQues').click();
        	    console.log( "ready!" );
            	
            }, 200);
        		
        }
        removeProgress();
    });
    $rootScope.$on("$stateChangeError", function (event, toState, toParams, fromState, fromParams,errorMsg) {
        alert("ROUTE CHANGE ERROR: " + errorMsg);
       /* $scope.alertType = "alert-error";
        $scope.alertMessage = "Failed to change routes :(";
        $scope.active = "";*/
        
        event.preventDefault();
        $state.get('error').error = { code: 123, description: errorMsg }
        return $state.go('error');
        //removeProgress();
    });
	

/*    $scope.alertType = "alert-info";
    $scope.alertMessage = "Welcome to the resolve demo";*/
    
    // Home Page Tabs
    
    /*self.tabs = [
                   
                   {
                       title:adreConstants.TAB_ENGAGEMENT_QUES,
                       id :"engagementQues",
                       url  :".engagementTabEngQues",
                       newUrl :"/EngagementTab/engagementTabEngQues",
                       visible : true
                   },
                   {
                       title:adreConstants.TAB_CAPACITY_QUES,
                       id :"capacityQues",
                       url  :".engagementTabCapQues",
                       newUrl :"/EngagementTab/engagementTabCapQues",
                       visible : false
                   },
                   {
                       title:adreConstants.TAB_ENAGAGEMENT_TAB,
                       id :"engagement",
                       url  :".engagementTabEngagement",
                       newUrl :"/EngagementTab/engagementTabEngagement",
                       visible : true
                   }
               ];
*/

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