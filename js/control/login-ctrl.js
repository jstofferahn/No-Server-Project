angular.module('zach').controller('loginCtrl', function($scope, UserService, $state){
    $scope.login = function(){
        UserService.login($scope.user).then(function(authedUser){
            $state.go('menu');
        }).catch(function(err){
            alert("bad login", err);
        })
    }
})