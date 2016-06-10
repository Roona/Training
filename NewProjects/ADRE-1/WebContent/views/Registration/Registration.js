// (function (angular, _) {
//   angular.module('engagementScreen', [])
//   .directive("projectLaunch", function (/* could do DI */) {
//       return {
//         restrict: "AEC",  // Attribute, Element, Class
//         templateUrl: "Registration/ProjectLaunch.html"
//       };
//     })
    // .directive("engagementQuestions", function (/* could do DI */) {
    //   return {
    //     restrict: "AEC",  // Attribute, Element, Class
    //     templateUrl: "Registration/Questions.html"
    //   };
    // })
    // .directive("engagementForm", function (/* could do DI */) {
    //   return {
    //     restrict: "AEC",  // Attribute, Element, Class
    //     templateUrl: "Registration/Engagement.html"
    //   };
    // })
    // .directive("capacityQuestions", function (/* could do DI */) {
    //   return {
    //     restrict: "AEC",  // Attribute, Element, Class
    //     templateUrl: "Registration/CapacityQuestions.html"
    //   };
    // })
    //  .service('EngagementFlow', function() {
    //      return{            
    //         getEngagementFlow: function() {
    //             return false;
    //         },
    //         setShowEnagagement: function(status) {
    //             $scope.EngagementFlow = status;
    //             //  alert($scope.EngagementFlow);
    //         }
    //     }
    //  })
    // .factory('EngagementFlow', function() {
    //     var projScrn = true;
    //     var initQScrn = false;
    //     var capQScrn = false;
    //     var engScrn = false;
    //     var capItems = false; 
        
    //     return {
    //         projScreen: function() {
    //             return projScrn;
    //         },
    //         initQuestions: function() {
    //             return initQScrn;
    //         },
    //         capQuestions: function() {
    //             return capQScrn;
    //         },
    //         engagement: function() {
    //             return engScrn;
    //         },
    //         showCapItems: function() {
    //             return capItems;  
    //         },
    //         init: function() {
    //             projScrn = true;
    //             initQScrn = false;
    //             capQScrn = false;
    //             engScrn = false;
    //             capItems = true;
    //         },
    //         setProjScreen: function(value){
    //             projScrn = value;
    //         },
    //         setInitScreen: function(value){
    //             initQScrn = value;
    //         },
    //         setCapQScreen: function(value){
    //             capQScrn = value;
    //         },
    //         setEngScreen: function(value){
    //             engScrn = value;
    //         },
    //         setCapItems: function(value){
    //             capItems = value;
    //         }
    //     };
    // })    
    // .factory('EngagementData', function(){
    //     return {project: null};
    // })
    // .controller("RegistrationCtrl", RegistrationCtrl)
    // .controller("ProjectLaunchCtrl", ProjectLaunchCtrl)
    // .controller("EngagementCtrl", EngagementCtrl)
    // .controller("QuestionsCtrl", QuestionsCtrl)
    // .controller("CapQuestionsCtrl", CapQuestionsCtrl)
    ;
    
    // function RegistrationCtrl($scope, $window) {
    //     $scope.$on('$locationChangeStart', function(scope, next, current){
    //         if (!$window.confirm('Are you sure you want to leave the Engagement screen? Any data collected thus far will be lost')){
    //         scope.preventDefault();
    //         }
    //     });
    // }
    
    // function ProjectLaunchCtrl($scope, EngagementFlow, EngagementData, $http) {        
    //     $scope.screen = EngagementFlow;
    //     $scope.screen.init();
    //     $scope.myProjects = [];
    //     $scope.EngagementData = EngagementData;          
        
    //     $scope.openEngagement = function() {
    //         if(EngagementData.project){
    //             EngagementFlow.setEngScreen(true);
    //             EngagementFlow.setProjScreen(false);
    //         } else {
    //             alert("Please select a project to Open from the list above.")
    //         }
    //     }
        
    //     $scope.newEngagement = function() {
    //         $scope.EngagementData.project = "";
    //         EngagementFlow.setInitScreen(true);
    //         EngagementFlow.setProjScreen(false);
    //     }
        
    //     $scope.getProject = function() {
    //         $http.get('http://localhost:8090/GateWayService/rest/CommonServiceInterface/getRecords/473605')
    //         .then(function successCallback(response) {
    //             $scope.myProjects = response.data.configDetailList;
    //         },
    //         function errorCallback(response) {
    //             console.log("ADRE Error getting current user information" + response);
    //         });
    //     }
    // }
    
    // function QuestionsCtrl($scope, EngagementFlow, $http) {
    //     $scope.screen = EngagementFlow;
        
    //     $http.get('resources/questions.json').success(function (data) {            
    //         $scope.questions = data.questions;
    //     });
        
    //     $scope.processEngagement = function(){
    //         // if conditions 3,5,6,7,10, go to capacity questions
    //         if ($scope.questions[2].value || $scope.questions[4].value || $scope.questions[5].value
    //             || $scope.questions[6].value || $scope.questions[9].value){
    //             EngagementFlow.setCapQScreen(true);
    //             EngagementFlow.setInitScreen(false);                
    //         } else {
    //             EngagementFlow.setEngScreen(true);
    //             EngagementFlow.setInitScreen(false);
    //         }
    //     }            
    // }
    
    // function CapQuestionsCtrl ($scope, EngagementFlow, $http) {
    //     $scope.screen = EngagementFlow;
        
    //     $http.get('resources/capQuestions.json').success(function (data) {            
    //         $scope.capQuestions = data.questions;
    //     });
        
    //     $scope.back = function(){
    //         EngagementFlow.setCapQScreen(false);
    //         EngagementFlow.setInitScreen(true);
    //     }
        
    //     $scope.processCapQuestion = function(){
    //         EngagementFlow.setCapItems(true);
    //         EngagementFlow.setEngScreen(true);
    //         EngagementFlow.setCapQScreen(false);
    //     }      
    // }
    
    // function EngagementCtrl($scope, EngagementFlow, EngagementData, $http, $filter) {
    //     $scope.screen = EngagementFlow;
    //     $scope.EngagementData = EngagementData;
    //     $scope.addedEais;
    //     $scope.eai;
    //     $scope.date;
    //     $scope.minDate = new Date() + 7;
    //     $scope.itgError;
    //     $scope.targetDateError;
    //     $scope.isManagerError;
    //     $scope.eaiError;
    //     $scope.eaiSearch = ["123", "1234"];
    //     $scope.newHostname;
    //     $scope.hostnameList = [{hostname: 'adre.fedex.com'}];
    //     // alert($scope.minDate.setDate(minDate.getDate() + 7));
        
    //     $scope.$watch('date', function(){
    //         $scope.date = new Date(EngagementData.project.dataDetails.targetDate);
    //     });
       
    //     $scope.getITG = function() {
    //         $http.get('http://localhost:8090/GateWayService/rest/CommonServiceInterface/symphony/validateITG/'+ EngagementData.project.dataDetails.itgField)
    //         .then(function successCallback(response) {
    //             if (response.data.configNameExists && EngagementData.project.dataDetails.itgField) {
    //                 // valid ITG 128302
    //                 EngagementData.project.dataDetails.itgField = response.data.statusCode;
    //             } else{
    //                 $scope.itgError = response.data.failReason;
    //             }
    //         },
    //         function errorCallback(response) {
    //             console.log("ADRE Error getting current user information" + response);
    //         });
    //     }
        
    //     $scope.isManager = function() {
    //         $http.get('http://localhost:8090/GateWayService/rest/CommonServiceInterface/ldapOperations/isManager/'+ EngagementData.project.dataDetails.mgrField)
    //         .then(function successCallback(response) {
    //             if (response.data.configNameExists && EngagementData.project.dataDetails.mgrField) {
    //                 EngagementData.project.dataDetails.mgrField = response.data.statusCode;
    //             } else{
    //                 $scope.isManagerError = response.data.failReason;
    //             }
    //         },
    //         function errorCallback(response) {
    //             console.log("ADRE Error getting current user information" + response);
    //         });
    //     }
        
    //     $scope.getEai = function(val) {
    //         $http.get('http://localhost:8090/GateWayService/rest/CommonServiceInterface/symphony/getEAI/'+ val)
    //         .then(function successCallback(response) {
    //             if (response.data.eaiInfo) {
    //                 $scope.eaiSearch = response.data.eaiInfo.eaiNumber + response.data.eaiInfo.eaiName;
    //                 //$scope.eai = response.data.eaiInfo.eaiName;
    //                 // $scope.addedEais = response.data.eaiInfo.eai;
    //             } else{
    //                 $scope.eaiError = response.data.failReason;
    //             }
    //         },
    //         function errorCallback(response) {
    //             console.log("ADRE Error getting current user information" + response);
    //         });
    //     }
        
    //     $scope.back = function(){
    //         if(screen.capItems){
    //             EngagementFlow.setEngScreen(false);
    //             EngagementFlow.setCapQScreen(true);
    //         }else {
    //             EngagementFlow.setEngScreen(false);
    //             EngagementFlow.setInitScreen(true);
    //         }
    //     }
        
    //     $scope.removeEai = function() {
    //         alert("Comming Soon!");
    //     }
        
    //     $scope.removeHost = function() {
    //         alert("Comming Soon!");
    //     }
        
    //     $scope.saveEngagement = function() {
    //         alert("Comming Soon!");
    //     }
        
    //     $scope.createEngagement = function() {
    //         alert("Comming Soon!");
    //     }
        
    //     $scope.cancelEngagement = function() {
    //         alert("Comming Soon!");
    //     }
        
    //     // $scope.dateAdd = function(num) {
    //     //     $scope.date.add(num, 'days');
    //     // }
    //     //$scope.newdate = $scope.mydate.setDate($scope.mydate.getDate() + 7);
        	
    //     //this to be replaced with a service that pulls data from ITG if possible	
		
    //     // ec.moveItem = function(item, from, to) {
    //     //     var idx=from.indexOf(item);
    //     //     if (idx != -1) {
    //     //         if(from[idx].preload == 'true') {
    //     //             from.splice(idx, 1);
    //     //             to.push(item);
    //     //         } else {
    //     //             from.splice(idx, 1);
    //     //         }      
    //     //     }
    //     // };
        
    //     // ec.moveAll = function(from, to) {
    //     //     angular.forEach(from, function(item) {
    //     //         var idx=from.indexOf(item);
    //     //         if (idx != -1) {
    //     //             if(from[idx].preload == 'true') {
    //     //                 to.push(item);
    //     //             }
    //     //         }
    //     //     });
    //     //     from.length = 0;
    //     // };
        
    //     $scope.addCustomEai = function () {
    //         if($scope.eai){
    //             EngagementData.project.dataDetails.eai.push($scope.eai);
                
    //             // Clear input fields after push
    //             $scope.eai = "";
    //         }         
    //     };
        
    //     $scope.addHostname = function () {
    //         if($scope.hostname){
    //             EngagementData.project.capacityPlanData.serverHostNames.push($scope.hostname);
                
    //             // Clear input fields after push
    //             $scope.hostname = "";
    //         }         
    //     };   
	// }
    
// })(window.angular);