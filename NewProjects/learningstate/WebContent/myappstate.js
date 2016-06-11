var app = angular.module("demo", [ "ui.router" ,"homeControllerModule","studentsControllerModule","courseControllerModule"]);



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
            controller : 'courseController'
        };
    
    $stateProvider    
    	.state(home)
    	.state(students)
    	.state(course)
        ;
         
        
};


app.config(StateConfig);







 


