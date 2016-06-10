(function(angular) {
    "use strict"

    // var app = angular.module('adre', ['ui.router', 'authService', 'homeCtrl', 'projectLaunchCtrl', 
    //     'questionsCtrl', 'capQuestionsCtrl', 'engagementCtrl', 'ui.bootstrap',
    //     'projectLaunch', 'engagementForm', 'engagementQuestions', 'capacityQuestions']);
    var app = angular.module('adre', ['ui.router', 'projectLaunchCtrl', 'projectLaunchMain', 'questionsCtrl', 'engagementQuestions',
        'capQuestionsCtrl', 'capacityQuestions','engagementCtrl', 'engagementForm', 'registrationCtrl']);
    
    app.controller("MenuCtrl",MenuCtrl);
    app.controller("AdreCtrl",AdreCtrl);
    
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
    
    
    var engagementTab = {
            name: '/EngagementTab',
            url: '/EngagementTab',
            templateUrl: 'pages/EngagementTab.html',
            controller: function ($scope, $stateParams, modelObj) {
                $scope.mainObj = modelObj;
                
            },
            resolve    :{        	
         	   modelObj: function ($http,$q, $state, $timeout,$stateParams){
                   	return pageResolverState ($http,$q, $state, $timeout,'EngagementTab');
                   }
            }    
        };
    
    
    app.config(function($stateProvider, $urlRouterProvider) {
            // $urlRouterProvider.otherwise('/Home')
            $stateProvider
                //Main Menu
                .state('/Home', {
                    templateUrl: 'app/components/home/Home.html',
                    controller: "HomeCtrl",
                    controllerAs: "hc"
                })
                .state('/ProjectLaunch', {
                    templateUrl: 'app/components/projectEngagement/projectLaunch/ProjectLaunch.html',
                    controller: 'ProjectLaunchCtrl',
                    controllerAs: 'plc'
                    // resolve: {
                        // function(Engagement) {
                    //         Engagement.isRegistration = false; //change this to true to see how the Registration screen would function
                        // }
                    // }
                })
                .state('/Capacity', {
                    url: 'app/components/capacity',
                    templateUrl: 'app/components/capacity/Capacity.html'
                })
                .state('/ManagerMatrix', {
                    url: 'app/components/admin/',
                    templateUrl: 'app/components/admin/ManagerMatrix.html'
                    // controller: "menuCtrl"
                })
                .state('/Help', {
                    url: 'app/components/help/',
                    templateUrl: 'app/components/help/Help.html'
                })
                //Registration Screens
                .state('/QuestionsScreen', {
                    templateUrl: 'app/components/projectEngagement/engagementQuestions/Questions.html',
                    controller: 'QuestionsCtrl',
                    controllerAs: 'qc',
                    resolve    :{        	
                  	   modelObj: function ($http,$q, $state, $timeout,$stateParams){
                            	return pageResolverState ($http,$q, $state, $timeout,'QuestionsScreen');
                            }
                    }
                })
                .state('/CapacityScreen', {
                    templateUrl: 'app/components/projectEngagement/capacityQuestions/CapacityQuestions.html',
                    controller: 'CapQuestionsCtrl',
                    controllerAs: 'cqc'
                })
                .state('/EngagementScreen', {
                    templateUrl: 'app/components/projectEngagement/engagement/Engagement.html',
                    controller: 'EngagementCtrl',
                    controllerAs: 'ec'
                })
                .state('/Registration', {
                    url: 'app/components/projectEngagement/completeEngagement',
                    templateUrl: 'app/components/projectEngagement/completeEngagement/Registration.html',
                    // controller: function(Engagement) {
                    //     Engagement.isRegistration = true;
                    // }
                    controller: 'RegistrationCtrl',
                    controllerAs: 'rc'
                })
                
                .state(engagementTab)
                .state(error)
        });
    
    function MenuCtrl($scope, $location) {
        // $scope.$watch( AuthService.isLoggedIn, function ( isLoggedIn ) {
        //     $scope.isLoggedIn = isLoggedIn;
        //     $scope.currentUser = AuthService.currentUser();
        // });
    }   
})(window.angular);