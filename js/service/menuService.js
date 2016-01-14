angular.module('zach').service('menuService', function(Firebase){
    this.getFoods = function(){
        return new Firebase('https://fishpitt.firebaseio.com/' + '/menu')
    }
    this.getFood = function(menusId) {
        return new Firebase("https://fishpitt.firebaseio.com/" + '/menu' + menusId)
    }
    this.getNewItem = function(menusId) {
        return new Firebase('https://fishpitt.firebaseio.com/' + '/menu' + menusId + '/item')
    }
    
})