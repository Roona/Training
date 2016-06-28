(function(angular, _) {
    "use strict"
    angular.module('EIAListService', [])

        .service('EIAListService', function EIAListService() {
            var self = this;     
            self.eaiRec = [];
            
            
            this.initialize = function(eaiRec){
                if(eaiRec){
                    this.clear();
                    self.eaiRec = eaiRec;
                   
                }
            };
            this.clear = function(){
            	self.eaiRec = [];
            };
            
        });
})(window.angular);