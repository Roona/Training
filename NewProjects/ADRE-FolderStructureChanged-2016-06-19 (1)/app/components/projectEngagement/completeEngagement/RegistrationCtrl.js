(function(angular, _) {
    "use strict"
    angular.module('registrationCtrl', [])
        .controller("RegistrationCtrl", RegistrationCtrl);

    function RegistrationCtrl($scope, $window, Engagement) {
        self = this;
        self.Engagement = Engagement;
        // $scope.$on('$locationChangeStart', function(scope, next, current) {
        //     if (!$window.confirm('Are you sure you want to leave the Engagement screen? Any data collected thus far will be lost')) {
        //         scope.preventDefault();
        //     }
        // });
    }

})(window.angular);