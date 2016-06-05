angular.module('myServices', ['ngResource']).
    factory('cityDetailResource', function ($resource) {
        var CityDetailResource = $resource('https://api.mongolab.com/api/1/databases' +
                '/roona/collections/angularcity/',
                {apiKey:'h3Qup5MlWQtUZqk1UtJgA7unhJJCn8kg'},
                {monogolabQuery:{method:'GET', params:{q:""}, isArray:true}});


        CityDetailResource.prototype.getDetailsByCity = function (cityQuery, successCb, failCb) {
            var queryObj = {city:cityQuery};
            var query = JSON.stringify(queryObj);
            return CityDetailResource.monogolabQuery({q:query}, successCb, failCb);
        };

        return new CityDetailResource;
    });