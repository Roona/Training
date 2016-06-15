var app = angular.module("demo", [ "ui.router" ,"homeControllerModule","studentsControllerModule","courseControllerModule","mainControllerModule"]);



/*app.controller("homeController", function($scope) {
	$scope.message = "homepage";
}); 
*/
/*app.controller("studentsController", function($scope) {
	$scope.students = [ "name1", "name2", "name3" ];
});*/
/*
app.controller("courseController", function($scope) {
	$scope.courses = [ "java", "sql", "unix", "angular" ];
});
*/

var StateConfig = function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('#/');
    
    
    var home = {
            name: 'home',
            url: '/',
            templateUrl: 'templates/home.html',
            controller : 'homeController'
        };
    
    
    var students = {
            name: 'students',
            url: '/',
            templateUrl: 'templates/students.html',
            controller : 'studentsController'
        };
    
    
    
    var course = {
            name: 'course',
            url: '/',
            templateUrl: 'templates/course.html',
            controller : 'courseController',
            	controllerAs:'cc' 
        };
    var engineering = {
            name: 'course.engineering',
            url: '/',
            templateUrl: 'templates/engineering.html',
            controller : 'engineeringController'
        };
    var medicine = {
            name: 'course.medicine',
            url: '/',
            templateUrl: 'templates/medicine.html',
            controller : 'medicineController'
        };
    
    
    $stateProvider    
    	.state(home)
    	.state(students)
    	.state(course)
    	.state(engineering)
    	.state(medicine)
        ;
         
        
};


app.config(StateConfig);


//app.controller('mainController',mainController);







 


