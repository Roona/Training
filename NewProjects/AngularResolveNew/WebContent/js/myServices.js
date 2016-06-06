angular.module('pageServices', ['ngResource']).
    factory('pageResource', function ($resource) {
        var PageDetailResource = $resource();


        PageDetailResource.prototype.getNextPageObject = function (pageName, successCb, failCb) {
           // var queryObj = {city:cityQuery};
           // var query = JSON.stringify(queryObj);
            var mainObj = [{result:"success",page:pageName}];
            return successCb(mainObj);
        };

        return new PageDetailResource;
    });