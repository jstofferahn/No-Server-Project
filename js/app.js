 angular.module('zach', [ 'ui.router', 'firebase' ])
 
 .config(function($stateProvider, $urlRouterProvider){
     $stateProvider
     .state('login', {
         url: '/login',
         controller: 'loginCtrl',
         templateUrl: 'js/tmpl/login.html'
     })
     .state('signup', {
         url: '/signup',
         controller: 'signupCtrl',
         templateUrl: 'js/tmpl/signup.html'
     })
     .state ('logout', {
         url: '/logout',
         controller: function(UserService){
             return UserService.logout();
         }
     })
     .state('menu', {
         url: '/menu',
         templateUrl: 'js/tmpl/menu.html',
         controller: 'menuCtrl',
         resolve: {
             menuRef: function(menuService) {
                 return menuService.getFoods();
             }
         }
     })
     .state('menus', {
         url: '/menu/:menusId',
         templateUrl: 'js/tmpl/menus.html',
         controller: 'menusCtrl',
         resolve : {
             menusRef: function(menuService, $stateParams){
                 return menuService.getFood($stateParams.menusId);
             },
             descRef: function(menuService, $stateParams){
                 return menuService.getNewItem($stateParams.menusId);
             }
         }
     })
     .state('home', {
         url: '/',
         views: {
             'fixedLogo': {
                 templateUrl: 'js/tmpl/fixedLogo.html'
             },
             'about': {
                 templateUrl: 'js/tmpl/about.html'
             }
         }
     })
     $urlRouterProvider.otherwise('/');
 })