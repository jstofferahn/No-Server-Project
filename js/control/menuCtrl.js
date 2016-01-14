angular.module('zach').controller('menuCtrl', function(menuRef, $scope, $firebaseArray){
    $scope.newItem = {};
    $scope.menu = $firebaseArray(menuRef);
    $scope.addMenu = function (title, description, price){
        $scope.menu.$add({
            title: title,
            description: description,
            price: price
        })
    }
    
    
    
})