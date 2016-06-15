var app=angular.module("courseControllerModule",[]);
app.controller("courseController ", function() {
	self=this;
	self.coursetabs = [ 
	               {tabname:"engineering",sref:"engineering",visible:true},
	               {tabname:"medicine",sref:"medicine",visible:true},
	               
	               ];
});