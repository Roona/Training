(function(angular, _) {
    "use strict"
    angular.module('IAListService', [])

        .service('IAListService', function IAListService() {
            var self = this;     
            self.iaNames = [];
            
            
            this.initialize = function(iaNames){
                if(iaNames){
                    this.clear();
                    self.iaNames = iaNames;
                   
                }
            };
            this.clear = function(){
            	self.iaNames = [];
            };
            
        });
})(window.angular);