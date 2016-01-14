angular.module('zach').controller('mapCtrl', function($scope){
    
    
     var map;
            $scope.initMap = function() {
                map = new google.maps.Map(document.getElementById('map-canvas'), {
                    center: {lat: 32.762220, lng: -117.067183},
                    zoom: 16
                });
                var marker = new google.maps.Marker({
                position: {lat: 32.762220, lng: -117.067183},
                map: map,
                title: 'Hello World!'
                });
                marker.setMap(map);
         }



})