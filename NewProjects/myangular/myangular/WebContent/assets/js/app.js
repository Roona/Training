/**
 * @author 		:	Roona
 * @Date 		:	June, 6 , 2016
 * @FileName	:	app.js
 */

// Create app module
//var app = angular.module('adre', ['ngRoute']);

var app = angular.module('adre', ['ui.router']);


// config Route resolver ( @Ref: RouteConfig.js)
//app.config(RouteConfig);

//config State resolver ( @Ref: StateConfig.js)
app.config(StateConfig);

// Config Controlled  (@Ref : AdreCtrl.js)
app.controller('AdreCtrl',AdreCtrl);