(function(angular) {
    "use strict"
    
    var app = angular.module('adre', ['ui.router', 'projectLaunchCtrl', 'projectLaunchMain', 'questionsCtrl', 'engagementQuestions',
        'capQuestionsCtrl', 'capacityQuestions','engagementCtrl', 'engagementForm', 'registrationCtrl','engagementTabCtrl','AdreCtrlModule','homeCtrl']);
    
    app.controller("MenuCtrl",MenuCtrl);
    
    /* home page url changed for all tabs to make selected tab work*/
    var home = {
            name: '/Home',
            url: '/Home',
            templateUrl: 'app/components/home/Home.html',
            controller: 'HomeCtrl',
            controllerAs: 'hc'
        };
    
    var projectLaunch = {
            name: '/ProjectLaunch',
            url: '/ProjectLaunch',
            templateUrl: 'app/components/projectEngagement/projectLaunch/ProjectLaunch.html',
            controller: 'ProjectLaunchCtrl',
            controllerAs: 'plc'
        };
    
    var capacity = {
            name: '/Capacity',
            url: '/Capacity',
            templateUrl: 'app/components/capacity/Capacity.html'
        };
    
    var managerMatrix = {
            name: '/ManagerMatrix',
            url: '/Admin',
            templateUrl: 'app/components/admin/ManagerMatrix.html'
        };
    
    var help = {
            name: '/Help',
            url: '/Help',
            templateUrl: 'app/components/help/Help.html'
        };
    
    var engagementTab = {
            name: 'EngagementTab',
            url: '/EngagementTab',
            templateUrl: 'app/components/projectEngagement/engagementTab/EngagementTab.html',
            controller: 'EngagementTabCtrl',
            controllerAs: 'etc',
            resolve    :{        	
         	   modelObj: function ($http,$q, $state, $timeout,$stateParams){
                   	return pageResolverState ($http,$q, $state, $timeout,'EngagementTab');
                   }
            }    
        };
    
    
    var engagementTabEngQues = {
            name: 'EngagementTab.engagementTabEngQues',
            url: '/engagementTabEngQues',
            templateUrl: 'app/components/projectEngagement/engagementQuestions/Questions.html',
            controller: 'QuestionsCtrl',
            controllerAs: 'qc',
            resolve    :{        	
          	   modelObj: function ($http,$q, $state, $timeout,$stateParams){
                    	return pageResolverState ($http,$q, $state, $timeout,'QuestionsScreen');
                    }
            }   
        };
    
    var engagementTabCapQues = {
            name: 'EngagementTab.engagementTabCapQues',
            url: '/engagementTabCapQues',
            templateUrl: 'app/components/projectEngagement/capacityQuestions/CapacityQuestions.html',
            controller: 'CapQuestionsCtrl',
            controllerAs: 'cqc',
            resolve    :{        	
          	   modelObj: function ($http,$q, $state, $timeout,$stateParams){
                    	return pageResolverState ($http,$q, $state, $timeout,'CapacityQuestionsScreen');
                    }
            }   
        };
    
    var engagementTabEngagement = {
            name: 'EngagementTab.engagementTabEngagement',
            url: '/engagementTabEngagement',
            templateUrl: 'app/components/projectEngagement/engagement/Engagement.html',
            controller: 'EngagementCtrl',
            controllerAs: 'ec',
            resolve    :{        	
          	   modelObj: function ($http,$q, $state, $timeout,$stateParams){
                    	return pageResolverState ($http,$q, $state, $timeout,'EngagementTabScreen');
                    }
            }   
        };
    
    
    var error = {
            name: 'error',
            url: 'error',
            templateUrl: 'app/components/error/pagenotfound.html',
            resolve: {
                errorObj: [function () {
                    return this.self.error;
                }]
            },
            controller: function ($scope, $stateParams, errorObj) {
                $scope.mainObj = errorObj;
                
            }  
        };

    
    app.config(function($stateProvider, $urlRouterProvider) {
            // $urlRouterProvider.otherwise('/Home')
            $stateProvider
                .state(home)
                .state(projectLaunch)
                .state(capacity)
                .state(managerMatrix)
                .state(help)
                .state(engagementTab)
                .state(engagementTabEngQues)
                .state(engagementTabCapQues)
                .state(engagementTabEngagement)
                .state(error)
        });
    
    function MenuCtrl($scope, $location) {
        // $scope.$watch( AuthService.isLoggedIn, function ( isLoggedIn ) {
        //     $scope.isLoggedIn = isLoggedIn;
        //     $scope.currentUser = AuthService.currentUser();
        // });
    }   
})(window.angular);