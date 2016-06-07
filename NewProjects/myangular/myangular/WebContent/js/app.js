var app = angular.module('adre', ['ngRoute']);

app.config(function($locationProvider, $routeProvider) {
	
	 $routeProvider.when("/", {templateUrl:"pages/home.html", controller:""})
	 .when("/engagement", {templateUrl:"pages/engagement.html", controller:""})
	 .when("/capacity", {templateUrl:"pages/capacity.html", controller:""})
	
});



/*
app .config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/addOrder', {
        templateUrl: 'templates/add-order.html',
        controller: 'AddOrderController'
      }).
      when('/showOrders', {
        templateUrl: 'templates/show-orders.html',
        controller: 'ShowOrdersController'
      }).
      otherwise({
        redirectTo: '/addOrder'
      });
  }]);*/


/*app.config(function ($locationProvider, $routeProvider) {
	
    $routeProvider.when("/", {templateUrl:"pages/home.html", controller:""})*/
    
/*    .when("/engagement", {
    	
    	templateUrl: "pages/engagement.html",
       
        controller :function ($scope, $routeParams, modelObj) {
         $scope.mainObj = modelObj;
         
         $scope.mainObj.field1 = " Test Engagement";
           
        },
        resolve    :{        	
            modelObj: function ($q, $route, $timeout){
            	return pageResolver ($q, $route, $timeout,"engagement");
            }
        }
    }).when("/capacity", {
    	
    	templateUrl: "pages/capacity.html",
       
        controller :function ($scope, $routeParams, modelObj) {
         $scope.mainObj = modelObj;
         
         $scope.mainObj.field1 = " capacity 1";
         $scope.mainObj.field2 = " Capacity 2";
           
        },
        resolve    :{        	
            modelObj: function ($q, $route, $timeout){
            	return pageResolver ($q, $route, $timeout,"capacity");
            }
        }
    }).when("/:page", {
    	
    	// when("/pages/engagement?:userid
    	templateUrl: "pages/pagenotfound.html",
       
        controller :function ($scope, $routeParams, modelObj) {
         $scope.mainObj = modelObj;
           
        },
        resolve    :{        	
            modelObj: function ($q, $route, $timeout){
            	return pageResolver ($q, $route, $timeout);
            }
        }
    })*/
   
//});


/* page resolver 
var pageResolver = function ($q, $route, $timeout,pageName) {
    var deferred = $q.defer();
    
    if(pageName != undefined){
    //alert(pageName);
    }

    var page = $route.current.params.page;
    
    // success call back function
    var successCb = function (result) {
    	
    	// analyze result obj for error condition 
        if (angular.equals(result, [])) {
            deferred.reject("Page not found :"+ page);
        }
        else {
            deferred.resolve(result);
        }
    };
    //the timeout is only to exaggerate the example, it's completely unnecessary
    $timeout(function () {
    	
    	if(pageName == 'engagement'){
    		/// get data from web service
    		getNextPageForEngagement(pageName, successCb);
    		
    		
    	}else if(pageName == 'capacity'){
    		
    		getNextPageObject(pageName, successCb);
    		
    	} else{
    		
    		getNextPageObject(page, successCb);
    		
    	}
    	
    }, 2000);

    return deferred.promise;
}


var getNextPageObject = function (pageName, successCb, failCb) {
    // var queryObj = {city:cityQuery};
    // var query = JSON.stringify(queryObj);
	//alert(pageName);
     var mainObj = [{result:"success",page:pageName}];
     if(pageName=='dummy'){
    	 mainObj=[]; 
     }
     return successCb(mainObj);
 };
 
 
 var getNextPageForEngagement  = function (pageName, successCb, failCb) {
	   // web service call to get JSON Object
	     var mainObj = [{result:"success",page:pageName}];
	     if(pageName=='dummy'){
	    	 mainObj=[]; 
	     }
	     return successCb(mainObj);
	 };*/


app.controller('AdreCtrl', function($scope, $rootScope, $location) {
	
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
            title:"Engagement",
            url  :"#/engagement"
        },
        {
            title:"Capacity",
            url  :"#/capacity"
        },
        {
            title:"dummy",
            url  :"#/dummy"
        }
    ];

    $scope.checkActive = function (url) {
        if (url == "#" + $scope.newLocation) {
            return "active";
        } else {
            return "";
        }
    };


});
/*
app.config(['$routeProvider', '$locationProvider',
            function($routeProvider, $locationProvider) {
                $routeProvider.
                when('/blog', {
                    templateUrl: 'blog.html',
                    controller: 'BlogController'
                }).
                when('/page/ideas', {
                    templateUrl: 'ideas.html',
                    controller: 'IdeasController'
                }).
                otherwise({
                    templateUrl: 'home.html'
                });
                $locationProvider.html5Mode(true);
            }]);*/