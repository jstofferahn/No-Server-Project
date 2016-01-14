angular.module('zach').controller('menusCtrl', function(menusRef, descRef, $scope, $firebaseObject, $firebaseArray){
    var menus = $firebaseObject(menusRef);
    
    menus.$bindTo($scope, 'menu');
    
    $scope.description = $firebaseArray(descRef);
    
    $scope.createDescription = function(title, description, price) {
        $scope.description.$add({
            title: title,
            description: description,
            price: price
        })
    }
    
    
})