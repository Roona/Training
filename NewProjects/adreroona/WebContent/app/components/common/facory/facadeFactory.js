/*var app = angular.module('facadeFactory', []);
    
app.factory('facadeFactory', function(){
    return {
        getEngagementQuestions: function(){
        	 var promise = $http.get('app/components/common/resources/questions.json');
             promise.then(function (response) {
            	 resolveObj.questions = response.data.questions;
            	 successCb(resolveObj);
             },
             function(reason) {
                // alert('Failed');
                 successCb(resolveObj);
             });
        } 
    }               
});*/


angular.module('facadeFactory', ['ngResource']).
    factory('engagementResource', function ($resource) {
    	
        var EngagementResource = $resource('https://api.mongolab.com/api/1/databases' +
                '/roona/collections/angularcity/',
                {apiKey:'h3Qup5MlWQtUZqk1UtJgA7unhJJCn8kg'},
                {monogolabQuery:{method:'GET', params:{q:""}, isArray:true}});


        EngagementResource.prototype.getEngagementQuestions = function (cityQuery, successCb, failCb) {
            var queryObj = {city:cityQuery};
            var query = JSON.stringify(queryObj);
            return CityDetailResource.monogolabQuery({q:query}, successCb, failCb);
        };

        return new EngagementResource;
    }).
    factory('projectLaunchResource', function ($resource) {
    	
        var ProjectLaunchResource = $resource('https://api.mongolab.com/api/1/databases' +
                '/roona/collections/angularcity/',
                {apiKey:'h3Qup5MlWQtUZqk1UtJgA7unhJJCn8kg'},
                {monogolabQuery:{method:'GET', params:{q:""}, isArray:true}});


        ProjectLaunchResource.prototype.getProjects = function (cityQuery, successCb, failCb) {
            var queryObj = {city:cityQuery};
            var query = JSON.stringify(queryObj);
            return CityDetailResource.monogolabQuery({q:query}, successCb, failCb);
        };

        return new ProjectLaunchResource;
    }
    
    
    );