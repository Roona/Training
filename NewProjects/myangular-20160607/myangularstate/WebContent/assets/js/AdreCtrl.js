/**
 * @author 		:	Roona
 * @Date 		:	June, 6 , 2016
 * @FileName	:	AdreCtrl.js
 */

var  AdreCtrl =  function($scope, $rootScope, $location,$state) {
	
	/* State Provider Events*/ 	
	
    $rootScope.$on("$stateChangeStart", function (event, next, current) {
        $scope.alertType = "";
        $scope.alertMessage = "Loading...";
        $scope.active = "progress-striped active progress-warning";
    });
    $rootScope.$on("$stateChangeSuccess", function (event, current, previous) {
        $scope.alertType = "alert-success";
        $scope.alertMessage = "Successfully changed routes :)";
        $scope.active = "progress-success";

        $scope.newLocation = $location.path();
        removeProgress();
    });
    $rootScope.$on("$stateChangeError", function (event, toState, toParams, fromState, fromParams,errorMsg) {
       // alert("ROUTE CHANGE ERROR: " + errorMsg);
        $scope.alertType = "alert-error";
        $scope.alertMessage = "Failed to change routes :(";
        $scope.active = "";
        
        event.preventDefault();
        $state.get('error').error = { code: 123, description: errorMsg }
        return $state.go('error');
        //removeProgress();
    });
	
    /* Route Provider Events*/ 	
	
    /* $rootScope.$on("$routeChangeStart", function (event, next, current) {
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
    });*/

    $scope.alertType = "alert-info";
    $scope.alertMessage = "Welcome to the resolve demo";
    
    // Home Page Tabs
    
    $scope.tabs = [
                   {
                       title:adreConstants.TAB_HOME,
                       url  :"/"
                   },
                   {
                       title:adreConstants.TAB_ENGAGEMENT,
                       url  :"/engagement"
                   },
                   {
                       title:adreConstants.TAB_CAPACITY,
                       url  :"/capacity"
                   },
                   {
                       title:adreConstants.TAB_LOGIN,
                       url  :"/login"
                   }
               ];
/*    $scope.tabs = [
        {
            title:adreConstants.TAB_HOME,
            url  :"#/"
        },
        {
            title:adreConstants.TAB_ENGAGEMENT,
            url  :"#/engagement"
        },
        {
            title:adreConstants.TAB_CAPACITY,
            url  :"#/capacity"
        },
        {
            title:adreConstants.TAB_LOGIN,
            url  :"#/login"
        }
    ];*/

    // Function to set active tab
    $scope.checkActive = function (url) {
        if (url ==   $scope.newLocation) {
            return "active";
        } else {
            return "";
        }
    };
/*    
    $scope.checkActive = function (url) {
        if (url == "#" + $scope.newLocation) {
            return "active";
        } else {
            return "";
        }
    };*/
    
   

};