angular.module('zach')
.directive('pictureHider', function(){
    return {
        restrict: 'E',
        templateUrl: 'js/tmpl/pictureslider.html',
        controller: function($scope, pictureService) {
            $scope.images = pictureService.pictures
           
           $scope.currentIndex = 0;
           
           $scope.setCurrentSlideIndex = function(index) {
               $scope.currentIndex = index;
           }
           $scope.isCurrentSlideIndex = function(index) {
               return $scope.currentIndex === index;
           }
            $scope.prevSlide = function () {
                 $scope.currentIndex = ($scope.currentIndex < $scope.images.length - 1) ? ++$scope.currentIndex : 0;
        };

        $scope.nextSlide = function () {
                $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.images.length - 1;
        };
          
        $scope.showPhoto = function(index) {
            $scope.currentIndex = index;
        }
           
        },
       
        scope: {
            images: '='
        }
    }
  
});