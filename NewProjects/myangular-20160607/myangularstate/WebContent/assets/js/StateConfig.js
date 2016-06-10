
/**
 * @author 		:	Roona
 * @Date 		:	June, 6 , 2016
 * @FileName	:	StateConfig.js
 * @info 		:	pageResolverState available in PageResolverState.js
 */


var StateConfig = function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('#/home');
    
    
    var _controller = function ($scope, $stateParams, modelObj) {
        $scope.mainObj = modelObj;
          
     };
     
   /*  var getResolve = function(pageName){
     
     var _resolve = function ($q, $state, $timeout,pageName){
        	return pageResolverState ($q, $state, $timeout,pageName);
     };
     
     return _resolve;
     
     }*/
     
    
    var home = {
            name: '/',
            url: '/',
            templateUrl: 'pages/home.html'
        };
    
    
    var engagement = {
            name: '/engagement',
            url: '/engagement',
            templateUrl: 'pages/engagement.html',
            controller: _controller,
            resolve    :{ 
                modelObj: function ($q, $state, $timeout){
                	return pageResolverState ($q, $state, $timeout,'engagement');
                }
            }   
        };
    
    var capacity = {
            name: '/capacity',
            url: '/capacity',
            templateUrl: 'pages/capacity.html',
            controller: _controller,
            resolve    :{        	
         	   modelObj: function ($q, $state, $timeout,$stateParams){
                   	return pageResolverState ($q, $state, $timeout,'capacity');
                   }
            }    
        };
    
    var login = {
            name: '/login',
            url: '/login',
            templateUrl: 'pages/login.html',
            controller: _controller,
            resolve    :{        	
         	   modelObj: function ($q, $state, $timeout,$stateParams){
                   	return pageResolverState ($q, $state, $timeout);
                   }
            }    
        };
    
    var error = {
            name: 'error',
            url: 'error',
            templateUrl: 'pages/pagenotfound.html',
            resolve: {
                errorObj: [function () {
                    return this.self.error;
                }]
            },
            controller: function ($scope, $stateParams, errorObj) {
                $scope.mainObj = errorObj;
                
            }  
        };
    
    $stateProvider    
    	.state(home)
        .state(engagement)
        .state(capacity)
        .state(login)
        .state(error);
         
/*    $stateProvider    .state("/", {
            url: "/",
            templateUrl:"pages/home.html"
        })
        
        .state('/engagement', {
        	url: "/engagement",
            templateUrl:"pages/engagement.html",
            controller :function ($scope, $stateParams, modelObj) {
                $scope.mainObj = modelObj;
             },
               resolve    :{ 
                   modelObj: function ($q, $state, $timeout){
                   	return pageResolverState ($q, $state, $timeout,'engagement');
                   }
               }
        })
   
    .state('/capacity', {
    	url: "/capacity",
        templateUrl:"pages/capacity.html",
        controller :function ($scope, $stateParams, modelObj) {
            $scope.mainObj = modelObj;
              
           },
           resolve    :{        	
        	   modelObj: function ($q, $state, $timeout,$stateParams){
                  	return pageResolverState ($q, $state, $timeout,'capacity');
                  }
           }
    })
    .state('/login', {
    	url: "/login",
        templateUrl:"pages/login.html",
        controller :function ($scope, $stateParams, modelObj) {
            $scope.mainObj = modelObj;
              
           },
           resolve    :{        	
        	   modelObj: function ($q, $state, $timeout,$stateParams){
                  	return pageResolverState ($q, $state, $timeout);
                  }
           }
    }).state('error', {
        url: 'error',
        resolve: {
            errorObj: [function () {
                return this.self.error;
            }]
        },
        controller: function ($scope, $stateParams, errorObj) {
            $scope.mainObj = errorObj;
            
        },
        templateUrl: 'pages/pagenotfound.html' // displays an error message
    })
     ;*/
    
};
 
