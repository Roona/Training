(function(angular, _) {
    "use strict"
    angular.module('HomeTabService', [])

        .service('HomeTabService', function HomeTabService() {
            var self = this;     
           
           
            
            self.headerTab = {
                    title:adreConstants.TAB_HOME,
                    id :"homeTab",
                    url  :"/Home",
                    newUrl :"/Home",
                    visible : true
                };
            
            self.rightTab= 
            
            {
                title:adreConstants.TAB_LOGIN,
                id :"loginTab",
                url  :"#",
                newUrl :"#",
                isRight :true,
                visible : true
            };
            
            
            self.tabs = [
                         
                         {
                             title:adreConstants.TAB_ENGAGEMENT,
                             id :"engagementTab",
                             url  :"/ProjectLaunch",
                             newUrl :"/ProjectLaunch",
                             hasSubMenu : false,
                             visible : true
                         },
                         {
                             title:adreConstants.TAB_CAPACITY,
                             id :"capacityTab",
                             url  :"/Capacity",
                             newUrl :"/Capacity",
                             hasSubMenu : false,
                             visible : true
                         },
                         {
                             title:adreConstants.TAB_ADMIN,
                             id :"adminTab",
                             url  :"/Admin",
                             newUrl :"/Admin",
                             visible : true,
                             hasSubMenu : true,
                             subMenu :[
                                       {
			                             title:adreConstants.TAB_MANAGER_MATRIX,
			                             id :"managerMatrixTab",
			                             url  :"/ManagerMatrix",
			                             newUrl :"/Admin",
			                             visible : true
                                       }
                                       ]
                         },
                         
                         {
                             title:adreConstants.TAB_HELP,
                             id :"helpTab",
                             url  :"/Help",
                             newUrl :"/Help",
                             hasSubMenu : false,
                             visible : true
                         }
                     ];
         
            
        });
})(window.angular);