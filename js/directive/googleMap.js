angular.module('zach')
.directive('contactHider', function(){
    return {
        restrict: 'E',
        templateUrl: 'js/tmpl/contact.html',
        replace: true,
        scope: {
            
        }
    }
})