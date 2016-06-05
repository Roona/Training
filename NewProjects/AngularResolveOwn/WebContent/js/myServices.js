angular.module('myServices', ['ngResource']).
    factory('cityDetailResource', function ($resource) {
        var CityDetailResource = $resource('https://api.mongolab.com/api/1/databases' +
                '/vijay8090/collections/angularcity/',
                {apiKey:'9gr9A0ITPNQuQPZhd0KtrVVpgEAC0fj9'},
                {monogolabQuery:{method:'GET', params:{q:""}, isArray:true}});


        CityDetailResource.prototype.getCrewByStarship = function (cityQuery, successCb, failCb) {
            var queryObj = {city:cityQuery};
            var query = JSON.stringify(queryObj);
            return CityDetailResource.monogolabQuery({q:query}, successCb, failCb);
        };

        return new CityDetailResource;
    });