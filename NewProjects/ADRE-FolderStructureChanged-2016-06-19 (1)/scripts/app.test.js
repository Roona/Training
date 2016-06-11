(function(angular) {
    "use strict"

    var app = angular.module('adre', ['ui.router', 'authService', 'homeCtrl', 'projectLaunchCtrl', 
        'questionsCtrl', 'capQuestionsCtrl', 'engagementCtrl', 'ui.bootstrap',
        'projectLaunch', 'engagementForm', 'engagementQuestions', 'capacityQuestions']);
    app.controller("MenuCtrl",MenuCtrl);
    app.config(function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('views/Home');
                        
            var home = {
                name: 'home',
                url: 'views/Home',
                abstract: true,
                templateUrl: 'views/Home.html',
                controller: "HomeCtrl"
                // controllerAs: "cfgCtrl"
            };
            
            var projects = {
                name: 'prjects',
                url: 'views/Registration',
                templateUrl: 'views/Registration/ProjectLaunch.html',
                controller: 'ProjectLaunchCtrl',
                resolve: {
                   obj: function(Engagement) {
                        Engagement.isRegistration = false; //change this to true to see how the Registration screen would function
                    }
                }
            };
            
            var registration = {
                name: 'registration',
                url: 'views/Registration',
                templateUrl: 'views/Registration/Registration.html',
                controller: function(Engagement) {
                    Engagement.isRegistration = true;
                }
            };
                // .state('/Capacity', {
                //     url: 'views/Registration',
                //     templateUrl: 'views/Capacity.html'
                // })
                // .state('/ManagerMatrix', {
                //     url: 'views/Registration',
                //     templateUrl: 'views/ManagerMatrix.html'
                //     // controller: "menuCtrl"
                // })
                // .state('/Help', {
                //     url: 'views/',
                //     templateUrl: 'views/Help.html'
                // })
                // //Registration Screens
                // .state('/EngagementScreen', {
                //     templateUrl: 'views/Registration/Engagement.html',
                //     controller: 'EngagementCtrl'
                // })
                // .state('/QuestionsScreen', {
                //     templateUrl: 'views/Registration/Questions.html',
                //     controller: 'QuestionsCtrl'
                // })
                // .state('/CapacityScreen', {
                //     templateUrl: 'views/Registration/CapacityQuestions.html',
                //     controller: 'CapQuestionsCtrl'
                // });
            $stateProvider
                .state(home)
                .state(projects)
                .state(registration);
        });
    
    function MenuCtrl($scope, $location) {
        $scope.$watch( AuthService.isLoggedIn, function ( isLoggedIn ) {
            $scope.isLoggedIn = isLoggedIn;
            $scope.currentUser = AuthService.currentUser();
        });
    }   
})(window.angular);