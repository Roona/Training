/**
 * @author 		:	Roona
 * @Date 		:	June, 8 , 2016
 * @FileName	:	AdreCtrl.js
 */

var  AdreCtrl =  function($scope, $rootScope, $location,$state) {
	
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
        /*if($scope.newLocation =='/EngagementTab'){
        	//alert("test");
        	$location.path('/EngagementTab/engagementTabEngQues'); 
        	$location.replace();
        	//$('#engagementQues').trigger('click');
        }*/
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
    
    $scope.tabs = [
                   
                   {
                       title:adreConstants.TAB_ENGAGEMENT_QUES,
                       id :"engagementQues",
                       url  :".engagementTabEngQues",
                       newUrl :"/EngementTab/engagementTabEngQues",
                       visible : true
                   },
                   {
                       title:adreConstants.TAB_CAPACITY_QUES,
                       id :"capacityQues",
                       url  :".engagementTabCapQues",
                       newUrl :"/EngementTab/engagementTabCapQues",
                       visible : false
                   },
                   {
                       title:adreConstants.TAB_ENAGAGEMENT_TAB,
                       id :"engagement",
                       url  :".engagementTabEngagement",
                       newUrl :"/EngementTab/engagementTabEngagement",
                       visible : true
                   }
               ];


    // Function to set active tab
    $scope.checkActive = function (url) {
        if (url ==   $scope.newLocation) {
            return "active";
        } else {
            return "";
        }
    };

    
   

};